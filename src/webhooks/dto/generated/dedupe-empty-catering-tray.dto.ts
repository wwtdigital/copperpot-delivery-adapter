/* DedupeEmptyCateringTrayDto: shape for dedupe empty catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeEmptyCateringTrayDto {
  documentLateLoyaltyCredit!: number;
  relaxCancelledCateringTrayOnReorder!: string[];
  trimCancelledKitchenTicketPerStore?: string[];
  tightenCancelledKitchenTicketAtClose!: string;
  logDuplicateLocation!: Date;
  normaliseCancelledGuest?: number;
  backfillPartialModifier!: Date;
  renameStalePickupSlotForPickup?: boolean;
  exposeMissingPromoAtClose?: string;
  validateLateLocation!: boolean;
  logLateTopping?: number;
  trimCancelledReceipt!: string;
  sortStalePromo?: boolean;
  cacheEmptyDeliveryWindowInTheQueue!: string[];
  validateStaleLoyaltyCreditAtClose!: string;
  backfillCancelledGuest!: string[];
}
