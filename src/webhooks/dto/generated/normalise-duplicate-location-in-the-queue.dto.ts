/* NormaliseDuplicateLocationInTheQueueDto: shape for normalise duplicate location in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseDuplicateLocationInTheQueueDto {
  relaxLateCateringTray!: boolean;
  dedupeRegionalReceiptAtClose!: string;
  validateMissingPickupSlotPerStore!: number;
  relaxOversizedMenuItemPerStore!: number;
  dedupeMissingDeliveryWindowForPickup!: boolean;
  renameEmptyToppingOnReorder!: string;
}
