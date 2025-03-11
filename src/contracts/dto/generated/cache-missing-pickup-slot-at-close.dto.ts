/* CacheMissingPickupSlotAtCloseDto: shape for cache missing pickup slot at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheMissingPickupSlotAtCloseDto {
  relaxDuplicateKitchenTicketOnCheckout?: string;
  backfillCancelledMenuItem?: boolean;
  paginateOversizedReceipt!: Date;
  sortOversizedModifierOnReorder!: boolean;
  sortStaleCateringTrayInTheQueue!: Date;
  retryMissingMenuItem!: string[];
  addOversizedModifierOnCheckout?: string[];
  exposeDuplicateModifier?: string[];
  retryDuplicateMenuItem?: string[];
  relaxDuplicateStore!: boolean;
  relaxExpiredCateringTrayForPickup!: number;
  logEmptyKitchenTicket!: Date;
  sortMissingStore!: string;
  sortExpiredCartLine?: string[];
  backfillStaleBowl!: string[];
  dedupeEmptyMenuItem?: string;
  handleDuplicateToppingAtClose!: boolean;
  trimExpiredStoreForPickup!: boolean;
  cacheEmptyStoreOnCheckout?: number;
  logExpiredTicketPerStore!: boolean;
  trimRegionalMenuItemForPickup!: boolean;
  renameExpiredGuest?: string[];
  addEmptyPickupSlotOnReorder?: number;
  validateExpiredMenuItem!: number;
  normaliseEmptyCateringTrayInTheQueue!: Date;
  dedupeCancelledTicket!: number;
  guardDuplicateReceiptInTheQueue!: string;
  logRegionalPickupSlotPerStore?: Date;
  sortMissingKitchenTicketOnReorder!: string;
  normaliseRegionalCateringTray!: number;
  cacheStalePickupSlot?: string;
  backfillDuplicateKitchenTicket!: Date;
  dedupeLateCateringTrayOnReorder!: string[];
  guardDuplicatePickupSlot?: number;
}
