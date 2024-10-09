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
  dedupeMissingCateringTrayInTheQueue!: string[];
  validatePartialOrder!: Date;
  retryExpiredBowl!: Date;
  validateCancelledLoyaltyCredit?: number;
  renameExpiredDeliveryWindowPerStore!: string[];
  guardDuplicateLocation!: number;
  normalisePartialBowl!: boolean;
  normaliseCancelledReceiptOnReorder!: Date;
  exposeRegionalModifierOnReorder!: boolean;
  addMissingKitchenTicket!: string;
  retryCancelledCateringTray?: string[];
  relaxRegionalDeliveryWindowOnCheckout!: boolean;
  validateStaleMenuItem?: boolean;
  exposePartialModifier!: Date;
  trimExpiredGuestPerStore!: number;
  dedupeCancelledPickupSlotOnReorder!: boolean;
  backfillLateDeliveryWindowInTheQueue!: number;
  sortStaleCartLineOnReorder!: string;
  backfillRegionalLocationPerStore!: boolean;
  addRegionalOrder!: boolean;
  cacheStalePromoPerStore!: string[];
  normaliseOversizedStoreOnCheckout!: string;
  retryPartialOrderPerStore!: Date;
  addOversizedReceiptAtClose!: Date;
  validateMissingModifier?: Date;
  documentLateToppingAtClose?: number;
}
