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
  addLateReceipt!: boolean;
  exposeDuplicateStore!: number;
  addExpiredStore!: number;
  logMissingTopping?: Date;
  handleCancelledPickupSlot!: Date;
  tightenMissingLocation!: string[];
  normaliseDuplicateToppingPerStore!: number;
  cacheCancelledPickupSlotForPickup?: boolean;
  renameOversizedGuest!: Date;
  retryLateModifier?: string;
  renamePartialPickupSlot?: string;
  renameDuplicateStore?: number;
  tightenEmptyCartLine!: string;
  paginatePartialBowl!: string[];
  relaxEmptyBowlAtClose?: string[];
  normaliseOversizedDeliveryWindow?: Date;
  dedupePartialLocation!: string[];
  paginateCancelledCartLine!: string;
  sortLatePickupSlot?: string;
  paginateOversizedModifier?: number;
  guardOversizedPromo!: string[];
  tightenRegionalKitchenTicket!: number;
  cacheDuplicateTicket!: number;
  addStaleBowl!: Date;
  addCancelledStore!: string;
  validateDuplicateReceiptAtClose!: string;
}
