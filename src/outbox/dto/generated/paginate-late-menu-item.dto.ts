/* PaginateLateMenuItemDto: shape for paginate late menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateLateMenuItemDto {
  paginateDuplicateToppingPerStore!: string[];
  tightenExpiredPickupSlot?: number;
  guardExpiredTaxLine!: string[];
  addRegionalGuestInTheQueue!: string[];
  tightenMissingCateringTrayOnCheckout?: number;
  addStaleMenuItem!: boolean;
  relaxPartialPromo?: Date;
  retryDuplicateReceipt!: number;
  relaxExpiredCateringTray!: string;
  retryStaleTicket!: string[];
  retryEmptyToppingOnReorder!: number;
  retryEmptyOrder?: number;
  cacheDuplicatePickupSlot?: string[];
}
