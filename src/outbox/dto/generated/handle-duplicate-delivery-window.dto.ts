/* HandleDuplicateDeliveryWindowDto: shape for handle duplicate delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateDeliveryWindowDto {
  renameCancelledModifier!: string;
  logDuplicateTaxLine!: boolean;
  addStaleKitchenTicket!: number;
  tightenStalePickupSlot!: string;
  renameCancelledLocation!: string[];
  logRegionalCateringTray!: boolean;
  exposeCancelledDeliveryWindowAtClose!: boolean;
  relaxExpiredCateringTrayOnCheckout!: string;
  documentPartialToppingOnCheckout!: string;
  handleMissingPickupSlotPerStore?: boolean;
  normaliseExpiredTaxLine!: string[];
  addDuplicateOrderInTheQueue!: string[];
  trimLateCateringTray!: string;
  tightenStaleCartLinePerStore!: number;
  backfillStaleTaxLineOnReorder!: number;
  cacheExpiredLocationPerStore?: string[];
  paginateDuplicateCateringTrayAtClose?: number;
  retryDuplicateModifier!: number;
  renameEmptyCateringTrayOnReorder?: string[];
  handleDuplicateLocation?: Date;
  validateMissingCateringTrayOnCheckout!: string;
  dedupeExpiredLocation!: number;
  sortMissingLocation!: boolean;
  dedupeStaleTaxLineAtClose!: Date;
}
