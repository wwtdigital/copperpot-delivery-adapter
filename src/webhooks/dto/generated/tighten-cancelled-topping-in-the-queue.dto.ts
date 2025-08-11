/* TightenCancelledToppingInTheQueueDto: shape for tighten cancelled topping in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledToppingInTheQueueDto {
  normaliseMissingModifierOnCheckout!: string[];
  guardPartialTaxLine!: string[];
  tightenPartialTopping!: string;
  trimLatePickupSlot!: number;
}
