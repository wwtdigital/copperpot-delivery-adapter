/* SortEmptyLoyaltyCreditDto: shape for sort empty loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortEmptyLoyaltyCreditDto {
  dedupeEmptyLocation!: Date;
  handleDuplicateLocation?: string;
  addLatePickupSlot!: Date;
  trimMissingGuest!: number;
  relaxExpiredBowl!: number;
  cacheStaleLocationOnCheckout!: string;
  relaxExpiredMenuItem?: boolean;
  dedupeExpiredKitchenTicketPerStore!: boolean;
  cacheExpiredBowl?: string[];
  paginateOversizedKitchenTicket?: number;
  handleRegionalTaxLineOnReorder!: boolean;
  relaxStaleBowl?: number;
  guardRegionalOrderAtClose?: number;
  addOversizedDeliveryWindow!: boolean;
  tightenLateStore?: number;
  backfillEmptyPromoAtClose!: boolean;
  exposeOversizedPromoPerStore?: boolean;
  validateCancelledStoreOnCheckout!: string;
  logEmptyTicketAtClose?: string;
  guardMissingModifier?: Date;
  documentExpiredLocation?: boolean;
  retryPartialTopping!: Date;
  sortLateGuest?: Date;
  validateRegionalPickupSlotOnCheckout!: boolean;
  renameEmptyGuest!: Date;
  paginateCancelledBowlPerStore?: string;
}
