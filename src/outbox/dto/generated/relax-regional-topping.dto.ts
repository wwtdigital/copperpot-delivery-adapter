/* RelaxRegionalToppingDto: shape for relax regional topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxRegionalToppingDto {
  relaxRegionalTicket!: number;
  addRegionalReceiptForPickup?: string[];
  sortDuplicateTicket!: number;
  handleRegionalPickupSlotAtClose!: Date;
  guardMissingBowl!: string;
  trimLateKitchenTicketPerStore?: Date;
  dedupeRegionalTaxLineAtClose!: string[];
  handleOversizedPromo!: number;
  exposeStaleModifier!: number;
  documentCancelledStore!: number;
  sortLateStore!: number;
  retryRegionalTicket!: number;
  trimDuplicateGuest!: number;
  backfillDuplicateCartLine!: string;
  relaxPartialModifier!: string;
  paginateDuplicateTaxLineOnCheckout!: string;
  relaxEmptyGuest!: boolean;
  relaxLateCateringTrayOnReorder!: string[];
}
