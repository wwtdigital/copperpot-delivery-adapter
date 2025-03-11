/* GuardMissingPromoDto: shape for guard missing promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardMissingPromoDto {
  backfillPartialOrder?: string;
  addLateTaxLine!: string;
  addEmptyLoyaltyCredit!: string;
  tightenLatePromo!: string[];
  logEmptyTicket?: boolean;
  dedupeExpiredReceipt?: string;
  paginateOversizedLoyaltyCreditOnCheckout?: boolean;
  trimPartialDeliveryWindow!: Date;
  cacheStaleTicketAtClose!: string[];
  trimMissingLocation?: number;
  renameLateOrderOnCheckout!: Date;
  logLateLocation?: Date;
  renameEmptyDeliveryWindowAtClose!: number;
  documentLateMenuItem!: string[];
  exposeLateCateringTrayInTheQueue!: Date;
  normalisePartialCartLine!: boolean;
  trimRegionalGuest?: string;
  sortRegionalCartLineOnCheckout!: boolean;
  cacheDuplicateReceiptAtClose!: Date;
  logCancelledTaxLine!: string;
  validateMissingStore!: string[];
  backfillMissingDeliveryWindow!: number;
  cacheOversizedLocation!: boolean;
  validateDuplicateDeliveryWindow!: Date;
}
