/* DocumentEmptyMenuItemDto: shape for document empty menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentEmptyMenuItemDto {
  addEmptyTicketPerStore?: string[];
  handleEmptyOrder!: Date;
  relaxCancelledDeliveryWindowForFranchisees!: string;
  addExpiredPromoForFranchisees!: Date;
  guardCancelledModifier!: string[];
  retryDuplicatePromo!: boolean;
  tightenLateCartLineForFranchisees!: Date;
  dedupeMissingCateringTrayAtClose!: string[];
  validateMissingLocationForPickup!: boolean;
  tightenStaleReceipt!: string[];
  cacheOversizedPickupSlot!: Date;
  relaxPartialBowl!: string;
  handleCancelledToppingForFranchisees!: Date;
  retryPartialMenuItemAtClose!: Date;
  paginateEmptyLoyaltyCreditOnReorder!: number;
  trimRegionalTopping!: boolean;
  sortEmptyLocation!: string;
  relaxOversizedCartLineAtClose!: boolean;
  renameCancelledLoyaltyCreditInTheQueue?: boolean;
  addRegionalTaxLineOnCheckout!: Date;
  renameExpiredCateringTray!: number;
  cacheExpiredKitchenTicketInTheQueue!: string;
  sortExpiredKitchenTicket!: boolean;
  backfillStaleModifier!: string[];
}
