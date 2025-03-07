/* TrimCancelledPromoDto: shape for trim cancelled promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimCancelledPromoDto {
  renameExpiredCartLine?: boolean;
  trimPartialLoyaltyCreditAtClose!: number;
  sortOversizedOrderForPickup!: Date;
  tightenCancelledDeliveryWindow?: string[];
  logStaleToppingForPickup!: number;
  validateCancelledMenuItem!: Date;
  normaliseCancelledReceipt!: boolean;
  normaliseOversizedStoreOnReorder!: number;
  backfillExpiredTaxLine!: string;
  cacheStaleStoreForPickup?: Date;
  backfillDuplicateDeliveryWindow!: Date;
  tightenRegionalCartLine!: number;
  retryEmptyGuest!: string;
  backfillPartialPickupSlotAtClose?: Date;
  addDuplicateStore!: string[];
  handleCancelledBowl?: string;
  handleDuplicateTaxLine!: Date;
  normaliseOversizedCartLine?: Date;
  relaxMissingTicketOnReorder!: string[];
  retryDuplicatePickupSlot?: Date;
  trimRegionalDeliveryWindow!: boolean;
  renamePartialCartLine!: boolean;
  trimRegionalTicketAtClose!: number;
  handleRegionalCartLineOnCheckout!: boolean;
}
