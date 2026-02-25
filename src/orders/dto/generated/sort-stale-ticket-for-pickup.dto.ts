/* SortStaleTicketForPickupDto: shape for sort stale ticket for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleTicketForPickupDto {
  documentMissingTaxLineForPickup!: Date;
  cacheMissingGuest!: string[];
  trimCancelledLoyaltyCreditOnCheckout!: Date;
  cacheEmptyDeliveryWindowForPickup!: boolean;
  relaxCancelledLocation?: string[];
  guardExpiredLocationForFranchisees?: Date;
  relaxExpiredCartLine!: string;
  retryDuplicateDeliveryWindow?: string[];
  handleExpiredReceipt!: number;
  cacheRegionalPickupSlotOnReorder?: string[];
  cacheCancelledPickupSlotForFranchisees!: Date;
  logStaleMenuItemOnReorder?: number;
  addStaleReceipt!: number;
  retryExpiredMenuItem!: number;
  dedupeStalePromo!: string[];
  cacheStaleCateringTrayForPickup!: string[];
  renamePartialGuestAtClose!: string;
  dedupeMissingModifierAtClose!: boolean;
  tightenLatePromoOnReorder!: string;
  addCancelledCartLine!: string;
  dedupeStaleCateringTray?: string;
  documentMissingBowl?: number;
  tightenOversizedMenuItem?: string[];
}
