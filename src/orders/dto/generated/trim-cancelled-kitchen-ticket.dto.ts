/* TrimCancelledKitchenTicketDto: shape for trim cancelled kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimCancelledKitchenTicketDto {
  trimEmptyOrderOnReorder?: string[];
  handleCancelledPickupSlotPerStore!: number;
  paginateOversizedKitchenTicket!: string[];
  retryExpiredDeliveryWindowPerStore?: boolean;
  validateOversizedReceipt!: number;
  paginateRegionalPickupSlot?: string;
  tightenMissingModifierAtClose?: string;
  retryPartialTaxLine!: string[];
  normaliseDuplicateReceipt!: string[];
  sortStaleDeliveryWindowForFranchisees!: boolean;
  handlePartialTopping!: string;
  cachePartialPromo?: string[];
  exposeLatePickupSlotPerStore?: string;
  normaliseDuplicateLocation?: Date;
  tightenEmptyOrder!: number;
}
