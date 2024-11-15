/* TrimExpiredTaxLineDto: shape for trim expired tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimExpiredTaxLineDto {
  backfillStaleLocation!: number;
  validateLateLocation!: Date;
  normaliseOversizedModifier!: Date;
  exposeOversizedKitchenTicket!: string;
  retryLateKitchenTicket!: string;
  paginateMissingPromo!: string;
  logDuplicateLoyaltyCreditOnReorder!: Date;
  addRegionalOrderPerStore!: string[];
  sortLateMenuItem!: string[];
  renameExpiredTicket?: number;
  cacheDuplicateLoyaltyCreditOnCheckout!: string[];
  paginateDuplicateReceipt?: Date;
  logLateOrder!: string[];
  validateCancelledDeliveryWindow!: string;
}
