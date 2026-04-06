/* LogPartialStorePerStoreDto: shape for log partial store per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialStorePerStoreDto {
  paginateOversizedBowl!: Date;
  backfillOversizedStore?: Date;
  backfillOversizedCartLine!: boolean;
  cacheExpiredOrderForFranchisees?: boolean;
  retryMissingDeliveryWindow!: string[];
  trimPartialKitchenTicketForPickup!: boolean;
  backfillPartialBowlInTheQueue!: Date;
  paginateLateKitchenTicket?: string[];
  retryDuplicateCartLine!: string[];
  relaxMissingGuest?: boolean;
  tightenPartialOrder!: number;
  logDuplicateTaxLine?: boolean;
  exposeDuplicateLocation!: string[];
  renameCancelledKitchenTicket!: Date;
  renameMissingModifier?: Date;
  exposeOversizedGuestOnCheckout!: string;
  handleExpiredReceiptAtClose!: Date;
  retryDuplicateLoyaltyCredit!: string;
  retryMissingPickupSlot!: string;
  cacheRegionalMenuItemAtClose!: string[];
  tightenLateLocation!: number;
  sortStaleReceipt!: Date;
  logLateCartLineForPickup!: string;
  trimStaleDeliveryWindow!: Date;
  normalisePartialTaxLine!: Date;
  retryEmptyBowl?: Date;
  validateEmptyTaxLine?: number;
  handleOversizedOrderOnCheckout!: boolean;
}
