import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card } from "@/components/ui";
import { ReportFilters } from "@/modules/reporting/components/ReportFilters";
import { ReportDataTable } from "@/modules/reporting/components/ReportDataTable";
import { reportDefinitions, reportService } from "@/modules/reporting/services/report.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { ReportExportFormat, ReportFilterParams, ReportKey } from "@/types/report";

const today = new Date().toISOString().slice(0, 10);

const initialFilters: ReportFilterParams = {
    date_from: today,
    date_until: today,
    group_by: "day",
    limit: 100,
    per_page: 100,
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(value);
};

interface NumericSummary {
    amount: number;
    count: number;
}

const getNumericSummary = (
    rows: Record<string, string | number | boolean | null>[]
): NumericSummary => {
    return rows.reduce<NumericSummary>(
        (accumulator, row) => {
            Object.entries(row).forEach(([key, value]) => {
                if (typeof value !== "number") {
                    return;
                }

                const normalizedKey = key.toLowerCase();

                if (
                    normalizedKey.includes("total") ||
                    normalizedKey.includes("amount") ||
                    normalizedKey.includes("grand") ||
                    normalizedKey.includes("subtotal") ||
                    normalizedKey.includes("sales") ||
                    normalizedKey.includes("revenue")
                ) {
                    accumulator.amount += value;
                }

                if (
                    normalizedKey.includes("count") ||
                    normalizedKey.includes("qty") ||
                    normalizedKey.includes("quantity") ||
                    normalizedKey.includes("orders")
                ) {
                    accumulator.count += value;
                }
            });

            return accumulator;
        },
        {
            amount: 0,
            count: 0,
        }
    );
};

export default function ReportsPage() {
    const toast = useToast();

    const [selectedReport, setSelectedReport] = useState<ReportKey>("sales-summary");
    const [filters, setFilters] = useState<ReportFilterParams>(initialFilters);
    const [exportFormat, setExportFormat] = useState<ReportExportFormat>("csv");

    const selectedDefinition = useMemo(
        () => reportDefinitions.find((definition) => definition.key === selectedReport),
        [selectedReport]
    );

    const reportQuery = useQuery({
        queryKey: ["reports", selectedReport, filters],
        queryFn: () => reportService.getReport(selectedReport, filters),
    });

    const rows = useMemo(() => {
        const data = reportQuery.data?.data;

        if (!data) {
            return [];
        }

        if (Array.isArray(data)) {
            return data;
        }

        const possibleRows = Object.values(data).find((value) => Array.isArray(value));

        if (Array.isArray(possibleRows)) {
            return possibleRows.filter(
                (item): item is Record<string, string | number | boolean | null> =>
                    typeof item === "object" && item !== null && !Array.isArray(item)
            );
        }

        const metadataKeys = new Set(["filters", "filter", "meta", "metadata"]);

        const cleanRow = Object.entries(data).reduce<Record<string, string | number | boolean | null>>(
            (accumulator, [key, value]) => {
                if (metadataKeys.has(key)) {
                    return accumulator;
                }

                if (
                    typeof value === "string" ||
                    typeof value === "number" ||
                    typeof value === "boolean" ||
                    value === null
                ) {
                    accumulator[key] = value;
                }

                return accumulator;
            },
            {}
        );

        return Object.keys(cleanRow).length ? [cleanRow] : [];
    }, [reportQuery.data?.data]);

    const numericSummary = useMemo(() => getNumericSummary(rows), [rows]);

    const exportMutation = useMutation({
        mutationFn: async () => {
            const blob = await reportService.exportReport(selectedReport, {
                ...filters,
                format: exportFormat,
                limit: filters.limit ?? 1000,
                per_page: filters.per_page ?? 1000,
            });

            reportService.downloadBlob(blob, selectedReport, exportFormat);
        },
        onSuccess: () => {
            toast.success("Export laporan berhasil diproses.");
        },
        onError: (error) => {
            toast.error("Export laporan gagal", parseApiError(error));
        },
    });

    return (
        <PermissionWrapper permission="reports.view">
            <div className="space-y-4">
                <PageHeader
                    title="Reporting"
                    description="Pusat laporan operasional Chicken Alibaba: penjualan, pembayaran, stok, pembelian, shift, promo, dan expense."
                />

                <Card>
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        {reportDefinitions.map((definition) => {
                            const active = definition.key === selectedReport;

                            return (
                                <button
                                    key={definition.key}
                                    type="button"
                                    onClick={() => setSelectedReport(definition.key)}
                                    className={[
                                        "rounded-2xl border p-4 text-left transition",
                                        active
                                            ? "border-slate-900 bg-slate-900 text-white"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-400",
                                    ].join(" ")}
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <div className="font-semibold">{definition.label}</div>
                                            <div className={["mt-1 text-xs", active ? "text-slate-200" : "text-slate-500"].join(" ")}>
                                                {definition.description}
                                            </div>
                                        </div>

                                        <Badge variant={active ? "info" : "default"}>{definition.category}</Badge>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </Card>

                <ReportFilters
                    value={filters}
                    exportFormat={exportFormat}
                    loading={reportQuery.isFetching}
                    exporting={exportMutation.isPending}
                    onChange={setFilters}
                    onExportFormatChange={setExportFormat}
                    onRefresh={() => void reportQuery.refetch()}
                    onExport={() => exportMutation.mutate()}
                />

                <div className="grid gap-4 md:grid-cols-3">
                    <Card title="Report Aktif" description={selectedDefinition?.description ?? "-"}>
                        <div className="text-2xl font-semibold text-slate-900">
                            {selectedDefinition?.label ?? selectedReport}
                        </div>
                    </Card>

                    <Card title="Total Baris" description="Jumlah data yang diterima dari backend">
                        <div className="text-2xl font-semibold text-slate-900">
                            {rows.length.toLocaleString("id-ID")}
                        </div>
                    </Card>

                    <Card title="Akumulasi Nominal" description="Ringkasan nilai numerik utama">
                        <div className="text-2xl font-semibold text-slate-900">
                            {formatCurrency(numericSummary.amount)}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                            Qty/Count: {numericSummary.count.toLocaleString("id-ID")}
                        </div>
                    </Card>
                </div>

                {reportQuery.isLoading ? (
                    <Card>
                        <div className="py-8 text-center text-sm text-slate-500">Memuat laporan...</div>
                    </Card>
                ) : reportQuery.isError ? (
                    <PageErrorState onRetry={() => void reportQuery.refetch()} />
                ) : (
                    <ReportDataTable rows={rows} />
                )}

                <div className="flex justify-end">
                    <Button variant="outline" loading={reportQuery.isFetching} onClick={() => void reportQuery.refetch()}>
                        Refresh Data
                    </Button>
                </div>
            </div>
        </PermissionWrapper>
    );
}