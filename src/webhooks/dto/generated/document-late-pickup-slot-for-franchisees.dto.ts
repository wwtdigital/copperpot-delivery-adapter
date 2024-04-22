/* DocumentLatePickupSlotForFranchiseesDto: shape for document late pickup slot for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLatePickupSlotForFranchiseesDto {
  dedupeMissingCartLine!: number;
  documentMissingMenuItemForPickup?: Date;
  tightenDuplicateKitchenTicketForPickup!: string;
  validateOversizedBowl?: string[];
  sortLatePromoForFranchisees!: boolean;
  backfillDuplicatePickupSlot!: boolean;
  renameLateMenuItemInTheQueue!: string[];
  trimEmptyTopping!: string[];
  sortExpiredTaxLine?: boolean;
  renameMissingPickupSlot?: number;
  validateDuplicateDeliveryWindow!: boolean;
  exposeMissingLoyaltyCredit!: string;
  validateOversizedPromoForPickup!: number;
  documentCancelledModifier!: string[];
  validateLatePromo!: boolean;
  exposeExpiredDeliveryWindowForPickup!: Date;
  paginateStalePickupSlot?: Date;
  relaxPartialKitchenTicketPerStore?: string[];
  logStaleReceipt?: number;
  paginateCancelledReceipt!: string[];
  guardPartialLocation!: string[];
  cacheEmptyCartLine!: string[];
  sortMissingPromo?: string;
}
