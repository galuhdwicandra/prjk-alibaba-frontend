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
  subtotal: number;
  totalQty: number;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const getItemUnitPrice = (item: PosCartItem) => {
  const variantsTotal = (item.selected_variants ?? []).reduce(
    (sum, entry) => sum + Number(entry.price_adjustment || 0),
    0
  );

  const modifiersTotal = (item.selected_modifiers ?? []).reduce(
    (sum, entry) => sum + Number(entry.price || 0) * Number(entry.qty || 0),
    0
  );

  return Number(item.base_unit_price || 0) + variantsTotal + modifiersTotal;
};

const getItemLineTotal = (item: PosCartItem) => getItemUnitPrice(item) * Number(item.qty || 0);

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
  subtotal,
  totalQty,
}: PosCartPanelProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Order Channel</label>
        <select
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          value={orderChannel}
          onChange={(event) => onOrderChannelChange(event.target.value as PosOrderChannel)}
        >
          <option value="pos">pos</option>
          <option value="takeaway">takeaway</option>
          <option value="pickup">pickup</option>
          <option value="dine_in">dine_in</option>
          <option value="delivery">delivery</option>
          <option value="website">website</option>
        </select>
      </div>

      <div className="rounded-2xl border border-slate-200 p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">Customer</div>
          {customer ? (
            <Button variant="outline" onClick={onClearCustomer}>
              Lepas Customer
            </Button>
          ) : null}
        </div>

        {customer ? (
          <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">{customer.name}</div>
            <div>{customer.phone ?? "-"}</div>
            <div>{customer.email ?? "-"}</div>
          </div>
        ) : canSearchCustomer ? (
          <div className="space-y-3">
            <Input
              placeholder="Cari customer minimal 2 huruf..."
              value={customerSearch}
              onChange={(event) => onCustomerSearchChange(event.target.value)}
            />

            {loadingCustomers ? (
              <div className="text-sm text-slate-500">Mencari customer...</div>
            ) : customerSearch.trim().length >= 2 && customerResults.length ? (
              <div className="space-y-2">
                {customerResults.map((entry) => (
                  <button
                    key={entry.id}
                    type="button"
                    className="w-full rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-50"
                    onClick={() => onPickCustomer(entry)}
                  >
                    <div className="font-medium text-slate-900">{entry.name}</div>
                    <div className="text-xs text-slate-500">
                      {entry.phone ?? "-"} · {entry.email ?? "-"}
                    </div>
                  </button>
                ))}
              </div>
            ) : customerSearch.trim().length >= 2 ? (
              <div className="text-sm text-slate-500">Customer tidak ditemukan.</div>
            ) : (
              <div className="text-sm text-slate-500">
                Customer opsional. Bisa lanjut tanpa customer.
              </div>
            )}
          </div>
        ) : (
          <div className="text-sm text-slate-500">
            User ini tidak memiliki permission untuk mencari customer.
          </div>
        )}
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <Button variant="outline" onClick={onHoldOrder}>
          Hold Order
        </Button>
        <Button variant="outline" onClick={onRestoreHeldOrder} disabled={!hasHeldOrder}>
          Restore Held
        </Button>
        <Button variant="danger" onClick={onDiscardHeldOrder} disabled={!hasHeldOrder}>
          Hapus Held
        </Button>
      </div>

      {!items.length ? (
        <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
          Cart masih kosong.
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => {
            const unitPrice = getItemUnitPrice(item);
            const lineTotal = getItemLineTotal(item);

            return (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">{item.product_name}</div>
                    <div className="text-xs text-slate-500">{formatCurrency(unitPrice)} / item</div>
                  </div>

                  <Badge variant={item.product_type === "bundle" ? "warning" : "info"}>
                    {item.product_type}
                  </Badge>
                </div>

                {item.selected_variants?.length ? (
                  <div className="mt-3 space-y-1 text-xs text-slate-600">
                    {item.selected_variants.map((entry, index) => (
                      <div key={`${item.id}-variant-${index}`}>
                        Variant: {entry.group_name} - {entry.option_name}
                        {Number(entry.price_adjustment) > 0
                          ? ` (+${formatCurrency(entry.price_adjustment)})`
                          : ""}
                      </div>
                    ))}
                  </div>
                ) : null}

                {item.selected_modifiers?.length ? (
                  <div className="mt-3 space-y-1 text-xs text-slate-600">
                    {item.selected_modifiers.map((entry, index) => (
                      <div key={`${item.id}-modifier-${index}`}>
                        Modifier: {entry.group_name} - {entry.option_name} x{entry.qty}
                        {Number(entry.price) > 0 ? ` (+${formatCurrency(entry.price)})` : ""}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-3 grid gap-3">
                  <div className="grid grid-cols-[90px_1fr_auto] items-center gap-3">
                    <Input
                      label="Qty"
                      type="number"
                      value={String(item.qty)}
                      onChange={(event) =>
                        onUpdateQty(item.id, Math.max(0, Number(event.target.value || 0)))
                      }
                    />

                    <Input
                      label="Catatan"
                      value={item.notes}
                      onChange={(event) => onUpdateNotes(item.id, event.target.value)}
                      placeholder="Catatan item..."
                    />

                    <div className="pt-7">
                      <Button variant="danger" onClick={() => onRemoveItem(item.id)}>
                        Hapus
                      </Button>
                    </div>
                  </div>

                  <div className="text-right text-sm font-semibold text-slate-900">
                    Line Total: {formatCurrency(lineTotal)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="rounded-2xl bg-slate-900 p-4 text-white">
        <div className="flex items-center justify-between text-sm">
          <span>Total Item</span>
          <span>{totalQty}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm">Subtotal</span>
          <span className="text-xl font-bold">{formatCurrency(subtotal)}</span>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <Button variant="danger" onClick={onClearCart} disabled={!items.length}>
          Clear Cart
        </Button>
        <Button onClick={onSubmitOrder} disabled={!items.length}>
          Checkout & Payment
        </Button>
      </div>
    </div>
  );
}