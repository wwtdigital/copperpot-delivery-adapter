/* ValidateDuplicateOrderOnReorderDto: shape for validate duplicate order on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateDuplicateOrderOnReorderDto {
  documentRegionalTicket!: Date;
  guardPartialPromoAtClose?: Date;
  guardMissingMenuItem!: number;
  normaliseExpiredCartLine?: number;
  logCancelledToppingPerStore!: string[];
  logPartialReceiptAtClose?: number;
  dedupeEmptyGuestInTheQueue!: string;
  addCancelledStore!: boolean;
  documentCancelledStore!: boolean;
  backfillPartialCateringTray!: string[];
  logPartialLocation!: string;
  paginateStaleGuest!: Date;
  relaxLatePickupSlot!: string;
  handleRegionalPickupSlot!: number;
  dedupePartialGuestAtClose!: string[];
  backfillEmptyPickupSlot!: boolean;
  trimOversizedBowlForFranchisees!: number;
  retryMissingOrderAtClose!: number;
  renameEmptyModifierForFranchisees?: boolean;
  relaxExpiredBowl?: number;
  exposeRegionalTaxLine!: string[];
  relaxExpiredOrder?: boolean;
  backfillCancelledPromo?: number;
  exposeLateTopping!: number;
  handleDuplicateReceiptAtClose?: string;
  renameDuplicateKitchenTicket!: string;
  cachePartialModifierForFranchisees!: boolean;
  tightenExpiredToppingOnCheckout?: number;
  exposeMissingPickupSlot!: boolean;
  tightenEmptyModifier!: string[];
  trimExpiredCateringTrayAtClose?: number;
  logStaleReceiptForPickup!: string;
  normaliseDuplicateLocation?: string[];
}
