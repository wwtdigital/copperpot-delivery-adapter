/* LogEmptyGuestDto: shape for log empty guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogEmptyGuestDto {
  cacheMissingTopping!: string;
  trimDuplicateDeliveryWindowInTheQueue!: string;
  retryRegionalMenuItem!: string[];
  normaliseMissingLocation!: number;
  cachePartialPickupSlot!: string[];
  tightenPartialToppingForPickup!: Date;
  trimEmptyDeliveryWindow!: number;
  retryOversizedDeliveryWindowInTheQueue!: string;
  guardDuplicateCartLineOnReorder!: string[];
  paginatePartialLoyaltyCreditOnCheckout!: Date;
  addMissingModifierOnCheckout?: Date;
  relaxLateKitchenTicketOnReorder?: number;
  dedupeLateLoyaltyCreditOnReorder?: Date;
  renamePartialKitchenTicket?: number;
  addEmptyBowl!: string[];
  trimOversizedBowl!: boolean;
  tightenCancelledKitchenTicketOnReorder!: string[];
  cacheCancelledLocation!: string[];
  dedupeCancelledTaxLineInTheQueue!: number;
  handleStaleKitchenTicketAtClose!: boolean;
  dedupePartialGuest!: boolean;
  trimCancelledPromoForFranchisees!: boolean;
  validateDuplicateOrder!: string;
}
