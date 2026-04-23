import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type { Customer } from "@/types/customer";
import type { Product, ProductCategory } from "@/types/product";
import type {
  PosCheckoutDraftResult,
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

export interface SubmitCheckoutDraftPayload {
  outlet_name: string;
  cashier_name: string;
  order_channel: PosOrderChannel;
  customer_name?: string | null;
  customer_phone?: string | null;
  voucher_code?: string | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  service_charge_amount: number;
  grand_total: number;
  paid_total: number;
  change_amount: number;
  payment_status: "pending" | "success";
  payments: PosPaymentSplitRow[];
  items: PosReceiptItemSnapshot[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PosPaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

const RECEIPT_DRAFTS_STORAGE_KEY = "chicken-alibaba-pos-receipt-drafts";

const formatOrderNumber = () => {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0"),
  ].join("");

  return `ORD-${stamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
};

const parseNumber = (value: number | string | null | undefined) => Number(value ?? 0);

const nowIsoLocal = () => new Date().toISOString();

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

  getPaymentMethods(): PosPaymentMethodOption[] {
    return [
      {
        code: "cash",
        name: "Tunai",
        type: "cash",
        is_active: true,
        allow_overpay: true,
      },
      {
        code: "qris",
        name: "QRIS",
        type: "qris",
        is_active: true,
        requires_reference: true,
        allow_overpay: false,
      },
      {
        code: "transfer",
        name: "Transfer",
        type: "transfer",
        is_active: true,
        requires_reference: true,
        allow_overpay: false,
      },
    ];
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
        message: `Minimal transaksi untuk voucher ini adalah Rp${minOrderTotal.toLocaleString("id-ID")}.`,
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

  submitCheckoutDraft(payload: SubmitCheckoutDraftPayload): PosCheckoutDraftResult {
    const order_number = formatOrderNumber();

    const receipt: PosReceiptSnapshot = {
      order_number,
      order_channel: payload.order_channel,
      outlet_name: payload.outlet_name,
      cashier_name: payload.cashier_name,
      customer_name: payload.customer_name ?? null,
      customer_phone: payload.customer_phone ?? null,
      ordered_at: nowIsoLocal(),
      voucher_code: payload.voucher_code ?? null,
      subtotal: payload.subtotal,
      discount_amount: payload.discount_amount,
      tax_amount: payload.tax_amount,
      service_charge_amount: payload.service_charge_amount,
      grand_total: payload.grand_total,
      paid_total: payload.paid_total,
      change_amount: payload.change_amount,
      payment_status: payload.payment_status,
      payments: payload.payments,
      items: payload.items,
    };

    const raw = localStorage.getItem(RECEIPT_DRAFTS_STORAGE_KEY);
    const existing = raw ? ((JSON.parse(raw) as PosReceiptSnapshot[]) ?? []) : [];
    const next = [receipt, ...existing].slice(0, 50);

    localStorage.setItem(RECEIPT_DRAFTS_STORAGE_KEY, JSON.stringify(next));

    return {
      message:
        "Checkout draft berhasil dibuat. Siap diganti ke submit API saat backend orders/payments tersedia.",
      order_number,
      receipt,
    };
  },

  getStoredReceipts(): PosReceiptSnapshot[] {
    const raw = localStorage.getItem(RECEIPT_DRAFTS_STORAGE_KEY);

    if (!raw) {
      return [];
    }

    try {
      return JSON.parse(raw) as PosReceiptSnapshot[];
    } catch {
      localStorage.removeItem(RECEIPT_DRAFTS_STORAGE_KEY);
      return [];
    }
  },

  getStoredReceiptByOrderNumber(orderNumber: string): PosReceiptSnapshot | null {
    const receipts = this.getStoredReceipts();
    return receipts.find((item) => item.order_number === orderNumber) ?? null;
  },
};