/* TightenMissingToppingDto: shape for tighten missing topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenMissingToppingDto {
  sortDuplicateTaxLineForPickup!: number;
  renameOversizedToppingInTheQueue!: number;
  handleCancelledDeliveryWindow!: Date;
  dedupeDuplicatePromo!: Date;
  retryDuplicateStore!: string;
  retryDuplicateModifier!: number;
  validateDuplicateModifier!: boolean;
  trimRegionalCateringTray!: string;
  tightenDuplicateTaxLine!: boolean;
  cacheOversizedOrder!: Date;
  logRegionalKitchenTicketOnCheckout?: string[];
  relaxEmptyLoyaltyCredit!: number;
  guardExpiredLocation!: string;
  logRegionalLocationInTheQueue!: number;
  tightenLateLoyaltyCreditOnReorder!: boolean;
  handleMissingTaxLineOnCheckout!: number;
  renameDuplicateOrderInTheQueue!: string[];
  relaxOversizedTaxLinePerStore!: string[];
  dedupeEmptyGuest!: Date;
  retryExpiredDeliveryWindow!: string[];
  dedupeCancelledToppingInTheQueue?: string[];
  tightenDuplicateOrder!: Date;
  logRegionalCartLine!: boolean;
  normaliseEmptyLoyaltyCreditPerStore!: string[];
}
