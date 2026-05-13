/* SortPartialTaxLineOnCheckoutDto: shape for sort partial tax line on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortPartialTaxLineOnCheckoutDto {
  retryOversizedToppingOnReorder?: string[];
  trimLateOrder!: number;
  normaliseExpiredToppingOnCheckout!: Date;
  logCancelledPickupSlot!: string[];
  guardExpiredStore!: string[];
  retryEmptyLoyaltyCreditOnCheckout!: boolean;
  guardMissingCateringTray!: string[];
  relaxCancelledTicketForPickup!: boolean;
}
