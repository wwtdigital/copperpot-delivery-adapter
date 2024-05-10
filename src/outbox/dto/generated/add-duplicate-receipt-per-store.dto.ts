/* AddDuplicateReceiptPerStoreDto: shape for add duplicate receipt per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddDuplicateReceiptPerStoreDto {
  tightenRegionalKitchenTicket!: string[];
  addEmptyModifier?: boolean;
  paginateRegionalOrder!: string;
  guardMissingPromo!: string;
  backfillOversizedPromoForFranchisees?: boolean;
  renameCancelledTaxLine!: string[];
  addLateBowl!: string;
  backfillMissingBowl!: number;
  paginateDuplicatePromo!: string;
  guardEmptyTicketOnCheckout?: Date;
  retryStaleMenuItem!: number;
  trimLatePickupSlot!: string;
  cachePartialMenuItemPerStore!: number;
  sortMissingModifier!: boolean;
  addDuplicateGuest?: number;
  addOversizedDeliveryWindow!: Date;
  trimExpiredLocation!: boolean;
  relaxPartialCartLine!: string[];
  backfillOversizedKitchenTicketAtClose!: number;
  sortEmptyCateringTray?: string[];
  documentEmptyStore!: string;
  retryMissingStore!: string[];
  retryCancelledLoyaltyCredit?: string[];
  guardEmptyLoyaltyCredit!: number;
  retryOversizedPickupSlotPerStore!: string;
  exposeStaleCateringTrayForFranchisees!: string[];
  trimMissingLoyaltyCreditOnReorder!: Date;
  relaxRegionalStore!: string;
}
