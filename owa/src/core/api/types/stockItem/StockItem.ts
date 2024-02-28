import { BaseOpenmrsData } from '../BaseOpenmrsData'
import { Concept } from '../concept/Concept';
import { Drug } from '../concept/Drug';
import { RecordPermission } from '../RecordPermission';
import { StockBatch } from './StockBatch';
import { StockItemPackagingUOM, StockItemPackagingUOMDTO } from './StockItemPackagingUOM';
import {StockItemReference, StockItemReferenceDTO} from "./StockItemReference";

export interface StockItem extends BaseOpenmrsData {
    concept: Concept;
    drug: Drug;
    hasExpiration: boolean;
    stockBatches: StockBatch[];
    stockItemPackagingUOMs: StockItemPackagingUOM[];
}

export interface StockItemDTO {
    uuid: string | null | undefined;
    isDrug: Boolean | null | undefined;
    drugUuid: string | null | undefined;
    drugName: string | null | undefined;
    conceptUuid: string | null | undefined;
    commonName: string | null | undefined;
    acronym: string | null | undefined;
    conceptName: string | null | undefined;
    hasExpiration: Boolean | null | undefined;
    preferredVendorUuid: string | null | undefined;
    preferredVendorName: string | null | undefined;
    purchasePrice: number | null | undefined;
    purchasePriceUoMUuid: string | null | undefined;
    purchasePriceUoMName: string | null | undefined;
    dispensingUnitName: string | null | undefined;
    dispensingUnitUuid: string | null | undefined;
    dispensingUnitPackagingUoMUuid: string | null | undefined;
    dispensingUnitPackagingUoMName: string | null | undefined;
    dispensingUnitPackagingUoMFactor: string | null | undefined;
    defaultStockOperationsUoMUuid: string | null | undefined;
    defaultStockOperationsUoMName: string | null | undefined;
    defaultStockOperationsUoMFactor: string | null | undefined;
    reorderLevel: number | null | undefined;
    reorderLevelUoMUuid: string | null | undefined;
    reorderLevelUoMName: string | null | undefined;
    reorderLevelUoMFactor: string | null | undefined;
    dateCreated: Date | null | undefined;
    creatorGivenName: string | null | undefined;
    creatorFamilyName: string | null | undefined;
    voided: boolean | null | undefined;
    packagingUnits: StockItemPackagingUOMDTO[];
    references: StockItemReferenceDTO[];
    permission: RecordPermission;
    categoryUuid: string | null | undefined;
    categoryName: string | null | undefined;
    expiryNotice: number | null | undefined;
}


export const LocationStockItemBatchNo = "LocationStockItemBatchNo";
export const LocationStockItem = "LocationStockItem";
export const StockItemOnly = "StockItemOnly";

export const InventoryGroupByOptions = [LocationStockItemBatchNo, LocationStockItem, StockItemOnly] as const;
export type InventoryGroupBy = typeof InventoryGroupByOptions[number];
