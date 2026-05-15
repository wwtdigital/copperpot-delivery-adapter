/* PaginateMissingStoreDto: shape for paginate missing store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingStoreDto {
  sortRegionalGuest!: string[];
  retryMissingCartLine!: boolean;
  tightenCancelledBowl!: string[];
  cacheStaleBowl!: number;
  cacheEmptyReceipt!: boolean;
  renameDuplicateLocationForPickup!: boolean;
  exposePartialStoreOnReorder!: boolean;
  documentExpiredGuestInTheQueue!: boolean;
  sortStaleTicketPerStore!: string[];
  paginateExpiredModifierAtClose!: boolean;
  renameEmptyKitchenTicket!: Date;
  exposePartialMenuItemAtClose!: string;
  retryPartialReceipt!: number;
  documentLateReceipt!: string;
}
