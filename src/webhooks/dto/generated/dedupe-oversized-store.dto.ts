/* DedupeOversizedStoreDto: shape for dedupe oversized store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedStoreDto {
  relaxDuplicateDeliveryWindow!: string[];
  sortDuplicateOrder!: Date;
  tightenLateReceipt!: Date;
  renameDuplicateTicket?: boolean;
  addOversizedDeliveryWindowPerStore!: string;
  paginateEmptyLoyaltyCreditForPickup!: number;
  relaxLateDeliveryWindow!: Date;
  trimCancelledLoyaltyCredit?: string[];
  exposeMissingPromoInTheQueue!: Date;
  addStalePromo!: boolean;
  dedupePartialPickupSlot?: string[];
  paginateCancelledKitchenTicket?: boolean;
  documentPartialToppingOnReorder!: boolean;
  backfillExpiredMenuItemOnCheckout!: string;
  cacheDuplicatePromoForFranchisees!: string;
  dedupeMissingDeliveryWindow!: boolean;
  cacheExpiredTicket?: string;
  dedupeEmptyMenuItemOnCheckout!: boolean;
  exposePartialToppingForPickup!: string;
  exposeEmptyPickupSlotAtClose!: Date;
  tightenStaleStoreInTheQueue!: boolean;
  logCancelledMenuItem?: boolean;
  renameDuplicateGuest!: number;
  paginateDuplicateKitchenTicketPerStore!: string;
}
