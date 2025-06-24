/* ExposeRegionalLoyaltyCreditDto: shape for expose regional loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeRegionalLoyaltyCreditDto {
  guardRegionalPickupSlot!: number;
  paginatePartialTicket!: number;
  cachePartialPromo?: boolean;
  tightenMissingReceipt!: string;
  exposeLateCartLine!: string;
  normaliseCancelledPickupSlot!: string;
  cacheRegionalPickupSlotOnReorder?: number;
  exposeCancelledOrder?: string[];
  documentCancelledModifier!: boolean;
  documentMissingTopping!: boolean;
  retryCancelledCartLine!: boolean;
  guardRegionalBowl!: string[];
  addRegionalTaxLine!: Date;
  handleExpiredPickupSlot?: string[];
  dedupePartialGuest!: string[];
  logMissingCateringTray?: boolean;
  backfillRegionalOrder!: boolean;
  handleCancelledGuestOnCheckout?: boolean;
  cacheOversizedTicketForFranchisees?: string[];
}
