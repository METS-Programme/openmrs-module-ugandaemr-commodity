import { StockOperationStatus } from '../stockOperation/StockOperationStatus';


export interface StockItemTransactionDTO {
    uuid: string;
    dateCreated: Date;
    partyUuid: string;
    partyName: string;
    isPatientTransaction: boolean;
    quantity: number;
    stockBatchUuid: string;
    stockBatchNo: string;
    expiration: Date;
    stockItemUuid: string;
    stockOperationUuid: string;
    stockOperationStatus: StockOperationStatus;
    stockOperationNumber: string;
    stockOperationTypeName: string;
    stockItemPackagingUOMUuid: string;
    packagingUomName: string;
    packagingUomFactor: string;
    operationSourcePartyName: string;
    operationDestinationPartyName: string;

}

