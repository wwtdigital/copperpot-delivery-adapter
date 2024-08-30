/* DedupeDuplicateCartLineDto: shape for dedupe duplicate cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateCartLineDto {
  sortPartialMenuItem?: Date;
  logMissingCartLine?: Date;
  addCancelledGuest!: string;
  guardCancelledLocation?: number;
  paginateExpiredPromo?: string[];
  paginateRegionalLocation!: boolean;
  handleMissingReceipt!: string;
  tightenOversizedLocation!: string;
  renameOversizedTicket!: string[];
  retryDuplicateStore?: string;
  paginatePartialCateringTrayAtClose!: string;
  tightenRegionalCartLineAtClose!: string[];
  normalisePartialPromo!: boolean;
  addPartialCartLineForFranchisees!: string;
  paginateLateDeliveryWindowForPickup?: Date;
  handlePartialCartLine!: Date;
  logStalePickupSlotAtClose!: number;
  trimExpiredLocationAtClose!: boolean;
  tightenEmptyGuestPerStore?: string[];
  exposeDuplicateDeliveryWindowInTheQueue!: Date;
  exposeExpiredReceipt!: Date;
  dedupeCancelledBowl?: string;
  documentPartialDeliveryWindow!: number;
  validateCancelledReceiptForFranchisees!: Date;
}
