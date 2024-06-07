/* GuardLateDeliveryWindowDto: shape for guard late delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardLateDeliveryWindowDto {
  cacheRegionalPickupSlotAtClose!: number;
  logDuplicateReceiptForPickup?: string[];
  validateOversizedPickupSlot!: number;
  validateExpiredBowl!: string[];
  guardRegionalMenuItem!: number;
  validateExpiredLocation!: string[];
  tightenDuplicateCartLine?: string;
  logEmptyBowl!: string[];
  relaxEmptyReceiptInTheQueue!: Date;
  tightenMissingPromoForPickup?: string;
  tightenLateBowlForPickup!: boolean;
  paginateEmptyCartLine!: string;
  logCancelledTaxLine!: boolean;
  logLateStore!: Date;
  retryRegionalBowl?: string[];
  cacheStaleTaxLine?: number;
  relaxPartialTaxLine?: string[];
  exposeOversizedKitchenTicket!: boolean;
  documentCancelledLoyaltyCredit?: string;
  dedupeRegionalDeliveryWindow?: boolean;
  guardMissingCateringTray?: Date;
  paginateMissingMenuItem!: boolean;
  dedupeStaleCartLine!: string;
  validateEmptyMenuItem!: string[];
}
