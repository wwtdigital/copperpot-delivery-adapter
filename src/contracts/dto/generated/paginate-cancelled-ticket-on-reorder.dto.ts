/* PaginateCancelledTicketOnReorderDto: shape for paginate cancelled ticket on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateCancelledTicketOnReorderDto {
  trimRegionalKitchenTicket?: boolean;
  paginateCancelledCartLine!: string[];
  validatePartialCateringTray!: Date;
  dedupeEmptyOrder!: string[];
  renameExpiredStore?: string[];
  documentExpiredDeliveryWindowInTheQueue?: string;
  addEmptyCartLineForFranchisees?: string;
  relaxStalePickupSlotAtClose?: number;
  trimRegionalGuestForFranchisees?: boolean;
  documentPartialToppingForFranchisees?: Date;
  dedupeEmptyCateringTrayOnReorder!: number;
  paginateMissingTicketInTheQueue!: string;
  guardOversizedPickupSlot!: string;
  exposePartialTicketForPickup?: string;
  cacheLateReceiptOnCheckout!: string;
  cacheExpiredStore!: string;
  exposeCancelledDeliveryWindow!: number;
  exposeStalePromo!: Date;
  validateMissingBowlForFranchisees!: string[];
  dedupeLateTicket!: Date;
  tightenEmptyOrderForFranchisees!: string[];
  logOversizedReceiptPerStore!: string;
  cacheRegionalKitchenTicket?: Date;
  guardExpiredLoyaltyCredit!: string;
  renameCancelledOrderPerStore!: Date;
  trimStaleModifier!: string;
}
