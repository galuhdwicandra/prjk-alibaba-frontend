import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type { CashierShift } from "@/types/cashier-shift";
import type { Customer } from "@/types/customer";
import type { Product, ProductCategory } from "@/types/product";
import type {
  PosCartItem,
  PosCheckoutTotals,
  PosOrderChannel,
  PosPaymentMethodOption,
  PosPaymentSplitRow,
  PosReceiptItemSnapshot,
  PosReceiptSnapshot,
  PosVoucher,
  PosVoucherEvaluationResult,
} from "@/modules/pos/types/pos";

export interface PosPaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface PosProductQuery extends PosPaginationQuery {
  product_category_id?: number | "";
  product_type?: "single" | "bundle" | "";
}

export interface PosCustomerQuery extends PosPaginationQuery {
  is_member?: boolean | "";
}

export interface PosVoucherQuery extends PosPaginationQuery {
  discount_type?: "percent" | "fixed" | "";
}

export interface PosPaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface PosCreateOrderItemPayload {
  product_id: number;
  qty: number;
  discount_amount?: number;
  notes?: string | null;
  variants?: Array<{
    variant_group_name_snapshot: string;
    variant_option_name_snapshot: string;
    price_adjustment: number;
  }>;
  modifiers?: Array<{
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty: number;
    price: number;
  }>;
}

export interface PosCreateOrderPayload {
  outlet_id: number;
  cashier_shift_id: number | null;
  customer_id: number | null;
  order_channel: PosOrderChannel;
  order_status: "draft" | "pending" | "confirmed";
  payment_status: "unpaid" | "partial" | "paid" | "refunded" | "cancelled";
  discount_amount: number;
  tax_amount: number;
  service_charge_amount: number;
  paid_total: number;
  change_amount: number;
  notes?: string | null;
  ordered_at?: string;
  items: PosCreateOrderItemPayload[];
}

export interface PosPaymentPayload {
  order_id: number;
  payment_method_id: number;
  amount: number;
  reference_number?: string | null;
  paid_at?: string;
  status: "pending" | "paid" | "failed" | "cancelled" | "refunded";
  notes?: string | null;
}

export interface PosOrderResponse {
  id: number;
  outlet_id: number;
  cashier_shift_id: number | null;
  customer_id: number | null;
  order_number: string;
  queue_number: string | null;
  order_channel: PosOrderChannel;
  order_status: string;
  payment_status: string;
  subtotal: number | string;
  discount_amount: number | string;
  tax_amount: number | string;
  service_charge_amount: number | string;
  grand_total: number | string;
  paid_total: number | string;
  change_amount: number | string;
  notes: string | null;
  ordered_at: string;
}

export interface PosPaymentResponse {
  id: number;
  order_id: number;
  payment_method_id: number;
  amount: number | string;
  reference_number: string | null;
  paid_at: string;
  status: string;
  notes: string | null;
}

export interface PosBackendCheckoutPayload {
  outlet_id: number;
  cashier_shift_id: number | null;
  customer_id: number | null;
  customer_name?: string | null;
  customer_phone?: string | null;
  outlet_name: string;
  cashier_name: string;
  order_channel: PosOrderChannel;
  voucher_code?: string | null;
  totals: PosCheckoutTotals;
  payments: PosPaymentSplitRow[];
  payment_methods: PosPaymentMethodOption[];
  items: PosCartItem[];
}

