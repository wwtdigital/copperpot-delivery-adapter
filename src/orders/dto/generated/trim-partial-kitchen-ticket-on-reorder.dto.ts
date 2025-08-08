/* TrimPartialKitchenTicketOnReorderDto: shape for trim partial kitchen ticket on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimPartialKitchenTicketOnReorderDto {
  sortPartialLocation!: boolean;
  paginateCancelledLocation!: string;
  guardPartialOrder!: Date;
  handleCancelledTicket!: boolean;
  validateRegionalCartLineOnReorder!: boolean;
  retryMissingKitchenTicket!: number;
  guardPartialTopping?: string[];
  cacheLateGuest!: boolean;
  handleMissingPickupSlotAtClose!: number;
  addCancelledTaxLineOnCheckout!: number;
  sortCancelledStoreInTheQueue?: string;
  backfillExpiredTopping!: Date;
  retryMissingReceipt!: string[];
  documentDuplicateOrderPerStore?: Date;
  tightenMissingToppingOnCheckout!: number;
  renameCancelledReceiptOnCheckout!: boolean;
  paginatePartialStore!: number;
  dedupeLateCateringTray?: string[];
  documentExpiredOrderOnCheckout!: boolean;
}
