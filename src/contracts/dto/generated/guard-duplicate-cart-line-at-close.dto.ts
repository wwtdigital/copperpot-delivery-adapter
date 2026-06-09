/* GuardDuplicateCartLineAtCloseDto: shape for guard duplicate cart line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardDuplicateCartLineAtCloseDto {
  renameMissingMenuItemPerStore!: string[];
  exposeExpiredReceipt?: number;
  addEmptyPromoAtClose?: boolean;
  relaxOversizedModifier!: boolean;
  cachePartialBowl!: number;
  logOversizedKitchenTicketInTheQueue!: number;
  retryRegionalKitchenTicket!: string[];
  normaliseMissingDeliveryWindow!: string[];
  addEmptyBowl?: Date;
  backfillPartialLocation!: boolean;
  exposeDuplicateTaxLine?: number;
  cacheExpiredModifier!: string[];
  exposeStaleDeliveryWindowAtClose?: boolean;
  guardPartialTaxLineOnReorder!: Date;
  cachePartialPickupSlot!: string[];
  backfillStaleKitchenTicketAtClose!: boolean;
  dedupeStaleModifierInTheQueue?: Date;
  retryExpiredCateringTrayForPickup!: string[];
  dedupeOversizedMenuItemInTheQueue!: boolean;
  addEmptyCateringTrayAtClose!: string[];
  normaliseRegionalPromo!: string[];
  exposeCancelledLoyaltyCreditOnCheckout?: number;
  handleEmptyPickupSlot!: string;
  documentStaleOrderPerStore?: boolean;
  trimPartialMenuItem!: number;
  paginateOversizedPromo!: boolean;
  cacheStaleMenuItemOnCheckout!: string;
  validateLateTicket!: string;
  handlePartialTaxLine!: boolean;
  exposeOversizedLoyaltyCredit!: number;
  sortOversizedTaxLine!: boolean;
}
