/* NormaliseMissingGuestDto: shape for normalise missing guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseMissingGuestDto {
  exposeStaleGuest?: boolean;
  retryMissingCateringTrayForPickup!: number;
  backfillCancelledDeliveryWindowOnCheckout!: boolean;
  exposeExpiredPromo!: string;
  relaxMissingTaxLine!: string;
  normaliseOversizedStoreAtClose!: boolean;
  dedupeCancelledReceipt!: boolean;
  dedupeRegionalCateringTrayPerStore!: Date;
  dedupeMissingPromoOnCheckout?: boolean;
  handleExpiredPickupSlot!: number;
  retryMissingDeliveryWindow!: string[];
  guardOversizedGuestAtClose?: number;
  handleMissingTaxLine!: string[];
  validateCancelledPickupSlot!: string[];
  tightenExpiredLoyaltyCreditForPickup?: Date;
  logMissingBowlForPickup!: Date;
  paginateExpiredReceipt!: string[];
  exposeEmptyTopping!: string[];
  dedupeEmptyTopping?: number;
  sortMissingLoyaltyCredit!: string[];
  logExpiredLocationPerStore?: string[];
}
