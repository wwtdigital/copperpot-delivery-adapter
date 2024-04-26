/* LogOversizedStoreDto: shape for log oversized store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogOversizedStoreDto {
  trimMissingCateringTrayPerStore!: Date;
  renamePartialModifierInTheQueue!: Date;
  trimPartialPromo?: string;
  documentOversizedGuestOnReorder!: number;
  trimOversizedCartLine!: string;
  tightenDuplicateCateringTray?: string;
  handleExpiredCateringTrayForPickup!: string[];
  trimLateLocationInTheQueue!: boolean;
  renameEmptyOrder?: string;
  cacheOversizedCartLine?: string;
  dedupeOversizedTaxLine?: number;
  tightenCancelledBowl!: number;
  cacheOversizedCateringTrayPerStore?: Date;
  renameCancelledStorePerStore!: Date;
  paginateEmptyOrderInTheQueue!: Date;
  documentOversizedBowl!: boolean;
  relaxLateModifierOnCheckout?: Date;
  backfillExpiredReceiptOnCheckout!: string;
  validateEmptyPickupSlotAtClose!: Date;
  dedupeCancelledPickupSlotPerStore!: number;
}
