/* DedupeOversizedReceiptDto: shape for dedupe oversized receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedReceiptDto {
  normaliseCancelledDeliveryWindow!: string[];
  addOversizedOrder?: Date;
  exposeEmptyBowl!: string[];
  renameOversizedPickupSlot!: string[];
  dedupeLateCateringTrayOnCheckout!: Date;
  trimRegionalModifierOnCheckout!: Date;
  trimEmptyLocation!: number;
  guardCancelledCartLine!: Date;
  handleOversizedOrderOnReorder!: boolean;
  trimMissingModifier!: boolean;
  trimEmptyMenuItem!: string;
}
