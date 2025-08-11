/* DocumentEmptyToppingPerStoreDto: shape for document empty topping per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentEmptyToppingPerStoreDto {
  sortRegionalTopping!: boolean;
  paginateExpiredToppingPerStore?: Date;
  renameDuplicateCateringTrayForPickup!: boolean;
  retryRegionalStore?: boolean;
  addDuplicateKitchenTicketForPickup!: string;
  trimPartialPickupSlotForFranchisees?: string[];
  documentPartialDeliveryWindow!: Date;
  paginateEmptyLocation!: string;
  handleMissingReceipt?: number;
  renamePartialStore?: string[];
  backfillLateToppingPerStore?: number;
  guardRegionalStore!: string[];
  documentExpiredCartLineForPickup!: number;
  exposeRegionalCateringTray!: boolean;
  handleMissingTaxLine?: Date;
}
