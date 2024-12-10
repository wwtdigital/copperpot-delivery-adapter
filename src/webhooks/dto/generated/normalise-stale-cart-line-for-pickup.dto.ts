/* NormaliseStaleCartLineForPickupDto: shape for normalise stale cart line for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseStaleCartLineForPickupDto {
  logCancelledMenuItem!: number;
  sortStaleTicketOnCheckout!: string;
  validateRegionalPickupSlot?: Date;
  addDuplicateCartLineAtClose!: string[];
  logEmptyLocation?: boolean;
  handleDuplicateMenuItem?: string;
  documentEmptyDeliveryWindowOnReorder!: string[];
  exposeRegionalTopping?: boolean;
  tightenEmptyTaxLine!: string[];
  trimExpiredOrderPerStore?: number;
  retryPartialGuestOnReorder!: string[];
  relaxRegionalOrder?: string[];
  logCancelledLocation?: number;
  documentPartialMenuItem!: number;
  tightenPartialOrderAtClose?: string;
  exposeLateReceipt!: number;
  addEmptyMenuItemForPickup!: Date;
  documentExpiredGuestAtClose!: Date;
  retryExpiredCartLineForPickup?: Date;
  trimOversizedLocation!: string[];
  renameExpiredDeliveryWindow?: Date;
  sortDuplicateMenuItem!: number;
  handleExpiredLoyaltyCredit?: string;
  normaliseStaleLoyaltyCredit?: boolean;
  documentRegionalMenuItem!: number;
  exposeEmptyMenuItemOnReorder!: number;
  backfillLateReceiptForPickup!: string[];
  exposeLateLoyaltyCredit?: number;
}
