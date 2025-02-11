/* DocumentLateOrderPerStoreDto: shape for document late order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLateOrderPerStoreDto {
  relaxStaleReceipt!: boolean;
  normaliseExpiredModifier?: number;
  addMissingGuest?: boolean;
  cacheDuplicateTaxLineAtClose!: Date;
  cacheEmptyModifier!: string[];
  documentDuplicatePickupSlot!: boolean;
  validateExpiredLoyaltyCredit!: string;
}
