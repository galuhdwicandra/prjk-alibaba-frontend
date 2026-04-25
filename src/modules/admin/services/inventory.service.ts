import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  OutletMaterialStock,
  ProductBom,
  RawMaterial,
  RawMaterialCategory,
  Unit,
  UnitConversion,
} from "@/types/inventory";

export interface InventoryPaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface UnitPayload {
  name: string;
  code: string;
}

export interface UnitConversionPayload {
  from_unit_id: number;
  to_unit_id: number;
  multiplier: number;
}

export interface RawMaterialCategoryPayload {
  name: string;
}

export interface OutletStockPayload {
  outlet_id: number;
  qty_on_hand?: number;
  qty_reserved?: number;
  last_movement_at?: string | null;
}

export interface RawMaterialPayload {
  raw_material_category_id: number;
  unit_id: number;
  code?: string | null;
  name: string;
  sku?: string | null;
  description?: string | null;
  minimum_stock?: number;
  last_purchase_price?: number;
  average_cost?: number;
  is_active?: boolean;
  outlet_stocks?: OutletStockPayload[];
}

export interface OutletMaterialStockPayload {
  outlet_id: number;
  raw_material_id: number;
  qty_on_hand?: number;
  qty_reserved?: number;
  last_movement_at?: string | null;
}

export interface ProductBomItemPayload {
  raw_material_id: number;
  unit_id: number;
  qty: number;
  waste_percent?: number;
}

export interface ProductBomPayload {
  product_id: number;
  version?: number;
  is_active?: boolean;
  notes?: string | null;
  items: ProductBomItemPayload[];
}

export interface RawMaterialQuery extends InventoryPaginationQuery {
  raw_material_category_id?: number | "";
  unit_id?: number | "";
}

export interface OutletMaterialStockQuery extends InventoryPaginationQuery {
  outlet_id?: number | "";
  raw_material_id?: number | "";
}

export interface ProductBomQuery extends InventoryPaginationQuery {
  product_id?: number | "";
  is_active?: boolean | "";
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const inventoryService = {
  async getUnits(params: InventoryPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<Unit[]>>(endpoints.units.index, { params });
    return unwrapPaginated(response.data);
  },

  async createUnit(payload: UnitPayload) {
    const response = await apiClient.post<ApiResponse<Unit>>(endpoints.units.store, payload);
    return response.data;
  },

  async updateUnit(id: number, payload: UnitPayload) {
    const response = await apiClient.put<ApiResponse<Unit>>(endpoints.units.update(id), payload);
    return response.data;
  },

  async deleteUnit(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.units.destroy(id));
    return response.data;
  },

  async getUnitConversions(params: InventoryPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<UnitConversion[]>>(
      endpoints.unitConversions.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createUnitConversion(payload: UnitConversionPayload) {
    const response = await apiClient.post<ApiResponse<UnitConversion>>(
      endpoints.unitConversions.store,
      payload
    );

    return response.data;
  },

  async updateUnitConversion(id: number, payload: UnitConversionPayload) {
    const response = await apiClient.put<ApiResponse<UnitConversion>>(
      endpoints.unitConversions.update(id),
      payload
    );

    return response.data;
  },

  async deleteUnitConversion(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.unitConversions.destroy(id)
    );

    return response.data;
  },

  async getRawMaterialCategories(params: InventoryPaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<RawMaterialCategory[]>>(
      endpoints.rawMaterialCategories.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createRawMaterialCategory(payload: RawMaterialCategoryPayload) {
    const response = await apiClient.post<ApiResponse<RawMaterialCategory>>(
      endpoints.rawMaterialCategories.store,
      payload
    );

    return response.data;
  },

  async updateRawMaterialCategory(id: number, payload: RawMaterialCategoryPayload) {
    const response = await apiClient.put<ApiResponse<RawMaterialCategory>>(
      endpoints.rawMaterialCategories.update(id),
      payload
    );

    return response.data;
  },

  async deleteRawMaterialCategory(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.rawMaterialCategories.destroy(id)
    );

    return response.data;
  },

  async getRawMaterials(params: RawMaterialQuery = {}) {
    const response = await apiClient.get<ApiResponse<RawMaterial[]>>(
      endpoints.rawMaterials.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createRawMaterial(payload: RawMaterialPayload) {
    const response = await apiClient.post<ApiResponse<RawMaterial>>(
      endpoints.rawMaterials.store,
      payload
    );

    return response.data;
  },

  async updateRawMaterial(id: number, payload: RawMaterialPayload) {
    const response = await apiClient.put<ApiResponse<RawMaterial>>(
      endpoints.rawMaterials.update(id),
      payload
    );

    return response.data;
  },

  async deleteRawMaterial(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.rawMaterials.destroy(id)
    );

    return response.data;
  },

  async getOutletMaterialStocks(params: OutletMaterialStockQuery = {}) {
    const response = await apiClient.get<ApiResponse<OutletMaterialStock[]>>(
      endpoints.outletMaterialStocks.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async upsertOutletMaterialStock(payload: OutletMaterialStockPayload) {
    const response = await apiClient.post<ApiResponse<OutletMaterialStock>>(
      endpoints.outletMaterialStocks.upsert,
      payload
    );

    return response.data;
  },

  async getProductBoms(params: ProductBomQuery = {}) {
    const response = await apiClient.get<ApiResponse<ProductBom[]>>(endpoints.productBoms.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createProductBom(payload: ProductBomPayload) {
    const response = await apiClient.post<ApiResponse<ProductBom>>(
      endpoints.productBoms.store,
      payload
    );

    return response.data;
  },

  async updateProductBom(id: number, payload: ProductBomPayload) {
    const response = await apiClient.put<ApiResponse<ProductBom>>(
      endpoints.productBoms.update(id),
      payload
    );

    return response.data;
  },

  async deleteProductBom(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.productBoms.destroy(id)
    );

    return response.data;
  },
};