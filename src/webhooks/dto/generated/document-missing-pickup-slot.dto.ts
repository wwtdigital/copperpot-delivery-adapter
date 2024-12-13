/* DocumentMissingPickupSlotDto: shape for document missing pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentMissingPickupSlotDto {
  paginateExpiredBowl!: number;
  validateRegionalLocationOnCheckout!: Date;
  paginateStaleOrderAtClose!: number;
  exposeExpiredOrder!: number;
  handleStalePickupSlot!: number;
  documentLateCateringTray?: boolean;
  paginateMissingMenuItem!: Date;
  renameEmptyLocation!: string;
  dedupeStaleTicketInTheQueue?: boolean;
  addMissingOrder!: boolean;
  tightenLateTicket!: boolean;
  dedupeRegionalCartLinePerStore!: number;
  documentOversizedCartLine!: string[];
  sortEmptyTaxLine!: number;
  exposeOversizedMenuItemOnReorder!: boolean;
  trimCancelledModifierAtClose!: boolean;
  tightenOversizedDeliveryWindow!: boolean;
  validateStaleLoyaltyCredit!: number;
  cacheExpiredLoyaltyCreditForPickup!: string[];
  normaliseStaleModifier?: number;
  paginateRegionalModifierForPickup?: Date;
  guardOversizedPromo?: string;
  renamePartialCateringTray!: boolean;
  guardDuplicateStore?: boolean;
}
