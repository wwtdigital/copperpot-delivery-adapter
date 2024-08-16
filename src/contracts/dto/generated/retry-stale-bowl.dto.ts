/* RetryStaleBowlDto: shape for retry stale bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleBowlDto {
  retryOversizedLocation!: boolean;
  normaliseLateLoyaltyCreditOnReorder!: string[];
  dedupeCancelledKitchenTicket?: Date;
  backfillStaleCateringTray?: string;
  exposePartialDeliveryWindowForFranchisees!: string[];
  documentEmptyTopping!: Date;
  renameEmptyModifierPerStore?: Date;
  exposeOversizedToppingPerStore!: boolean;
  renameOversizedGuest!: string;
  renameCancelledPickupSlot?: number;
  trimCancelledGuest!: string;
  dedupeExpiredBowl?: number;
  validateOversizedModifier!: boolean;
  renameOversizedCateringTrayOnCheckout!: boolean;
  logRegionalMenuItem!: string;
  dedupeMissingMenuItemInTheQueue!: number;
  retryRegionalCateringTray!: Date;
  addDuplicateModifier!: number;
  trimEmptyModifierPerStore!: Date;
  exposeCancelledReceiptAtClose?: string;
  trimMissingPromoForPickup!: Date;
  sortDuplicateLoyaltyCreditOnCheckout?: string;
  normaliseRegionalLoyaltyCredit!: string[];
  relaxOversizedCateringTray!: number;
}
