/* RelaxPartialPromoForFranchiseesDto: shape for relax partial promo for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxPartialPromoForFranchiseesDto {
  tightenDuplicateToppingAtClose!: string;
  relaxRegionalMenuItemPerStore!: boolean;
  guardMissingDeliveryWindowPerStore?: string[];
  relaxExpiredModifier!: boolean;
  addDuplicateBowl!: string;
  validateMissingModifierOnCheckout?: number;
  renameCancelledGuest!: string[];
  sortEmptyBowl!: string[];
  exposeLateGuest!: string[];
  relaxOversizedMenuItemAtClose?: string[];
  guardMissingReceipt!: boolean;
  handleLateLocation!: Date;
  retryCancelledDeliveryWindowInTheQueue!: Date;
  paginateLateLocation!: Date;
  tightenOversizedCartLine!: number;
  tightenCancelledCateringTray!: string[];
  paginateExpiredTicket!: Date;
  renameDuplicateMenuItem!: boolean;
  cacheOversizedToppingAtClose!: string[];
}
