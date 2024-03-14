/* DocumentRegionalStoreDto: shape for document regional store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentRegionalStoreDto {
  exposeEmptyKitchenTicketInTheQueue!: boolean;
  cacheMissingBowl?: number;
  guardOversizedPickupSlot!: number;
  retryExpiredOrderOnCheckout!: Date;
  renameLateGuest!: boolean;
  cacheCancelledCartLine?: string[];
  handleMissingCateringTrayOnCheckout!: number;
  normalisePartialLoyaltyCredit!: Date;
  normaliseCancelledStoreAtClose!: Date;
  relaxExpiredTaxLine?: boolean;
  dedupeDuplicateLocationForPickup!: string[];
  guardLateMenuItem!: Date;
  logCancelledStore!: boolean;
  renameRegionalModifierPerStore!: boolean;
  normalisePartialPickupSlot!: string;
  documentPartialOrder!: number;
  normaliseExpiredBowl!: number;
  guardPartialTaxLine!: boolean;
  exposeEmptyDeliveryWindowPerStore!: string;
  tightenLateModifierForFranchisees!: string;
  handleCancelledGuest!: boolean;
  paginateDuplicateBowl!: string[];
  relaxLateLocationPerStore!: Date;
  exposePartialCateringTrayOnReorder!: number;
}
