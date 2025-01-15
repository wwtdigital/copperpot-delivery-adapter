/* TightenEmptyTaxLineDto: shape for tighten empty tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenEmptyTaxLineDto {
  addOversizedTicket!: string[];
  backfillCancelledBowl!: string[];
  guardMissingStore?: string[];
  handleOversizedCartLine!: boolean;
  backfillOversizedCateringTrayForFranchisees!: boolean;
  paginateDuplicateDeliveryWindowAtClose!: string;
  logPartialCateringTray!: number;
  backfillOversizedPromo!: string[];
  dedupeEmptyOrderInTheQueue!: string;
  normaliseCancelledKitchenTicket!: boolean;
  handleExpiredKitchenTicketAtClose!: boolean;
  retryStaleReceipt?: Date;
  dedupePartialPickupSlot!: boolean;
  paginatePartialCartLine?: number;
  paginateLateBowlForFranchisees!: boolean;
  logCancelledCateringTrayAtClose?: boolean;
  dedupeLatePickupSlot!: Date;
  guardEmptyDeliveryWindowAtClose!: Date;
}
