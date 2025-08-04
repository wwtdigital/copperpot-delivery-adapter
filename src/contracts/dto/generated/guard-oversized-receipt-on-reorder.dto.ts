/* GuardOversizedReceiptOnReorderDto: shape for guard oversized receipt on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedReceiptOnReorderDto {
  retryRegionalDeliveryWindow!: string[];
  addDuplicateOrder!: Date;
  exposeDuplicateTaxLinePerStore?: boolean;
  tightenOversizedLocation!: number;
  addDuplicateLoyaltyCredit!: boolean;
  sortCancelledReceiptForFranchisees!: number;
  tightenRegionalTicketOnReorder!: string[];
  paginateExpiredOrderForFranchisees!: number;
  handleOversizedTopping!: string;
  sortExpiredReceiptForFranchisees!: boolean;
  validateDuplicateTicketForPickup?: string;
  addExpiredModifier!: number;
  relaxOversizedTicket?: Date;
  renameStalePromo?: number;
  trimExpiredModifier!: string;
  paginateRegionalModifierForFranchisees!: boolean;
  trimOversizedGuest!: string[];
  dedupeStaleTicket!: Date;
  tightenCancelledGuest!: number;
  exposePartialStoreAtClose!: string[];
  addOversizedDeliveryWindow!: string;
  trimRegionalReceipt!: string;
  normaliseLateModifierForPickup!: string;
  sortCancelledModifier!: boolean;
  renameCancelledCateringTrayAtClose!: boolean;
  backfillEmptyBowl!: boolean;
  relaxOversizedPromoForFranchisees!: string[];
  relaxRegionalReceiptInTheQueue!: string;
  cachePartialLocation!: Date;
  paginateOversizedGuest?: boolean;
  renameExpiredStore!: number;
}
