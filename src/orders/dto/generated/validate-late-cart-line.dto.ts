/* ValidateLateCartLineDto: shape for validate late cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateLateCartLineDto {
  normaliseMissingTopping!: string;
  sortMissingTaxLine!: number;
  documentStaleDeliveryWindow!: boolean;
  sortPartialLocation!: string[];
  backfillLateReceiptInTheQueue!: number;
  paginateMissingTopping!: boolean;
  addDuplicatePromoInTheQueue!: string;
  paginateDuplicateStore!: string;
  normaliseRegionalOrder!: Date;
  relaxStaleTaxLineForPickup!: boolean;
  retryDuplicatePromoForPickup?: boolean;
  documentLateDeliveryWindowForPickup!: string;
  validateDuplicateReceipt!: string[];
  handleStaleCateringTray!: string;
  dedupeEmptyOrderOnReorder!: Date;
  cacheExpiredStore!: Date;
  exposeStaleStorePerStore!: Date;
}
