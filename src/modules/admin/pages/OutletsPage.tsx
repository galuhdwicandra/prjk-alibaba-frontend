import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  masterDataService,
  type OutletPayload,
  type OutletSettingPayload,
} from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Outlet } from "@/types/outlet";

const initialOutletForm: OutletPayload = {
  code: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  province: "",
  postal_code: "",
  latitude: "",
  longitude: "",
  opening_time: "",
  closing_time: "",
  is_active: true,
};

const initialSettingForm: OutletSettingPayload = {
  tax_percent: 0,
  service_charge_percent: 0,
  currency_code: "IDR",
  receipt_footer: "",
  invoice_prefix: "",
  order_prefix: "",
  timezone: "Asia/Jakarta",
  allow_negative_stock: false,
  low_stock_notification_enabled: true,
};

export default function OutletsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [openOutletModal, setOpenOutletModal] = useState(false);
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [editingOutlet, setEditingOutlet] = useState<Outlet | null>(null);
  const [outletForm, setOutletForm] = useState<OutletPayload>(initialOutletForm);
  const [settingOutlet, setSettingOutlet] = useState<Outlet | null>(null);
  const [settingForm, setSettingForm] = useState<OutletSettingPayload>(initialSettingForm);

  const outletsQuery = useQuery({
    queryKey: ["admin-outlets", search],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, search }),
  });

  const saveOutletMutation = useMutation({
    mutationFn: (payload: OutletPayload) =>
      editingOutlet
        ? masterDataService.updateOutlet(editingOutlet.id, payload)
        : masterDataService.createOutlet(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenOutletModal(false);
      setEditingOutlet(null);
      setOutletForm(initialOutletForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-outlets"] });
    },
    onError: (error) => toast.error("Gagal menyimpan outlet", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deleteOutlet(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-outlets"] });
    },
    onError: (error) => toast.error("Gagal menghapus outlet", parseApiError(error)),
  });

  const saveSettingMutation = useMutation({
    mutationFn: () =>
      settingOutlet
        ? masterDataService.updateOutletSetting(settingOutlet.id, settingForm)
        : Promise.reject(new Error("Outlet tidak dipilih")),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenSettingModal(false);
      setSettingOutlet(null);
      void queryClient.invalidateQueries({ queryKey: ["admin-outlets"] });
    },
    onError: (error) => toast.error("Gagal menyimpan setting outlet", parseApiError(error)),
  });

  const outlets = outletsQuery.data?.items ?? [];

  const openCreate = () => {
    setEditingOutlet(null);
    setOutletForm(initialOutletForm);
    setOpenOutletModal(true);
  };

  const openEdit = (outlet: Outlet) => {
    setEditingOutlet(outlet);
    setOutletForm({
      code: outlet.code,
      name: outlet.name,
      phone: outlet.phone ?? "",
      email: outlet.email ?? "",
      address: outlet.address ?? "",
      city: outlet.city ?? "",
      province: outlet.province ?? "",
      postal_code: outlet.postal_code ?? "",
      latitude: outlet.latitude ?? "",
      longitude: outlet.longitude ?? "",
      opening_time: outlet.opening_time ?? "",
      closing_time: outlet.closing_time ?? "",
      is_active: outlet.is_active,
    });
    setOpenOutletModal(true);
  };

  const openSetting = async (outlet: Outlet) => {
    try {
      const response = await masterDataService.getOutletSetting(outlet.id);

      setSettingOutlet(outlet);
      setSettingForm({
        tax_percent: Number(response.data.tax_percent),
        service_charge_percent: Number(response.data.service_charge_percent),
        currency_code: response.data.currency_code,
        receipt_footer: response.data.receipt_footer ?? "",
        invoice_prefix: response.data.invoice_prefix ?? "",
        order_prefix: response.data.order_prefix ?? "",
        timezone: response.data.timezone,
        allow_negative_stock: response.data.allow_negative_stock,
        low_stock_notification_enabled: response.data.low_stock_notification_enabled,
      });
      setOpenSettingModal(true);
    } catch (error) {
      toast.error("Gagal mengambil setting outlet", parseApiError(error));
    }
  };

  return (
    <PermissionWrapper permission="outlets.view">
      <div className="space-y-4">
        <PageHeader
          title="Outlets"
          description="Kelola cabang dan setting per outlet."
          actions={<Button onClick={openCreate}>Tambah Outlet</Button>}
        />

        <Card>
          <Input
            placeholder="Cari code, nama, kota, atau provinsi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card>

        {outletsQuery.isLoading ? (
          <Card>Memuat data outlet...</Card>
        ) : outletsQuery.isError ? (
          <PageErrorState onRetry={() => void outletsQuery.refetch()} />
        ) : !outlets.length ? (
          <PageEmptyState title="Belum ada outlet" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {outlets.map((outlet) => (
              <Card
                key={outlet.id}
                title={`${outlet.name} (${outlet.code})`}
                description={outlet.address ?? "-"}
                actions={
                  <Badge variant={outlet.is_active ? "success" : "danger"}>
                    {outlet.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                }
              >
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Kota: {outlet.city ?? "-"}</div>
                  <div>Provinsi: {outlet.province ?? "-"}</div>
                  <div>Jam Operasional: {outlet.opening_time ?? "-"} - {outlet.closing_time ?? "-"}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => openEdit(outlet)}>
                    Edit Outlet
                  </Button>
                  <Button variant="secondary" onClick={() => void openSetting(outlet)}>
                    Setting Outlet
                  </Button>
                  <Button
                    variant="danger"
                    loading={deleteMutation.isPending}
                    onClick={() => deleteMutation.mutate(outlet.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openOutletModal}
          title={editingOutlet ? "Edit Outlet" : "Tambah Outlet"}
          onClose={() => setOpenOutletModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenOutletModal(false)}>
                Batal
              </Button>
              <Button
                loading={saveOutletMutation.isPending}
                onClick={() => saveOutletMutation.mutate(outletForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Kode Outlet"
              value={outletForm.code}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, code: e.target.value }))}
            />
            <Input
              label="Nama Outlet"
              value={outletForm.name}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, name: e.target.value }))}
            />
            <Input
              label="Phone"
              value={outletForm.phone ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, phone: e.target.value }))}
            />
            <Input
              label="Email"
              value={outletForm.email ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, email: e.target.value }))}
            />
            <Input
              label="City"
              value={outletForm.city ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, city: e.target.value }))}
            />
            <Input
              label="Province"
              value={outletForm.province ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, province: e.target.value }))}
            />
            <Input
              label="Postal Code"
              value={outletForm.postal_code ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, postal_code: e.target.value }))}
            />
            <Input
              label="Address"
              value={outletForm.address ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, address: e.target.value }))}
            />
            <Input
              label="Latitude"
              value={outletForm.latitude ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, latitude: e.target.value }))}
            />
            <Input
              label="Longitude"
              value={outletForm.longitude ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, longitude: e.target.value }))}
            />
            <Input
              label="Opening Time"
              type="time"
              value={outletForm.opening_time ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, opening_time: e.target.value }))}
            />
            <Input
              label="Closing Time"
              type="time"
              value={outletForm.closing_time ?? ""}
              onChange={(e) => setOutletForm((prev) => ({ ...prev, closing_time: e.target.value }))}
            />
            <div className="md:col-span-2">
              <Checkbox
                label="Outlet aktif"
                checked={Boolean(outletForm.is_active)}
                onChange={(e) => setOutletForm((prev) => ({ ...prev, is_active: e.target.checked }))}
              />
            </div>
          </div>
        </Modal>

        <Modal
          open={openSettingModal}
          title={`Setting Outlet${settingOutlet ? ` — ${settingOutlet.name}` : ""}`}
          onClose={() => setOpenSettingModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenSettingModal(false)}>
                Batal
              </Button>
              <Button loading={saveSettingMutation.isPending} onClick={() => saveSettingMutation.mutate()}>
                Simpan Setting
              </Button>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Tax Percent"
              type="number"
              value={String(settingForm.tax_percent ?? 0)}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, tax_percent: Number(e.target.value) }))
              }
            />
            <Input
              label="Service Charge Percent"
              type="number"
              value={String(settingForm.service_charge_percent ?? 0)}
              onChange={(e) =>
                setSettingForm((prev) => ({
                  ...prev,
                  service_charge_percent: Number(e.target.value),
                }))
              }
            />
            <Input
              label="Currency Code"
              value={settingForm.currency_code ?? "IDR"}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, currency_code: e.target.value }))
              }
            />
            <Input
              label="Timezone"
              value={settingForm.timezone ?? "Asia/Jakarta"}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, timezone: e.target.value }))
              }
            />
            <Input
              label="Invoice Prefix"
              value={settingForm.invoice_prefix ?? ""}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, invoice_prefix: e.target.value }))
              }
            />
            <Input
              label="Order Prefix"
              value={settingForm.order_prefix ?? ""}
              onChange={(e) =>
                setSettingForm((prev) => ({ ...prev, order_prefix: e.target.value }))
              }
            />
            <div className="md:col-span-2">
              <Input
                label="Receipt Footer"
                value={settingForm.receipt_footer ?? ""}
                onChange={(e) =>
                  setSettingForm((prev) => ({ ...prev, receipt_footer: e.target.value }))
                }
              />
            </div>
            <div className="md:col-span-2 grid gap-2">
              <Checkbox
                label="Allow negative stock"
                checked={Boolean(settingForm.allow_negative_stock)}
                onChange={(e) =>
                  setSettingForm((prev) => ({
                    ...prev,
                    allow_negative_stock: e.target.checked,
                  }))
                }
              />
              <Checkbox
                label="Low stock notification enabled"
                checked={Boolean(settingForm.low_stock_notification_enabled)}
                onChange={(e) =>
                  setSettingForm((prev) => ({
                    ...prev,
                    low_stock_notification_enabled: e.target.checked,
                  }))
                }
              />
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}