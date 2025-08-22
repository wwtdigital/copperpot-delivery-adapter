/* TightenCancelledToppingInTheQueueDto: shape for tighten cancelled topping in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledToppingInTheQueueDto {
  normaliseMissingModifierOnCheckout!: string[];
  guardPartialTaxLine!: string[];
  tightenPartialTopping!: string;
  trimLatePickupSlot!: number;
  relaxDuplicateStoreAtClose!: string[];
  backfillLatePromo!: number;
  sortOversizedReceiptAtClose!: Date;
  backfillEmptyGuestOnCheckout!: number;
  tightenOversizedLoyaltyCreditOnReorder!: string[];
  cacheDuplicateTicket?: number;
  backfillEmptyKitchenTicketInTheQueue!: number;
  renameEmptyCartLine!: string[];
  paginateOversizedTicket!: Date;
  validateExpiredPromo?: string;
  guardStaleTaxLine?: string;
  cacheEmptyPickupSlotAtClose!: number;
  tightenPartialMenuItemOnReorder!: Date;
  normaliseOversizedCartLine!: boolean;
  validatePartialStore!: Date;
  tightenEmptyLocationForFranchisees!: string[];
  tightenMissingOrder!: Date;
  paginateRegionalLocationOnReorder!: string;
  relaxEmptyLocationOnReorder?: Date;
  addExpiredModifier!: boolean;
  trimMissingBowlOnReorder!: string;
  dedupeRegionalOrder!: string[];
  renameCancelledModifierForFranchisees!: number;
  handleStaleDeliveryWindowForFranchisees!: Date;
}
