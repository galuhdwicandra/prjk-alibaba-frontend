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
  getBadge: (product: Product) => { label: string; variant: "success" | "warning" | "info" | "danger" };
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
      <div className="space-y-4">
        <PageHeader title={title} description={description} />

        <Card>
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card>

        {productsQuery.isLoading ? (
          <Card>Memuat data produk...</Card>
        ) : productsQuery.isError ? (
          <PageErrorState onRetry={() => void productsQuery.refetch()} />
        ) : !products.length ? (
          <PageEmptyState title={emptyTitle} />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {products.map((product) => {
              const badge = getBadge(product);

              return (
                <Card
                  key={product.id}
                  title={product.name}
                  description={product.category?.name ?? "-"}
                  actions={<Badge variant={badge.variant}>{badge.label}</Badge>}
                >
                  <div className="space-y-2 text-sm text-slate-600">{renderSummary(product)}</div>

                  <div className="mt-4">
                    <Button onClick={() => openEditor(product)}>Kelola</Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={open}
          title={`${title}${editingProduct ? ` — ${editingProduct.name}` : ""}`}
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
          <div className="max-h-[70vh] overflow-y-auto pr-1">
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