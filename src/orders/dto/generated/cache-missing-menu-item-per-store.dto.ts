/* CacheMissingMenuItemPerStoreDto: shape for cache missing menu item per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheMissingMenuItemPerStoreDto {
  normaliseLateLocation!: number;
  renameMissingStoreForFranchisees!: Date;
  dedupeStaleStoreOnReorder?: boolean;
  retryCancelledModifier!: number;
  paginateRegionalCateringTray!: number;
  documentOversizedReceipt!: boolean;
  relaxMissingTaxLine!: string[];
  cacheRegionalBowl!: number;
  retryPartialLocationAtClose!: number;
  logExpiredModifierAtClose?: Date;
  logLateGuestAtClose!: number;
  renameRegionalKitchenTicket?: string;
  sortEmptyToppingInTheQueue!: string[];
  logCancelledPromo!: boolean;
  addStaleMenuItemForPickup!: string;
  backfillExpiredGuest?: string;
  guardMissingTaxLineForPickup!: Date;
  paginateCancelledPromo!: number;
  logCancelledCartLine!: string;
  tightenRegionalPickupSlotAtClose?: number;
  tightenRegionalLocationForFranchisees!: string[];
  exposeRegionalCateringTray!: string[];
  renameStaleTaxLine?: number;
  addPartialGuest!: string;
  backfillMissingTaxLine!: string;
  documentDuplicatePromoInTheQueue?: number;
}
