import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  Product,
  ProductBundleItem,
  ProductCategory,
  ProductModifierGroup,
  ProductOutletStatus,
  ProductPrice,
  ProductVariantGroup,
} from "@/types/product";

export interface PaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface ProductCategoryQuery extends PaginationQuery {}

export interface ProductQuery extends PaginationQuery {
  product_category_id?: number | "";
  product_type?: "single" | "bundle" | "";
}

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface ProductCategoryPayload {
  name: string;
  slug?: string | null;
  sort_order?: number;
  is_active?: boolean;
}

export interface ProductPricePayload {
  outlet_id: number;
  price: number;
  dine_in_price?: number | null;
  takeaway_price?: number | null;
  delivery_price?: number | null;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active?: boolean;
}

export interface ProductOutletStatusPayload {
  outlet_id: number;
  is_available?: boolean;
  is_hidden?: boolean;
  daily_limit?: number | null;
  notes?: string | null;
}

export interface ProductVariantOptionPayload {
  name: string;
  price_adjustment?: number;
  sort_order?: number;
  is_active?: boolean;
}

export interface ProductVariantGroupPayload {
  name: string;
  selection_type: "single" | "multiple";
  is_required?: boolean;
  sort_order?: number;
  options: ProductVariantOptionPayload[];
}

export interface ProductModifierOptionPayload {
  name: string;
  price?: number;
  is_active?: boolean;
  sort_order?: number;
}

export interface ProductModifierGroupPayload {
  name: string;
  min_select?: number;
  max_select?: number;
  is_required?: boolean;
  sort_order?: number;
  options: ProductModifierOptionPayload[];
}

export interface ProductBundleItemPayload {
  bundled_product_id: number;
  qty: number;
}

export interface ProductPayload {
  product_category_id: number;
  sku?: string | null;
  code?: string | null;
  name: string;
  slug?: string | null;
  description?: string | null;
  image_url?: string | null;
  base_price: number;
  product_type: "single" | "bundle";
  is_active?: boolean;
  is_featured?: boolean;
  track_recipe?: boolean;
  track_stock_direct?: boolean;
  prices?: ProductPricePayload[];
  outlet_statuses?: ProductOutletStatusPayload[];
  variant_groups?: ProductVariantGroupPayload[];
  modifier_groups?: ProductModifierGroupPayload[];
  bundle_items?: ProductBundleItemPayload[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const catalogService = {
  async getProductCategories(params: ProductCategoryQuery = {}) {
    const response = await apiClient.get<ApiResponse<ProductCategory[]>>(
      endpoints.productCategories.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createProductCategory(payload: ProductCategoryPayload) {
    const response = await apiClient.post<ApiResponse<ProductCategory>>(
      endpoints.productCategories.store,
      payload
    );

    return response.data;
  },

  async updateProductCategory(id: number, payload: ProductCategoryPayload) {
    const response = await apiClient.put<ApiResponse<ProductCategory>>(
      endpoints.productCategories.update(id),
      payload
    );

    return response.data;
  },

  async deleteProductCategory(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.productCategories.destroy(id)
    );

    return response.data;
  },

  async getProducts(params: ProductQuery = {}) {
    const response = await apiClient.get<ApiResponse<Product[]>>(endpoints.products.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createProduct(payload: ProductPayload) {
    const response = await apiClient.post<ApiResponse<Product>>(endpoints.products.store, payload);
    return response.data;
  },

  async updateProduct(id: number, payload: ProductPayload) {
    const response = await apiClient.put<ApiResponse<Product>>(endpoints.products.update(id), payload);
    return response.data;
  },

  async deleteProduct(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.products.destroy(id));
    return response.data;
  },
};

export type {
  Product,
  ProductBundleItem,
  ProductCategory,
  ProductModifierGroup,
  ProductOutletStatus,
  ProductPrice,
  ProductVariantGroup,
};