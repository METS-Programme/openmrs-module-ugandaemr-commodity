import { RecordPermission } from "../RecordPermission";
import { StockItemPackagingUOMDTO } from "../stockItem/StockItemPackagingUOM";

export interface StockOperationItemDTO{
    itemIndex?: number,
    id:string | null | undefined;
    uuid:string | null | undefined;
    stockItemUuid?: string | null | undefined;
    stockItemName?: string | null | undefined;
    stockItemPackagingUOMUuid?: string | null | undefined;
    stockItemPackagingUOMName?: string | null | undefined;
    stockItemPackagingUOMFactor?: string | null | undefined;
    stockBatchUuid?: string | null | undefined;
    batchNo?: string | null | undefined;
    expiration?: Date | null | undefined;
    quantity?: number | null | undefined;
    purchasePrice?: number | null | undefined;        
    permission?: RecordPermission | null | undefined;
    edit?: boolean | null | undefined;
    hasExpiration?: boolean;
    packagingUnits?: StockItemPackagingUOMDTO[];
    quantityReceived?: number | null | undefined;
    quantityReceivedPackagingUOMName?: string | null | undefined;
    quantityReceivedPackagingUOMFactor?: string | null | undefined;
    quantityReceivedPackagingUOMUuid?: string | null | undefined;
	quantityRequested?: number | null | undefined;	
	quantityRequestedPackagingUOMUuid?: string | null | undefined;
	quantityRequestedPackagingUOMName?: string | null | undefined;
	quantityRequestedPackagingUOMFactor?: string | null | undefined;
    commonName?: string | null | undefined;
    acronym?: string | null | undefined;
}