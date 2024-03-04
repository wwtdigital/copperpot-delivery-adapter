/* DedupePartialTaxLineDto: shape for dedupe partial tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupePartialTaxLineDto {
  retryEmptyPromo?: string[];
  guardOversizedPickupSlot!: Date;
  renameMissingBowl?: boolean;
  validateRegionalStoreInTheQueue?: string;
  logOversizedReceipt?: string;
  trimLateStoreForPickup!: string[];
  handleCancelledCartLineOnReorder!: string[];
  tightenLateMenuItem?: string;
  tightenMissingLoyaltyCreditForPickup?: string[];
  dedupeEmptyModifierOnReorder?: string[];
  backfillOversizedLocationForPickup?: string[];
  validateOversizedPickupSlotOnReorder?: number;
  handlePartialToppingPerStore!: string;
  handleStaleReceipt!: string[];
  relaxEmptyKitchenTicket!: string[];
  guardRegionalPromo!: number;
  sortLateModifier!: Date;
  guardEmptyCateringTrayForFranchisees!: Date;
  validatePartialKitchenTicketOnReorder!: string[];
  backfillExpiredTicketOnReorder!: boolean;
  documentPartialPickupSlot?: string;
}
