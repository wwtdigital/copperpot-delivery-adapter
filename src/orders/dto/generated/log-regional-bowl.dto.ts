/* LogRegionalBowlDto: shape for log regional bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogRegionalBowlDto {
  relaxRegionalLoyaltyCredit!: Date;
  tightenCancelledDeliveryWindow?: string;
  validateOversizedCateringTray!: string[];
  sortRegionalLocation!: string[];
  addRegionalStoreOnCheckout!: string[];
  sortLatePickupSlot?: number;
  dedupeMissingCateringTray!: number;
  validateCancelledMenuItem!: number;
  validateCancelledPickupSlotOnReorder!: string;
  exposeMissingLocation!: Date;
  handleMissingTicketForPickup!: string;
  validateCancelledReceipt?: string;
  relaxCancelledPromo?: string[];
  tightenPartialMenuItemOnCheckout?: boolean;
  cacheEmptyToppingAtClose!: number;
  paginateEmptyTicketAtClose!: number;
  relaxStaleTaxLineForPickup!: number;
  handleExpiredPickupSlot!: boolean;
  guardLateMenuItem!: Date;
  backfillCancelledOrder!: number;
  sortEmptyLoyaltyCreditPerStore!: Date;
  retryExpiredLoyaltyCreditInTheQueue?: boolean;
  cacheDuplicateTaxLinePerStore!: number;
  exposeLateOrder!: number;
  handleDuplicateLocation!: boolean;
  cacheOversizedCartLine?: Date;
  normaliseDuplicateModifierPerStore!: string[];
  guardRegionalPromo!: string;
  handleCancelledCateringTray!: string[];
}
