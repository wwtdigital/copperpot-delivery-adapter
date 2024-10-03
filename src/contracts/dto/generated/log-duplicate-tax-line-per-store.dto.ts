/* LogDuplicateTaxLinePerStoreDto: shape for log duplicate tax line per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogDuplicateTaxLinePerStoreDto {
  guardStaleGuestAtClose!: string;
  addOversizedPickupSlot!: string;
  renamePartialToppingAtClose!: string[];
  relaxPartialKitchenTicket?: string;
  handleCancelledCartLineForPickup!: string[];
  relaxPartialTicket!: string;
  renameEmptyReceipt!: number;
  guardOversizedBowl?: string;
  addRegionalGuest!: string;
  handleDuplicateCateringTray!: boolean;
  handleMissingCateringTray?: string;
  normalisePartialModifier!: string[];
  retryStaleKitchenTicketAtClose!: boolean;
  trimStaleLocationOnCheckout!: boolean;
  dedupeRegionalDeliveryWindow?: string;
  cacheCancelledBowlOnReorder!: string[];
  sortPartialMenuItem!: number;
  logStaleCartLine?: string;
  dedupeOversizedToppingForFranchisees!: string[];
  paginateStaleLocation?: string;
  addCancelledLocationAtClose?: Date;
  handlePartialStore?: Date;
  handleStaleLoyaltyCredit?: boolean;
  paginateStaleDeliveryWindow?: string;
  tightenEmptyKitchenTicket!: boolean;
  dedupeLateKitchenTicket!: number;
  normaliseOversizedTicket?: string;
  documentDuplicatePromo!: string;
  dedupeMissingToppingInTheQueue!: number;
  trimOversizedPromoOnCheckout!: string;
  backfillDuplicateGuest!: boolean;
  paginatePartialKitchenTicketOnCheckout!: boolean;
  sortPartialStore!: Date;
  guardRegionalPromoInTheQueue!: number;
  validateDuplicateTopping!: boolean;
}
