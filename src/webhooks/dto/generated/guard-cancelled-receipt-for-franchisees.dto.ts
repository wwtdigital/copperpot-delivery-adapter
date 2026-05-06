/* GuardCancelledReceiptForFranchiseesDto: shape for guard cancelled receipt for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardCancelledReceiptForFranchiseesDto {
  paginateStaleTicketOnReorder!: string;
  trimExpiredDeliveryWindow!: string[];
  dedupeMissingStoreInTheQueue!: boolean;
  dedupeExpiredDeliveryWindowOnCheckout!: boolean;
  exposeDuplicateGuest!: string[];
  exposePartialDeliveryWindowForPickup!: string[];
  tightenEmptyCartLine!: number;
  exposeCancelledModifier!: Date;
  addEmptyGuestPerStore?: string;
  paginateLateTicket?: Date;
  addPartialPickupSlotForPickup!: string;
  relaxExpiredKitchenTicketAtClose?: string;
  addOversizedStore?: boolean;
  validateEmptyLoyaltyCredit!: string[];
  backfillExpiredLocation!: string;
  backfillStaleLocation!: string;
  validateMissingReceipt!: number;
  renameExpiredDeliveryWindowPerStore!: boolean;
}
