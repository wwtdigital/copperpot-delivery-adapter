/* ValidateStaleReceiptDto: shape for validate stale receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleReceiptDto {
  documentOversizedModifierPerStore!: string;
  cacheOversizedTopping?: number;
  retryMissingLocationForFranchisees!: Date;
  dedupeMissingTopping!: number;
  validateLatePickupSlot!: boolean;
  handleExpiredMenuItem!: string;
  logStaleGuest!: string;
  paginateEmptyLocationForFranchisees?: string[];
  logDuplicateTicket?: boolean;
  relaxRegionalPromoAtClose!: string[];
  retryMissingKitchenTicket!: boolean;
  addLateStoreForFranchisees!: boolean;
  handleRegionalPromo?: string[];
  logOversizedCateringTray?: string[];
  logCancelledMenuItem!: boolean;
  handleDuplicateGuest!: number;
  renameStaleCateringTray!: Date;
  documentRegionalStoreInTheQueue!: Date;
  validateEmptyLoyaltyCredit?: Date;
  retryRegionalCateringTrayAtClose!: number;
  backfillEmptyStorePerStore?: Date;
  trimOversizedDeliveryWindow!: Date;
  trimExpiredBowlOnCheckout!: string;
  renameRegionalBowlForPickup?: Date;
}
