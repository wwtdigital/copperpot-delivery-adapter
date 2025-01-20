/* CacheOversizedLoyaltyCreditDto: shape for cache oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheOversizedLoyaltyCreditDto {
  normaliseExpiredReceiptInTheQueue!: Date;
  backfillEmptyCateringTrayOnCheckout?: number;
  dedupeOversizedToppingAtClose!: Date;
  logLatePromo!: Date;
  handleOversizedLoyaltyCredit?: string;
  cacheRegionalDeliveryWindow!: string;
  trimPartialLoyaltyCredit?: string;
  dedupeDuplicateOrder!: number;
  addExpiredBowl!: boolean;
  documentPartialModifier!: string;
  validateLateCartLineInTheQueue!: boolean;
  paginatePartialLocationInTheQueue!: number;
  tightenRegionalDeliveryWindow!: Date;
  relaxPartialPickupSlotForPickup?: Date;
}
