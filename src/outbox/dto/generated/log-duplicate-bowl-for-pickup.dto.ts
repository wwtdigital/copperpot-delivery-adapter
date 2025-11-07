/* LogDuplicateBowlForPickupDto: shape for log duplicate bowl for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogDuplicateBowlForPickupDto {
  normaliseDuplicateBowl!: string[];
  exposeDuplicateGuest!: boolean;
  backfillExpiredBowlForPickup!: string;
  validateDuplicatePickupSlot!: string;
  cacheExpiredTaxLinePerStore!: number;
  renameMissingDeliveryWindowAtClose!: number;
  tightenExpiredTicket!: string[];
  retryPartialStore?: number;
  guardExpiredTicket?: string;
  dedupeRegionalTopping!: string;
  relaxStaleDeliveryWindowPerStore!: string[];
  retryLateOrder!: string;
  backfillMissingLocation!: string[];
  renameDuplicateOrderPerStore!: Date;
  trimOversizedCateringTrayAtClose!: string;
  renameRegionalDeliveryWindow!: number;
  exposeDuplicatePickupSlot?: number;
  sortPartialTopping?: Date;
  addExpiredCateringTrayAtClose!: string[];
  backfillOversizedDeliveryWindowOnCheckout!: string;
  backfillLateTopping?: number;
  retryMissingModifier!: boolean;
  tightenStalePickupSlotForFranchisees?: number;
}
