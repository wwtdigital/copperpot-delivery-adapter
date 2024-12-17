/* RetryStaleCateringTrayDto: shape for retry stale catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleCateringTrayDto {
  exposeDuplicateReceiptForPickup?: string;
  trimStaleDeliveryWindow!: number;
  backfillDuplicateCartLine!: string;
  validateStaleTaxLine!: boolean;
  relaxDuplicateDeliveryWindowOnReorder!: boolean;
  renameDuplicateOrder?: string;
  addMissingTaxLine!: Date;
  logRegionalPromo!: boolean;
}
