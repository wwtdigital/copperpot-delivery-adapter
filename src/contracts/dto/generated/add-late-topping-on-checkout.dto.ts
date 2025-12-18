/* AddLateToppingOnCheckoutDto: shape for add late topping on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddLateToppingOnCheckoutDto {
  validateRegionalGuest!: string[];
  guardPartialPickupSlot!: number;
  addLateDeliveryWindow!: Date;
  renameDuplicateCartLine!: Date;
  backfillCancelledPickupSlot!: Date;
  backfillPartialToppingForPickup!: number;
  normaliseCancelledPickupSlot?: string;
  backfillStaleStore!: string;
  normaliseCancelledOrder!: Date;
  paginateMissingModifierPerStore!: boolean;
  retryLateReceipt!: boolean;
  logPartialCateringTrayInTheQueue!: boolean;
  validateRegionalTopping!: number;
  backfillOversizedStoreForFranchisees!: boolean;
  sortExpiredGuestForFranchisees?: string;
  tightenCancelledGuestForPickup!: boolean;
  paginateCancelledTaxLineInTheQueue!: number;
  relaxPartialLocation!: number;
  backfillOversizedDeliveryWindow!: string;
  tightenOversizedBowl?: Date;
  guardExpiredStore!: string;
  exposeCancelledTaxLineForFranchisees?: number;
  paginateLateReceipt!: string[];
  validateDuplicateCartLineForPickup?: Date;
}
