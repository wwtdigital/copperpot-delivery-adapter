/* TrimEmptyToppingDto: shape for trim empty topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimEmptyToppingDto {
  relaxEmptyMenuItemPerStore!: boolean;
  backfillExpiredMenuItem?: boolean;
  dedupeRegionalStoreForPickup!: string[];
  renameDuplicateDeliveryWindow!: boolean;
  relaxRegionalPickupSlotPerStore!: string;
  renameOversizedOrder!: boolean;
  addMissingCateringTray?: string;
  documentDuplicateGuest?: string;
  normaliseEmptyPickupSlot!: number;
  sortEmptyLocation!: boolean;
  dedupeLateMenuItemPerStore!: boolean;
  cacheLateLocation?: string[];
  exposeExpiredCateringTray?: number;
  tightenExpiredModifier!: number;
  handleCancelledStore?: Date;
  retryOversizedBowl!: string;
  retryEmptyTopping!: number;
  cacheEmptyCateringTray!: number;
  sortStaleCateringTrayOnReorder!: boolean;
  handleOversizedTopping!: string[];
  backfillRegionalStore!: number;
  sortOversizedToppingOnReorder!: number;
  logPartialTaxLineForFranchisees!: Date;
  renameLateStoreInTheQueue!: string[];
}
