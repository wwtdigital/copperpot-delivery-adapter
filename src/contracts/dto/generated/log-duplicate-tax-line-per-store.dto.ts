/* LogDuplicateTaxLinePerStoreDto: shape for log duplicate tax line per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogDuplicateTaxLinePerStoreDto {
  guardStaleGuestAtClose!: string;
  addOversizedPickupSlot!: string;
  renamePartialToppingAtClose!: string[];
  relaxPartialKitchenTicket?: string;
  handleCancelledCartLineForPickup!: string[];
  relaxPartialTicket!: string;
  renameEmptyReceipt!: number;
  guardOversizedBowl?: string;
  addRegionalGuest!: string;
  handleDuplicateCateringTray!: boolean;
  handleMissingCateringTray?: string;
}
