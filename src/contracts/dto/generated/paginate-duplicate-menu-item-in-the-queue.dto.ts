/* PaginateDuplicateMenuItemInTheQueueDto: shape for paginate duplicate menu item in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateDuplicateMenuItemInTheQueueDto {
  tightenPartialDeliveryWindow?: boolean;
  renameDuplicateCartLine!: string;
  renameEmptyCateringTrayPerStore!: string;
  paginateMissingTicketForFranchisees!: string[];
  handleExpiredBowl!: string[];
  renameDuplicateKitchenTicketAtClose!: string;
  relaxMissingGuest?: boolean;
  dedupeLateLoyaltyCredit?: string[];
  paginateCancelledDeliveryWindow?: number;
  handleEmptyLocation?: Date;
  trimRegionalTopping?: number;
  paginateMissingCartLine!: string[];
  dedupeOversizedTicket?: boolean;
  relaxLateCateringTrayOnReorder!: string;
  dedupeMissingPickupSlot?: string;
  normaliseMissingLoyaltyCreditInTheQueue!: number;
  renameLateDeliveryWindowOnReorder?: number;
  addPartialTicketForPickup!: Date;
}
