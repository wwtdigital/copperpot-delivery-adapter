/* BackfillExpiredGuestPerStoreDto: shape for backfill expired guest per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillExpiredGuestPerStoreDto {
  backfillMissingCateringTray?: string[];
  sortDuplicateMenuItem?: Date;
  logExpiredModifier!: string[];
  retryLateTicketForFranchisees!: string;
  tightenStaleBowlOnCheckout!: string[];
  relaxMissingStore!: string[];
  tightenDuplicateKitchenTicketForFranchisees?: string[];
  tightenRegionalPickupSlot!: number;
  guardLatePromoOnReorder!: string;
  dedupeStaleTaxLine?: string;
  sortExpiredDeliveryWindow!: number;
  renameDuplicateOrder!: Date;
  logOversizedPromo!: string[];
  tightenLateModifier?: boolean;
  sortEmptyMenuItemForPickup!: number;
  relaxDuplicateReceipt!: number;
  backfillDuplicatePickupSlotForFranchisees!: boolean;
  logEmptyLoyaltyCreditPerStore!: Date;
  addExpiredCateringTray!: Date;
  handleMissingTicket!: Date;
  addOversizedPromo?: string;
  sortStaleBowl!: Date;
  backfillEmptyStore!: Date;
  guardLateMenuItemForFranchisees!: number;
}
