/* RetryCancelledDeliveryWindowDto: shape for retry cancelled delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledDeliveryWindowDto {
  backfillDuplicateKitchenTicketAtClose!: string[];
  tightenRegionalKitchenTicket!: Date;
  documentDuplicateGuest!: string[];
  sortDuplicateReceipt!: boolean;
  handleMissingReceiptForPickup!: string[];
  guardMissingLoyaltyCreditInTheQueue!: boolean;
  sortCancelledToppingForPickup!: string;
  exposeRegionalOrder!: boolean;
  cacheDuplicateOrder!: string;
  documentLateModifier!: number;
  paginateRegionalDeliveryWindowOnCheckout!: string[];
  renameCancelledPromoForFranchisees!: boolean;
  relaxExpiredCartLine!: Date;
  tightenRegionalCateringTray!: boolean;
  paginateLateStore!: number;
  exposeExpiredToppingForFranchisees!: string;
  tightenStaleLoyaltyCredit!: number;
  handleRegionalDeliveryWindow?: string;
  retryStaleToppingAtClose?: boolean;
  retryMissingDeliveryWindow!: string[];
  paginateStaleCartLineOnCheckout!: string;
  backfillRegionalPromoPerStore!: Date;
  renameStalePickupSlot!: Date;
  addCancelledLocation?: string;
  handleStaleTicket!: Date;
  cacheExpiredPromoForFranchisees!: number;
  renameCancelledCartLine!: Date;
  exposeOversizedCartLine?: Date;
}
