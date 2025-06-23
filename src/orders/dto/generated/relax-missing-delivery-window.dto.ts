/* RelaxMissingDeliveryWindowDto: shape for relax missing delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxMissingDeliveryWindowDto {
  relaxStaleKitchenTicketOnCheckout!: string[];
  handleRegionalKitchenTicket?: number;
  validateEmptyOrder!: string;
  sortEmptyLoyaltyCredit!: Date;
  retryDuplicateKitchenTicket!: string;
  sortCancelledPickupSlotInTheQueue?: number;
  documentPartialOrderAtClose?: number;
  backfillDuplicateCartLine!: Date;
  logPartialLocation?: string;
  handleCancelledTaxLine!: Date;
  renameCancelledOrder?: string[];
  dedupePartialStorePerStore?: boolean;
  validateExpiredPickupSlotPerStore?: number;
  sortStaleOrder!: Date;
  logEmptyStoreAtClose?: string[];
  relaxDuplicateBowlPerStore?: string[];
  tightenRegionalTaxLinePerStore!: number;
  backfillDuplicateLoyaltyCredit?: string[];
  guardCancelledReceiptForPickup?: Date;
  backfillPartialLocationOnReorder!: Date;
  sortDuplicateOrderOnCheckout?: string;
  dedupeExpiredLocation!: string[];
  dedupeCancelledLocation?: string[];
}
