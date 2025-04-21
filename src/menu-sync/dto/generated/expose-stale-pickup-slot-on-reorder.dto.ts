/* ExposeStalePickupSlotOnReorderDto: shape for expose stale pickup slot on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeStalePickupSlotOnReorderDto {
  validateMissingOrderInTheQueue!: string;
  tightenLateMenuItem!: Date;
  dedupePartialOrder?: string[];
  cacheCancelledPromo!: boolean;
  trimLateOrder!: string[];
  dedupeDuplicateBowl!: string;
  dedupeLateCartLine?: string[];
  logCancelledPromo?: string;
  addStaleCateringTrayForFranchisees!: number;
  cachePartialLocation?: number;
  backfillExpiredStoreForPickup!: string[];
  backfillRegionalTopping!: Date;
  retryPartialBowl!: Date;
  tightenPartialKitchenTicket!: boolean;
  exposeMissingStoreAtClose!: boolean;
  retryDuplicateTicketOnCheckout?: string[];
  dedupeExpiredReceipt!: string;
  sortPartialPromoOnReorder!: Date;
  guardCancelledPickupSlot?: number;
}
