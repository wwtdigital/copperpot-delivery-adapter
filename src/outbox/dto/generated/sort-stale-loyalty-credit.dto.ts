/* SortStaleLoyaltyCreditDto: shape for sort stale loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleLoyaltyCreditDto {
  validateLateModifier!: string;
  dedupeRegionalKitchenTicket?: string;
  retryStaleLocation!: boolean;
  renameRegionalPromoOnCheckout!: number;
  trimCancelledPromoForPickup!: string[];
  trimExpiredModifier?: string[];
  documentExpiredMenuItemPerStore!: boolean;
  addStaleOrder?: number;
  documentRegionalBowl!: number;
  handleMissingLoyaltyCredit!: Date;
  normaliseLateOrderForPickup!: boolean;
  handleExpiredPromo!: boolean;
  guardLateModifier!: boolean;
  sortRegionalCartLine!: string;
  sortEmptyOrder!: string;
  exposeMissingModifier!: string;
  tightenStaleGuest?: number;
  tightenPartialMenuItemOnCheckout!: string;
  renameMissingStoreOnReorder!: number;
  addMissingCateringTrayInTheQueue!: Date;
  trimOversizedGuest!: string[];
  handleExpiredTaxLine?: number;
  normaliseStaleModifier?: string[];
  normaliseDuplicateCateringTray!: number;
  documentCancelledReceiptInTheQueue!: string;
  logExpiredOrder?: boolean;
  exposeLateCartLine?: boolean;
  renameOversizedOrder!: boolean;
}
