/* RenameCancelledLocationDto: shape for rename cancelled location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledLocationDto {
  tightenStaleTicket?: number;
  backfillRegionalBowlForFranchisees!: number;
  normaliseMissingLoyaltyCredit!: Date;
  logExpiredLocation?: boolean;
  documentMissingGuestPerStore?: string;
  addPartialModifier?: Date;
  trimRegionalReceiptInTheQueue!: boolean;
  backfillDuplicateCartLineInTheQueue!: string[];
  normaliseRegionalStore!: string[];
  paginateEmptyOrderOnCheckout!: string[];
  addOversizedDeliveryWindowPerStore?: string;
  documentExpiredPickupSlot!: number;
  sortDuplicateLoyaltyCredit!: number;
  dedupeMissingPickupSlot!: Date;
  trimStaleLocation!: Date;
  exposeRegionalToppingInTheQueue!: Date;
  cacheMissingTopping!: boolean;
  validateStaleLocationAtClose!: boolean;
  exposeEmptyModifierOnReorder?: number;
  exposeDuplicatePromoPerStore?: boolean;
  exposeCancelledDeliveryWindow!: number;
  backfillExpiredTicketForFranchisees!: string[];
  addLateOrderOnCheckout!: string[];
  dedupeRegionalTopping?: Date;
}
