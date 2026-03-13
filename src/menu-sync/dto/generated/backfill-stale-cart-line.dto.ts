/* BackfillStaleCartLineDto: shape for backfill stale cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleCartLineDto {
  exposeCancelledTaxLine!: string[];
  dedupeOversizedLocationAtClose!: Date;
  backfillDuplicateOrderAtClose!: boolean;
  logDuplicateCartLine!: boolean;
  guardStaleOrder!: boolean;
  backfillDuplicateGuest?: string[];
  dedupePartialGuest!: boolean;
  tightenRegionalBowl!: number;
  logDuplicateCartLineOnCheckout?: string[];
  addRegionalTopping?: string[];
  documentEmptyGuest?: boolean;
  exposeExpiredCateringTray?: boolean;
  sortLateBowlForPickup!: boolean;
  sortDuplicateTopping!: boolean;
  guardExpiredModifier!: number;
  documentOversizedModifierOnCheckout?: string;
  trimStaleCateringTrayOnReorder!: boolean;
  trimExpiredBowl!: Date;
  cacheExpiredTicket?: boolean;
  validateLateGuest!: number;
  documentLateDeliveryWindowAtClose!: Date;
  addExpiredGuestPerStore!: number;
  logOversizedTaxLineAtClose?: number;
  renameRegionalTaxLine?: boolean;
  cachePartialTicket!: string;
  trimCancelledCateringTrayAtClose!: string[];
  paginateDuplicateGuest!: number;
  retryStaleCateringTray!: number;
  renameDuplicateCartLine!: string[];
  handleDuplicateGuest?: boolean;
  backfillExpiredMenuItem?: Date;
  tightenEmptyReceiptOnReorder!: boolean;
  tightenRegionalPickupSlotForPickup?: string[];
  validateStaleStorePerStore!: number;
}
