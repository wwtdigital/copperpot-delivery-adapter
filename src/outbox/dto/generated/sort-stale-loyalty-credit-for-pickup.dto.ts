/* SortStaleLoyaltyCreditForPickupDto: shape for sort stale loyalty credit for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleLoyaltyCreditForPickupDto {
  dedupeRegionalDeliveryWindowOnCheckout!: boolean;
  renameMissingCartLineOnReorder?: number;
  normaliseCancelledKitchenTicketForPickup!: boolean;
  paginateExpiredPickupSlot!: string[];
  normaliseOversizedBowl!: Date;
  tightenPartialReceipt?: string[];
  cacheEmptyModifierForPickup!: Date;
  exposeRegionalTicketForFranchisees!: string;
  handleOversizedLocation?: string;
  logCancelledLoyaltyCreditOnReorder!: number;
  retryRegionalGuest!: number;
  tightenEmptyLoyaltyCreditOnCheckout!: Date;
  cacheDuplicateModifier!: boolean;
  validateCancelledToppingAtClose?: Date;
  paginateLateGuest?: string[];
  logRegionalCateringTrayAtClose!: string;
  validateDuplicateCartLineOnCheckout!: Date;
  tightenExpiredReceiptOnCheckout?: boolean;
  retryRegionalTopping?: boolean;
  normaliseDuplicateCateringTray!: string[];
  cacheExpiredDeliveryWindow!: boolean;
  cacheDuplicateBowlOnReorder!: string[];
  dedupeMissingModifier!: string[];
  relaxOversizedReceipt?: string;
  relaxRegionalCartLineInTheQueue?: string[];
  exposeStaleReceipt!: boolean;
}
