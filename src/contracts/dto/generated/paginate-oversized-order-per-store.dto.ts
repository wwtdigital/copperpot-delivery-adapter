/* PaginateOversizedOrderPerStoreDto: shape for paginate oversized order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateOversizedOrderPerStoreDto {
  documentRegionalMenuItemForFranchisees?: string[];
  exposeStaleGuestOnCheckout!: boolean;
  backfillDuplicatePickupSlot!: string;
  documentOversizedTaxLine?: boolean;
  tightenPartialReceipt!: number;
  logCancelledPromo!: Date;
  backfillMissingPromo!: boolean;
  trimPartialLocation!: string[];
  trimEmptyCateringTray!: Date;
  relaxPartialMenuItem?: Date;
  backfillMissingTopping!: string[];
  documentRegionalStore!: string;
  tightenMissingPromoInTheQueue!: string;
  exposeRegionalBowl!: boolean;
  tightenStaleTaxLine!: string[];
  exposeLateBowl?: string[];
  documentEmptyTaxLine!: string;
  retryMissingCartLineInTheQueue!: boolean;
  validateExpiredCartLinePerStore!: string;
  handleExpiredLocationForPickup!: string[];
  documentStaleTicket!: string[];
  validateCancelledTopping?: number;
  renameLatePromo!: number;
  tightenOversizedTaxLine!: string;
  relaxMissingCartLine?: string[];
  renameStaleTaxLine?: string[];
  exposePartialStore!: number;
  retryOversizedReceipt!: number;
  addOversizedKitchenTicketPerStore!: string;
  sortRegionalLoyaltyCredit!: string[];
  cacheRegionalMenuItem!: boolean;
  documentEmptyPromo!: boolean;
  logDuplicatePromoInTheQueue!: string[];
  paginateEmptyCateringTray!: string;
  cacheEmptyCateringTray!: string[];
}
