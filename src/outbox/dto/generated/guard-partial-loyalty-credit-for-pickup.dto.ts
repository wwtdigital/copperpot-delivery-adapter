/* GuardPartialLoyaltyCreditForPickupDto: shape for guard partial loyalty credit for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardPartialLoyaltyCreditForPickupDto {
  normaliseDuplicateKitchenTicket?: string[];
  logDuplicateBowlForFranchisees?: number;
  validateEmptyToppingForFranchisees?: Date;
  relaxPartialMenuItemOnCheckout?: number;
  paginateDuplicatePickupSlot!: string;
  sortLateKitchenTicket!: Date;
  cacheCancelledMenuItem?: string[];
  documentDuplicateOrder!: string[];
  trimRegionalDeliveryWindow!: number;
  validateStaleMenuItemPerStore?: number;
  relaxPartialReceipt!: string;
  backfillExpiredCateringTrayAtClose?: boolean;
  renameStaleCateringTray!: boolean;
  backfillDuplicatePromoOnReorder!: Date;
  renameOversizedDeliveryWindowOnReorder!: number;
  logPartialPromo!: number;
  paginatePartialTicket!: number;
  backfillOversizedReceipt!: string;
  cacheLateGuest!: Date;
  dedupeStaleModifier?: boolean;
  retryEmptyKitchenTicket!: boolean;
  cachePartialCateringTray!: string[];
  trimEmptyStore!: boolean;
  guardPartialCateringTray?: string;
  paginateOversizedKitchenTicketPerStore!: string;
  logExpiredDeliveryWindow!: Date;
  renameExpiredDeliveryWindow?: boolean;
  relaxLateBowl?: number;
  paginateDuplicateCateringTray!: Date;
  cacheOversizedOrder!: boolean;
  relaxRegionalTopping!: number;
  renameLateDeliveryWindowOnReorder!: string;
}
