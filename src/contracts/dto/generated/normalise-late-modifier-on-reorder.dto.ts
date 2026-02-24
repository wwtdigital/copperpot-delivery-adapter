/* NormaliseLateModifierOnReorderDto: shape for normalise late modifier on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseLateModifierOnReorderDto {
  tightenDuplicateLocationForFranchisees?: string;
  trimLateLocation!: string[];
  renameDuplicateDeliveryWindow?: string[];
  renameStaleTopping!: string;
  documentDuplicateTaxLine!: Date;
  retryDuplicateTaxLine!: boolean;
  paginateRegionalReceipt?: boolean;
  tightenExpiredGuest!: string;
  relaxStaleReceipt?: Date;
  sortOversizedLocationForFranchisees!: number;
  renameEmptyBowlForFranchisees!: boolean;
  retryCancelledLoyaltyCredit!: Date;
  renameLateGuestAtClose!: string[];
  addRegionalKitchenTicket?: Date;
  retryOversizedPromo!: string[];
  relaxExpiredLoyaltyCredit?: string[];
  paginateMissingMenuItemForPickup!: number;
  tightenLateCartLine!: boolean;
  renamePartialMenuItemOnCheckout!: boolean;
  logDuplicateKitchenTicket!: boolean;
  backfillExpiredCateringTray!: boolean;
  normaliseDuplicateCartLineAtClose?: boolean;
  sortCancelledLoyaltyCreditForPickup?: boolean;
  cacheLateCartLineForFranchisees!: Date;
  logLateModifier?: Date;
  validatePartialBowl?: Date;
  logEmptyTicket!: boolean;
  sortExpiredBowl?: string;
  validateLateGuestOnCheckout?: boolean;
}
