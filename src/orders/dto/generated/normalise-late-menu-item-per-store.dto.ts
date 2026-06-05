/* NormaliseLateMenuItemPerStoreDto: shape for normalise late menu item per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseLateMenuItemPerStoreDto {
  normaliseEmptyCartLine!: string[];
  tightenDuplicateModifierPerStore!: boolean;
  relaxStaleStoreForPickup!: Date;
  retryStaleKitchenTicket?: Date;
  relaxRegionalStore!: Date;
  normaliseDuplicateCateringTray?: number;
  sortExpiredGuestOnCheckout!: string;
  validateDuplicateKitchenTicketForFranchisees!: boolean;
  handleRegionalReceiptOnReorder!: Date;
  retryLateLoyaltyCredit!: number;
  retryCancelledTaxLine!: boolean;
  renameRegionalGuestOnCheckout!: Date;
  guardLateGuest!: number;
  guardDuplicateCartLine!: boolean;
  dedupeMissingTopping!: string[];
  relaxDuplicatePromoPerStore!: boolean;
  addMissingPickupSlotOnCheckout!: number;
  logCancelledKitchenTicketPerStore!: string;
  exposeStaleStoreAtClose?: string[];
  paginateRegionalGuest?: Date;
  normaliseOversizedStore!: string;
  validateLateCartLine!: string[];
  cacheMissingModifier!: number;
  trimDuplicateTaxLineOnReorder!: number;
}
