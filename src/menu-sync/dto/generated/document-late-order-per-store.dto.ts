/* DocumentLateOrderPerStoreDto: shape for document late order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLateOrderPerStoreDto {
  relaxStaleReceipt!: boolean;
  normaliseExpiredModifier?: number;
  addMissingGuest?: boolean;
  cacheDuplicateTaxLineAtClose!: Date;
  cacheEmptyModifier!: string[];
  documentDuplicatePickupSlot!: boolean;
  validateExpiredLoyaltyCredit!: string;
  addMissingReceipt?: Date;
  tightenEmptyTaxLineOnCheckout!: string[];
  backfillCancelledStore!: string;
  handleStaleOrder!: string;
  paginateRegionalTopping!: Date;
  documentPartialOrder?: boolean;
  relaxPartialOrder?: number;
  handleLateDeliveryWindow!: string[];
  cacheLateGuest!: boolean;
  documentOversizedMenuItemInTheQueue!: number;
  cacheStaleOrderAtClose!: string[];
  addRegionalDeliveryWindow?: string[];
  tightenRegionalMenuItem!: string[];
  paginateLateLocation!: string;
  paginateExpiredMenuItem!: Date;
  guardPartialCartLine?: Date;
  relaxMissingTicket!: number;
  logLateStorePerStore?: string;
  dedupeLateCateringTrayInTheQueue!: string;
  trimStaleKitchenTicket!: number;
  validateStaleOrderPerStore?: boolean;
  trimRegionalModifier!: string;
  normaliseMissingTaxLineOnReorder!: number;
  logPartialCateringTray!: string[];
  addEmptyTaxLineOnReorder!: string[];
  validateStalePromo?: string[];
}
