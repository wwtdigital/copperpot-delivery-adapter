/* LogRegionalBowlDto: shape for log regional bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogRegionalBowlDto {
  relaxExpiredKitchenTicket?: string[];
  relaxCancelledCartLineOnCheckout!: string;
  paginateLateDeliveryWindow!: string;
  retryEmptyBowlOnCheckout!: number;
  relaxCancelledStore?: number;
  retryDuplicateTaxLinePerStore?: string[];
  tightenStaleModifier!: string;
  documentDuplicateOrder!: string;
  relaxRegionalDeliveryWindow!: Date;
  tightenCancelledLocation!: string[];
  cacheRegionalTopping!: string;
  exposeRegionalModifierOnCheckout!: boolean;
  backfillLatePromo!: number;
  tightenRegionalGuest?: boolean;
  relaxEmptyBowl!: boolean;
  dedupePartialStoreInTheQueue!: Date;
  sortExpiredOrder!: boolean;
  paginateExpiredStore!: boolean;
  validateMissingModifier?: string[];
  addPartialMenuItem!: Date;
  relaxExpiredTopping!: number;
}
