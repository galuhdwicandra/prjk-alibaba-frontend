import { Badge, Button, Card, Input } from "@/components/ui";
import type { Customer } from "@/types/customer";
import type { PosCartItem, PosOrderChannel } from "@/modules/pos/types/pos";

interface PosCartPanelProps {
  items: PosCartItem[];
  customer: Customer | null;
  customerSearch: string;
  onCustomerSearchChange: (value: string) => void;
  customerResults: Customer[];
  canSearchCustomer: boolean;
  loadingCustomers: boolean;
  orderChannel: PosOrderChannel;
  onOrderChannelChange: (value: PosOrderChannel) => void;
  onPickCustomer: (customer: Customer) => void;
  onClearCustomer: () => void;
  onUpdateQty: (itemId: string, qty: number) => void;
  onUpdateNotes: (itemId: string, notes: string) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onHoldOrder: () => void;
  onRestoreHeldOrder: () => void;
  onDiscardHeldOrder: () => void;
  hasHeldOrder: boolean;
  onSubmitOrder: () => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const channelOptions: Array<{ value: PosOrderChannel; label: string }> = [
  { value: "pos", label: "POS" },
  { value: "takeaway", label: "Takeaway" },
  { value: "dine_in", label: "Dine In" },
  { value: "pickup", label: "Pickup" },
  { value: "delivery", label: "Delivery" },
];

export function PosCartPanel({
  items,
  customer,
  customerSearch,
  onCustomerSearchChange,
  customerResults,
  canSearchCustomer,
  loadingCustomers,
  orderChannel,
  onOrderChannelChange,
  onPickCustomer,
  onClearCustomer,
  onUpdateQty,
  onUpdateNotes,
  onRemoveItem,
  onClearCart,
  onHoldOrder,
  onRestoreHeldOrder,
  onDiscardHeldOrder,
  hasHeldOrder,
  onSubmitOrder,
}: PosCartPanelProps) {
  const itemCount = items.reduce((sum, item) => sum + Number(item.qty ?? 0), 0);
  const subtotal = items.reduce((sum, item) => sum + Number(item.line_total ?? 0), 0);

  return (
    <div className="space-y-4">
      <Card title="Order Context">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Order Channel
            </label>
            <div className="grid grid-cols-2 gap-2">
              {channelOptions.map((option) => {
                const active = option.value === orderChannel;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => onOrderChannelChange(option.value)}
                    className={[
                      "rounded-xl border px-3 py-2 text-sm font-medium transition",
                      active
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Customer Quick Assign
            </label>

            {!canSearchCustomer ? (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                Permission `customers.view` belum tersedia untuk user ini.
              </div>
            ) : (
              <div className="space-y-3">
                <Input
                  placeholder="Cari nama, phone, atau email customer..."
                  value={customerSearch}
                  onChange={(event) => onCustomerSearchChange(event.target.value)}
                />

                {customer ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-medium text-emerald-900">{customer.name}</div>
                        <div className="mt-1 text-xs text-emerald-700">
                          {customer.phone ?? customer.email ?? "Tanpa kontak"}
                        </div>
                      </div>
                      <Button variant="outline" onClick={onClearCustomer}>
                        Lepas
                      </Button>
                    </div>
                  </div>
                ) : null}

                {loadingCustomers ? (
                  <div className="text-sm text-slate-500">Mencari customer...</div>
                ) : customerSearch.trim().length >= 2 && !customerResults.length ? (
                  <div className="text-sm text-slate-500">Customer tidak ditemukan.</div>
                ) : customerResults.length ? (
                  <div className="max-h-56 space-y-2 overflow-y-auto">
                    {customerResults.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onPickCustomer(item)}
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left transition hover:bg-slate-50"
                      >
                        <div className="font-medium text-slate-900">{item.name}</div>
                        <div className="mt-1 text-xs text-slate-500">
                          {item.phone ?? item.email ?? "Tanpa kontak"}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </Card>

      <Card
        title="Cart"
        description={`${itemCount} item`}
        actions={
          items.length ? (
            <Badge variant="info">{formatCurrency(subtotal)}</Badge>
          ) : (
            <Badge variant="warning">Kosong</Badge>
          )
        }
      >
        {!items.length ? (
          <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-10 text-center text-sm text-slate-500">
            Belum ada item di cart.
          </div>
        ) : (
          <div className="max-h-[48vh] space-y-3 overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-medium text-slate-900">{item.product_name}</div>
                    <div className="mt-1 text-xs text-slate-500">
                      Harga dasar {formatCurrency(item.base_unit_price)}
                    </div>
                  </div>
                  <Button variant="danger" onClick={() => onRemoveItem(item.id)}>
                    Hapus
                  </Button>
                </div>

                {item.selected_variants.length ? (
                  <div className="mt-3 space-y-1">
                    {item.selected_variants.map((variant, index) => (
                      <div key={`${item.id}-variant-${index}`} className="text-xs text-slate-600">
                        Variant: {variant.group_name} — {variant.option_name}
                        {Number(variant.price_adjustment ?? 0) > 0
                          ? ` (+${formatCurrency(Number(variant.price_adjustment ?? 0))})`
                          : ""}
                      </div>
                    ))}
                  </div>
                ) : null}

                {item.selected_modifiers.length ? (
                  <div className="mt-3 space-y-1">
                    {item.selected_modifiers.map((modifier, index) => (
                      <div key={`${item.id}-modifier-${index}`} className="text-xs text-slate-600">
                        Modifier: {modifier.group_name} — {modifier.option_name}
                        {Number(modifier.price ?? 0) > 0
                          ? ` (+${formatCurrency(Number(modifier.price ?? 0))})`
                          : ""}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Input
                    label="Qty"
                    type="number"
                    value={String(item.qty)}
                    onChange={(event) => onUpdateQty(item.id, Number(event.target.value || 1))}
                  />
                  <Input
                    label="Catatan"
                    value={item.notes}
                    onChange={(event) => onUpdateNotes(item.id, event.target.value)}
                    placeholder="Opsional"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
                  <span className="text-sm text-slate-500">Total line</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(item.line_total)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title="Order Summary">
        <div className="space-y-3 text-sm text-slate-700">
          <div className="flex items-center justify-between">
            <span>Total qty</span>
            <span>{itemCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
            <span>Total sementara</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          <Button variant="secondary" onClick={onHoldOrder} disabled={!items.length}>
            Hold Order
          </Button>
          <Button variant="outline" onClick={onRestoreHeldOrder} disabled={!hasHeldOrder}>
            Muat Held Order
          </Button>
          <Button variant="outline" onClick={onDiscardHeldOrder} disabled={!hasHeldOrder}>
            Hapus Held Order
          </Button>
          <Button variant="outline" onClick={onClearCart} disabled={!items.length}>
            Clear Cart
          </Button>
          <Button onClick={onSubmitOrder} disabled={!items.length}>
            Simpan Order
          </Button>
        </div>
      </Card>
    </div>
  );
}