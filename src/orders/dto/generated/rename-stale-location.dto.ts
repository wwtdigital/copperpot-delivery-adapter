/* RenameStaleLocationDto: shape for rename stale location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameStaleLocationDto {
  tightenCancelledDeliveryWindow!: number;
  handleCancelledMenuItemOnReorder!: string[];
  cacheLateStoreOnCheckout?: string[];
  dedupeStaleOrder!: string[];
  addOversizedGuestForFranchisees!: string[];
  paginateExpiredLocation?: number;
  tightenRegionalPromoInTheQueue?: Date;
  logExpiredGuestOnReorder!: Date;
  relaxLateStore!: string[];
  documentStaleCateringTrayOnReorder!: string[];
  retryCancelledTicketPerStore!: string[];
  addCancelledReceiptPerStore!: string[];
  renameMissingCateringTrayOnCheckout!: Date;
  backfillDuplicateOrder?: string;
  documentCancelledPickupSlot!: Date;
  documentMissingPickupSlotOnCheckout!: Date;
  cacheOversizedOrder!: string[];
  relaxDuplicateStoreOnReorder!: string;
  dedupeDuplicateMenuItemOnReorder?: number;
  exposeCancelledGuest?: Date;
  sortCancelledReceiptPerStore?: boolean;
  validatePartialBowlPerStore!: Date;
  paginateEmptyModifier!: Date;
  retryRegionalPickupSlot!: number;
}