export interface PosBackendCheckoutResult {
  message: string;
  order: PosOrderResponse;
  payments: PosPaymentResponse[];
  receipt: PosReceiptSnapshot;
  print_url: string;
  pdf_url: string;
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PosPaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

const parseNumber = (value: number | string | null | undefined) => Number(value ?? 0);

const nowIsoLocal = () => {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60_000;

  return new Date(now.getTime() - offsetMs)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
};

const isReferenceRequired = (type: string | undefined, code: string | undefined) => {
  return ["qris", "transfer", "ewallet"].includes(String(type ?? code ?? "").toLowerCase());
};

const getCartItemUnitPrice = (item: PosCartItem) => {
  const variantsTotal = item.selected_variants.reduce(
    (sum, variant) => sum + parseNumber(variant.price_adjustment),
    0
  );

  const modifiersTotal = item.selected_modifiers.reduce(
    (sum, modifier) => sum + parseNumber(modifier.price) * parseNumber(modifier.qty),
    0
  );

  return parseNumber(item.base_unit_price) + variantsTotal + modifiersTotal;
};

const mapReceiptItemsFromCart = (items: PosCartItem[]): PosReceiptItemSnapshot[] => {
  return items.map((item) => ({
    product_name: item.product_name,
    qty: item.qty,
    unit_price: getCartItemUnitPrice(item),
    notes: item.notes,
    variants: item.selected_variants,
    modifiers: item.selected_modifiers,
    line_total: getCartItemUnitPrice(item) * parseNumber(item.qty),
  }));
};

const mapOrderItemsFromCart = (items: PosCartItem[]): PosCreateOrderItemPayload[] => {
  return items.map((item) => ({
    product_id: item.product_id,
    qty: item.qty,
    discount_amount: 0,
    notes: item.notes || null,
    variants: item.selected_variants.map((variant) => ({
      variant_group_name_snapshot: variant.group_name,
      variant_option_name_snapshot: variant.option_name,
      price_adjustment: parseNumber(variant.price_adjustment),
    })),
    modifiers: item.selected_modifiers.map((modifier) => ({
      modifier_group_name_snapshot: modifier.group_name,
      modifier_option_name_snapshot: modifier.option_name,
      qty: parseNumber(modifier.qty),
      price: parseNumber(modifier.price),
    })),
  }));
};

const buildReceiptFromCheckout = (
  payload: PosBackendCheckoutPayload,
  order: PosOrderResponse
): PosReceiptSnapshot => ({
  order_number: order.order_number,
  order_channel: payload.order_channel,
  outlet_name: payload.outlet_name,
  cashier_name: payload.cashier_name,
  customer_name: payload.customer_name ?? null,
  customer_phone: payload.customer_phone ?? null,
  ordered_at: order.ordered_at ?? nowIsoLocal(),
  voucher_code: payload.voucher_code ?? null,
  subtotal: payload.totals.subtotal,
  discount_amount: payload.totals.discount,
  tax_amount: payload.totals.tax,
  service_charge_amount: payload.totals.serviceCharge,
  grand_total: payload.totals.grandTotal,
  paid_total: payload.totals.paidTotal,
  change_amount: payload.totals.changeAmount,
  payment_status: payload.totals.remaining > 0 ? "pending" : "success",
  payments: payload.payments,
  items: mapReceiptItemsFromCart(payload.items),
});

export const posService = {
  async getProductCategories(params: PosPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<ProductCategory[]>>(
      endpoints.productCategories.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getProducts(params: PosProductQuery = {}) {
    const response = await apiClient.get<ApiResponse<Product[]>>(endpoints.products.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getCustomers(params: PosCustomerQuery = {}) {
    const response = await apiClient.get<ApiResponse<Customer[]>>(endpoints.customers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getVouchers(params: PosVoucherQuery = {}) {
    const response = await apiClient.get<ApiResponse<PosVoucher[]>>(endpoints.vouchers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getPaymentMethods(params: PosPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<PosPaymentMethodOption[]>>(
      endpoints.paymentMethods.index,
      {
        params: {
          per_page: 100,
          is_active: true,
          ...params,
        },
      }
    );

    const result = unwrapPaginated(response.data);

    return {
      ...result,
      items: result.items.map((method) => {
        const isCash = method.type === "cash" || method.code === "cash";

        return {
          ...method,
          requires_reference:
            method.requires_reference ?? isReferenceRequired(method.type, method.code),
          allow_overpay: method.allow_overpay ?? isCash,
        };
      }),
    };
  },

  async getOpenCashierShift(outletId: number) {
    const response = await apiClient.get<ApiResponse<CashierShift[]>>(
      endpoints.cashierShifts.index,
      {
        params: {
          outlet_id: outletId,
          status: "open",
          per_page: 1,
        },
      }
    );

    return response.data.data[0] ?? null;
  },

  evaluateVoucher(params: {
    vouchers: PosVoucher[];
    voucherCode: string;
    subtotal: number;
  }): PosVoucherEvaluationResult {
    const code = params.voucherCode.trim().toUpperCase();

    if (!code) {
      return {
        valid: false,
        message: "Kode voucher masih kosong.",
        discount_amount: 0,
        voucher: null,
      };
    }

    const voucher =
      params.vouchers.find((item) => item.code.trim().toUpperCase() === code) ?? null;

    if (!voucher) {
      return {
        valid: false,
        message: "Voucher tidak ditemukan.",
        discount_amount: 0,
        voucher: null,
      };
    }

    if (!voucher.is_active) {
      return {
        valid: false,
        message: "Voucher tidak aktif.",
        discount_amount: 0,
        voucher,
      };
    }

    const now = Date.now();
    const startsAt = voucher.starts_at ? new Date(voucher.starts_at).getTime() : null;
    const endsAt = voucher.ends_at ? new Date(voucher.ends_at).getTime() : null;

    if (startsAt && now < startsAt) {
      return {
        valid: false,
        message: "Voucher belum mulai berlaku.",
        discount_amount: 0,
        voucher,
      };
    }

    if (endsAt && now > endsAt) {
      return {
        valid: false,
        message: "Voucher sudah berakhir.",
        discount_amount: 0,
        voucher,
      };
    }

    const minOrderTotal = parseNumber(voucher.min_order_total);

    if (params.subtotal < minOrderTotal) {
      return {
        valid: false,
        message: `Minimal transaksi untuk voucher ini adalah Rp${minOrderTotal.toLocaleString(
          "id-ID"
        )}.`,
        discount_amount: 0,
        voucher,
      };
    }

    if (
      typeof voucher.quota === "number" &&
      typeof voucher.used_count === "number" &&
      voucher.quota > 0 &&
      voucher.used_count >= voucher.quota
    ) {
      return {
        valid: false,
        message: "Kuota voucher sudah habis.",
        discount_amount: 0,
        voucher,
      };
    }

    let discountAmount = 0;

    if (voucher.discount_type === "fixed") {
      discountAmount = parseNumber(voucher.discount_value);
    } else {
      discountAmount = (params.subtotal * parseNumber(voucher.discount_value)) / 100;

      const maxDiscount = parseNumber(voucher.max_discount);

      if (maxDiscount > 0) {
        discountAmount = Math.min(discountAmount, maxDiscount);
      }
    }

    discountAmount = Math.min(discountAmount, params.subtotal);

    return {
      valid: true,
      message: `Voucher ${voucher.code} berhasil diterapkan.`,
      discount_amount: discountAmount,
      voucher,
    };
  },

  async createOrder(payload: PosCreateOrderPayload) {
    const response = await apiClient.post<ApiResponse<PosOrderResponse>>(
      endpoints.orders.store,
      payload
    );

    return response.data;
  },

  async createPayment(payload: PosPaymentPayload) {
    const response = await apiClient.post<ApiResponse<PosPaymentResponse>>(
      endpoints.payments.store,
      payload
    );

    return response.data;
  },

  getReceiptPrintUrl(orderId: number) {
    return endpoints.receiptPrints.print(orderId);
  },

  getReceiptPdfUrl(orderId: number) {
    return endpoints.receiptPrints.pdf(orderId);
  },

  async submitBackendCheckout(
    payload: PosBackendCheckoutPayload
  ): Promise<PosBackendCheckoutResult> {
    if (!payload.outlet_id) {
      throw new Error("Outlet aktif belum tersedia.");
    }

    if (!payload.items.length) {
      throw new Error("Cart masih kosong.");
    }

    const validPayments = payload.payments.filter((payment) => parseNumber(payment.amount) > 0);

    if (!validPayments.length) {
      throw new Error("Minimal satu pembayaran wajib diisi.");
    }

    if (payload.totals.paidTotal < payload.totals.grandTotal) {
      throw new Error("Nominal pembayaran belum mencukupi grand total.");
    }

    const paymentMethodByCode = new Map(
      payload.payment_methods.map((method) => [method.code, method])
    );

    const hasCashPayment = validPayments.some((payment) => {
      const method = paymentMethodByCode.get(payment.payment_method_code);

      return method?.type === "cash" || method?.code === "cash";
    });

    if (hasCashPayment && !payload.cashier_shift_id) {
      throw new Error("Pembayaran tunai wajib memakai shift kasir yang masih open.");
    }

    const orderResponse = await apiClient.post<ApiResponse<PosOrderResponse>>(
      endpoints.orders.store,
      {
        outlet_id: payload.outlet_id,
        cashier_shift_id: payload.cashier_shift_id,
        customer_id: payload.customer_id,
        order_channel: payload.order_channel,
        order_status: "confirmed",
        payment_status: "unpaid",
        discount_amount: payload.totals.discount,
        tax_amount: payload.totals.tax,
        service_charge_amount: payload.totals.serviceCharge,
        paid_total: 0,
        change_amount: 0,
        notes: payload.voucher_code ? `Voucher: ${payload.voucher_code}` : null,
        ordered_at: nowIsoLocal(),
        items: mapOrderItemsFromCart(payload.items),
      }
    );

    const order = orderResponse.data.data;
    const paymentResponses: PosPaymentResponse[] = [];

    for (const payment of validPayments) {
      const method = paymentMethodByCode.get(payment.payment_method_code);

      if (!method) {
        throw new Error(`Metode pembayaran ${payment.payment_method_code} tidak ditemukan.`);
      }

      const paymentResponse = await apiClient.post<ApiResponse<PosPaymentResponse>>(
        endpoints.payments.store,
        {
          order_id: order.id,
          payment_method_id: method.id,
          amount: parseNumber(payment.amount),
          reference_number: payment.reference_number.trim() || null,
          paid_at: nowIsoLocal(),
          status: "paid",
          notes: payment.notes.trim() || null,
        }
      );

      paymentResponses.push(paymentResponse.data.data);
    }

    return {
      message: "Checkout POS berhasil disimpan ke backend.",
      order,
      payments: paymentResponses,
      receipt: buildReceiptFromCheckout(payload, order),
      print_url: endpoints.receiptPrints.print(order.id),
      pdf_url: endpoints.receiptPrints.pdf(order.id),
    };
  },
};