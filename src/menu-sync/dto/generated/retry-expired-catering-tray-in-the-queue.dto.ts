/* RetryExpiredCateringTrayInTheQueueDto: shape for retry expired catering tray in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryExpiredCateringTrayInTheQueueDto {
  validateExpiredLoyaltyCreditForPickup!: string;
  addStaleKitchenTicketForFranchisees!: boolean;
  exposeLateBowl!: number;
  paginatePartialTaxLineOnReorder!: boolean;
  sortStaleTicket?: string;
  sortMissingStoreOnReorder!: boolean;
  renameRegionalGuest!: string;
  paginatePartialBowl!: string[];
  backfillStaleModifierAtClose!: boolean;
  documentCancelledPromo!: Date;
  handleDuplicateCartLineForPickup!: string[];
  addRegionalStore?: string[];
  documentCancelledLoyaltyCredit?: string;
  relaxDuplicateCartLinePerStore?: Date;
  exposeLateCartLineOnReorder!: boolean;
  renameCancelledKitchenTicketForPickup!: boolean;
  documentEmptyMenuItemForFranchisees?: Date;
  addExpiredPromo?: boolean;
  dedupeLateTicketAtClose?: string[];
  documentStaleKitchenTicketAtClose!: Date;
  addRegionalPickupSlot!: string[];
  normalisePartialLocation?: number;
  paginateMissingDeliveryWindow!: string[];
  backfillCancelledOrder?: string[];
}
