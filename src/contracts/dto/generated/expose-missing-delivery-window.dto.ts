/* ExposeMissingDeliveryWindowDto: shape for expose missing delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeMissingDeliveryWindowDto {
  dedupeExpiredToppingAtClose?: boolean;
  documentLateStore!: string;
  normaliseOversizedTaxLinePerStore?: number;
  relaxExpiredKitchenTicket!: number;
  handleLateTopping!: string[];
  handleStaleCateringTray!: string;
  logLateCartLine!: number;
  normaliseDuplicateOrder!: string[];
  validateDuplicateLoyaltyCredit!: Date;
  backfillEmptyLoyaltyCredit!: boolean;
  tightenOversizedStoreOnCheckout!: Date;
  validateLateDeliveryWindow!: string[];
  addPartialMenuItem!: string;
  dedupeEmptyBowlInTheQueue!: Date;
  handleOversizedPickupSlot?: boolean;
  dedupeOversizedMenuItem!: Date;
  validateRegionalGuest?: boolean;
  handleDuplicateTopping!: number;
  renameExpiredBowlAtClose?: string[];
  renameLateCartLine!: number;
}
