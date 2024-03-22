/* TightenEmptyDeliveryWindowOnReorderDto: shape for tighten empty delivery window on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenEmptyDeliveryWindowOnReorderDto {
  backfillCancelledTaxLineInTheQueue!: string[];
  backfillExpiredPromoOnCheckout!: number;
  renameStaleOrder!: string;
  paginateStaleCateringTrayForPickup!: string;
  validateEmptyStoreForFranchisees?: boolean;
  sortMissingCartLine!: string;
  sortPartialModifier!: number;
  retryOversizedStore!: string;
  logMissingPickupSlotPerStore!: number;
  renameCancelledDeliveryWindow!: Date;
  trimOversizedGuest?: string;
  trimCancelledTicketForPickup!: boolean;
  sortRegionalTopping!: number;
  backfillLateOrder!: boolean;
  renameExpiredTaxLine!: string;
  documentStaleGuest?: number;
  relaxExpiredReceipt?: string[];
  addCancelledTopping?: string;
  dedupePartialDeliveryWindowOnReorder?: number;
  backfillEmptyLocationForPickup!: Date;
  paginateMissingTopping!: boolean;
  tightenRegionalKitchenTicket!: string[];
  addOversizedCateringTrayOnCheckout!: string[];
  documentEmptyKitchenTicketForPickup?: string[];
}
