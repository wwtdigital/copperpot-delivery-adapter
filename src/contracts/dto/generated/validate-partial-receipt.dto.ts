/* ValidatePartialReceiptDto: shape for validate partial receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidatePartialReceiptDto {
  trimRegionalTaxLineForFranchisees?: number;
  documentExpiredLoyaltyCredit!: boolean;
  documentPartialLoyaltyCredit!: boolean;
  documentStaleTopping?: Date;
  guardOversizedModifier!: string[];
  guardOversizedModifierOnReorder!: string[];
  trimLateKitchenTicket?: string[];
  cacheOversizedTicket?: number;
  handleStaleCartLine!: boolean;
  addOversizedLocation!: number;
  guardPartialTicketOnReorder!: boolean;
  handleRegionalDeliveryWindow!: string;
  tightenRegionalBowl!: Date;
  validateDuplicateTicket!: boolean;
  retryExpiredPromoForPickup!: string[];
  dedupeOversizedCartLine?: string[];
  tightenStaleTaxLine?: Date;
  tightenRegionalCartLine!: boolean;
  tightenCancelledCartLineForPickup!: string[];
  renameCancelledPromoAtClose!: string;
  cacheMissingLoyaltyCreditForPickup!: boolean;
  logStaleTopping!: number;
  logLateMenuItem!: string;
  cachePartialKitchenTicket!: Date;
}
