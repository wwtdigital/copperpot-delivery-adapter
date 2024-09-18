/* RelaxMissingTaxLineDto: shape for relax missing tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxMissingTaxLineDto {
  logRegionalPromoInTheQueue?: string[];
  logMissingCateringTrayOnCheckout!: boolean;
  addExpiredTaxLinePerStore!: string;
  trimPartialPromo?: Date;
  paginateCancelledCateringTray?: number;
  exposeEmptyTicket?: boolean;
  exposeOversizedTaxLine!: string[];
  paginateMissingLoyaltyCredit!: number;
  logCancelledBowl!: boolean;
  exposeEmptyCateringTrayAtClose!: string[];
  tightenStaleReceipt!: number;
  exposeStaleKitchenTicket!: boolean;
  retryDuplicateDeliveryWindowOnCheckout?: string[];
  trimEmptyBowlOnCheckout!: boolean;
  retryCancelledPickupSlot!: string[];
  tightenOversizedOrder!: string[];
  normaliseStaleStore!: Date;
  guardEmptyGuestForFranchisees!: Date;
  relaxMissingCartLineForPickup!: string[];
  logPartialCartLine?: boolean;
  cachePartialCartLineForFranchisees!: string;
  guardEmptyPromo!: Date;
  trimExpiredPromoOnReorder!: number;
  cacheOversizedCateringTray!: string;
  sortOversizedLocationPerStore!: string;
  guardDuplicateDeliveryWindow!: string[];
  documentMissingCateringTray!: string[];
  sortLateOrderAtClose!: string;
  handleLateTopping!: string;
}
