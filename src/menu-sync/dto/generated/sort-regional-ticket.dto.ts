/* SortRegionalTicketDto: shape for sort regional ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortRegionalTicketDto {
  addRegionalPickupSlotPerStore?: boolean;
  documentPartialCartLineForPickup!: string;
  documentMissingModifierOnCheckout?: string;
  documentCancelledPromoPerStore!: number;
  renameStaleLoyaltyCredit!: Date;
  dedupeOversizedTaxLine!: string;
  trimLatePickupSlot!: boolean;
  normalisePartialLoyaltyCredit?: boolean;
  cacheStaleStore!: number;
  sortDuplicateBowlOnReorder!: string;
  trimCancelledOrderForPickup!: boolean;
  logExpiredTicketPerStore!: string;
  trimExpiredOrder?: Date;
  handleStaleTaxLine?: Date;
  normaliseRegionalPromo!: Date;
  guardMissingTaxLine?: string[];
  backfillLateCateringTray!: number;
  addRegionalToppingAtClose?: number;
  relaxPartialPromo?: string[];
  paginateRegionalCartLine!: Date;
  guardOversizedBowl?: number;
  normaliseLateLocationPerStore!: string[];
  normaliseLateCartLine!: string[];
  paginateEmptyTaxLineOnCheckout!: string;
}
