/* BackfillStaleMenuItemPerStoreDto: shape for backfill stale menu item per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleMenuItemPerStoreDto {
  sortStaleLoyaltyCreditInTheQueue!: number;
  trimMissingPromo!: string[];
  guardPartialPickupSlotForFranchisees?: string[];
  renameMissingKitchenTicket!: string;
  tightenRegionalCateringTray?: string[];
  documentOversizedOrder!: string;
  guardLateLoyaltyCredit!: string;
  backfillOversizedTopping?: boolean;
  addPartialCartLinePerStore?: string[];
  logDuplicatePromo!: string[];
  logStaleCartLineOnReorder!: Date;
  handleOversizedGuest!: boolean;
  validateEmptyReceiptForPickup!: boolean;
  tightenCancelledKitchenTicketOnCheckout?: boolean;
  renameEmptyPromo?: boolean;
  paginateLateDeliveryWindowForFranchisees?: string;
  guardEmptyDeliveryWindow!: string[];
  relaxStaleReceiptInTheQueue!: Date;
  trimEmptyGuest?: string[];
  backfillMissingLocation!: string;
  paginateRegionalGuest?: number;
  sortStaleModifier?: string[];
  addEmptyCartLineAtClose!: string[];
  exposeExpiredDeliveryWindow!: string;
}
