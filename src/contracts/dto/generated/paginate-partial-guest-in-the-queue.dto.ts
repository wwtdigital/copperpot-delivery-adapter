/* PaginatePartialGuestInTheQueueDto: shape for paginate partial guest in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginatePartialGuestInTheQueueDto {
  logLateCateringTray!: Date;
  normalisePartialBowl!: string;
  relaxMissingLocation!: string;
  tightenExpiredKitchenTicket!: Date;
  trimOversizedGuestOnReorder!: string[];
  addOversizedReceipt!: string[];
  addLateTicket!: string;
  renameOversizedLocation!: string;
  paginateRegionalCartLine!: Date;
  validateCancelledTaxLineOnCheckout!: string;
  exposeCancelledLoyaltyCredit!: string[];
  validateStaleTaxLine!: string;
  normaliseOversizedReceiptOnCheckout?: string;
  tightenExpiredModifier!: string;
  handleEmptyOrder!: string;
  relaxLateKitchenTicket?: boolean;
  addEmptyGuestOnReorder!: number;
  dedupeLateModifier?: number;
  handleStaleGuest!: boolean;
  backfillRegionalMenuItem!: string[];
  addCancelledKitchenTicket?: string;
  dedupeCancelledTaxLineOnReorder?: boolean;
  logOversizedTopping!: boolean;
  cachePartialModifier?: string[];
  exposeRegionalModifierForFranchisees?: string;
  documentMissingDeliveryWindowOnReorder!: number;
  dedupePartialLoyaltyCreditInTheQueue?: boolean;
  addDuplicatePickupSlotPerStore!: string;
  guardMissingCateringTrayForFranchisees?: Date;
  backfillStaleTopping?: boolean;
  logStaleDeliveryWindow!: string;
  guardLateKitchenTicket?: string[];
}
