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
}
