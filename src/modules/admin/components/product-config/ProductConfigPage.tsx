import { useMemo, useState, type ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  catalogService,
  type ProductPayload,
} from "@/modules/admin/services/catalog.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Product } from "@/types/product";

interface ProductConfigPageProps<TState> {
  title: string;
  description: string;
  queryKey: string;
  emptyTitle: string;
  searchPlaceholder: string;
  saveButtonLabel: string;
  getBadge: (product: Product) => {
    label: string;
    variant: "success" | "warning" | "info" | "danger";
  };
  renderSummary: (product: Product) => ReactNode;
  mapFromProduct: (product: Product) => TState;
  renderEditor: (args: {
    value: TState;
    onChange: (next: TState) => void;
    product: Product | null;
    products: Product[];
  }) => ReactNode;
  buildPayload: (args: { value: TState; product: Product }) => Partial<ProductPayload>;
  filterProducts?: (products: Product[]) => Product[];
}

export function ProductConfigPage<TState>({
  title,
  description,
  queryKey,
  emptyTitle,
  searchPlaceholder,
  saveButtonLabel,
  getBadge,
  renderSummary,
  mapFromProduct,
  renderEditor,
  buildPayload,
  filterProducts,
}: ProductConfigPageProps<TState>) {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editorState, setEditorState] = useState<TState | null>(null);

  const productsQuery = useQuery({
    queryKey: [queryKey, search],
    queryFn: () => catalogService.getProducts({ per_page: 100, search }),
  });

  const allProducts = useMemo(() => productsQuery.data?.items ?? [], [productsQuery.data?.items]);

  const products = useMemo(
    () => (filterProducts ? filterProducts(allProducts) : allProducts),
    [allProducts, filterProducts]
  );

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!editingProduct || editorState === null) {
        throw new Error("Produk tidak dipilih");
      }

      const payload = buildPayload({
        value: editorState,
        product: editingProduct,
      });

      return catalogService.updateProduct(editingProduct.id, payload as ProductPayload);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditingProduct(null);
      setEditorState(null);
      void queryClient.invalidateQueries({ queryKey: [queryKey] });
      void queryClient.invalidateQueries({ queryKey: ["admin-products"] });
    },
    onError: (error) => {
      toast.error(`Gagal menyimpan ${title.toLowerCase()}`, parseApiError(error));
    },
  });

  const openEditor = (product: Product) => {
    setEditingProduct(product);
    setEditorState(mapFromProduct(product));
    setOpen(true);
  };

  return (
    <PermissionWrapper permission="products.view">
      <div className="space-y-5">
        <PageHeader title={title} description={description} />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <Input
              label="Pencarian Produk"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Produk
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {products.length}
              </div>
            </div>
          </div>
        </Card>

        {productsQuery.isLoading ? (
          <Card>
            <div className="grid gap-4 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="h-4 w-2/3 rounded-full bg-slate-200" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-slate-200" />
                  <div className="mt-5 space-y-2">
                    <div className="h-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-5 h-9 w-24 rounded-xl bg-slate-200" />
                </div>
              ))}
            </div>
          </Card>
        ) : productsQuery.isError ? (
          <PageErrorState onRetry={() => void productsQuery.refetch()} />
        ) : !products.length ? (
          <PageEmptyState
            title={emptyTitle}
            description="Data produk belum tersedia atau tidak cocok dengan pencarian."
          />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {products.map((product) => {
              const badge = getBadge(product);

              return (
                <Card
                  key={product.id}
                  title={product.name}
                  description={product.category?.name ?? "-"}
                  actions={<Badge variant={badge.variant}>{badge.label}</Badge>}
                >
                  <div className="flex h-full flex-col gap-5">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            Ringkasan Konfigurasi
                          </div>
                          <div className="mt-1 text-sm font-semibold text-slate-900">
                            {product.name}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm leading-6 text-slate-600">
                        {renderSummary(product)}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs leading-5 text-slate-500">
                        Kelola konfigurasi produk tanpa mengubah data utama produk.
                      </p>

                      <Button onClick={() => openEditor(product)}>Kelola</Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={open}
          title={`${title}${editingProduct ? ` — ${editingProduct.name}` : ""}`}
          description="Atur konfigurasi produk dengan teliti sebelum menyimpan perubahan."
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                {saveButtonLabel}
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] overflow-y-auto pr-1">
            {editingProduct ? (
              <div className="mb-5 rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                  Produk Dipilih
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  {editingProduct.name}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {editingProduct.category?.name ?? "Tanpa kategori"}
                </div>
              </div>
            ) : null}

            {editorState !== null
              ? renderEditor({
                  value: editorState,
                  onChange: setEditorState,
                  product: editingProduct,
                  products: allProducts,
                })
              : null}
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}