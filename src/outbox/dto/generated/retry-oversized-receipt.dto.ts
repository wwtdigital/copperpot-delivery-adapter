/* RetryOversizedReceiptDto: shape for retry oversized receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedReceiptDto {
  guardOversizedDeliveryWindowInTheQueue?: Date;
  cacheOversizedDeliveryWindow!: string;
  addOversizedPickupSlotOnCheckout!: boolean;
  renameRegionalPickupSlot!: number;
  guardPartialStore!: Date;
  dedupeLateTaxLineAtClose?: number;
  dedupeRegionalOrder!: number;
  validateOversizedLoyaltyCredit!: string;
  cacheOversizedStoreInTheQueue?: string;
}
