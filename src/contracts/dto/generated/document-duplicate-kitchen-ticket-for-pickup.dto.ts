/* DocumentDuplicateKitchenTicketForPickupDto: shape for document duplicate kitchen ticket for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentDuplicateKitchenTicketForPickupDto {
  tightenCancelledGuest!: number;
  trimRegionalPromo!: string;
  logMissingCateringTray?: Date;
  logCancelledStore!: string;
  renameDuplicateStore!: string;
  handleLateMenuItem!: number;
  exposeDuplicateCartLineAtClose?: Date;
  handleOversizedLocation?: string;
  relaxCancelledPickupSlot?: string[];
  documentMissingKitchenTicket?: boolean;
  sortOversizedDeliveryWindowOnCheckout!: string[];
  documentExpiredLocation!: number;
  sortExpiredLocation!: string;
  normaliseDuplicateTaxLineInTheQueue?: number;
  exposeDuplicateGuestForFranchisees!: boolean;
  handleDuplicateLocationForPickup?: number;
  dedupeMissingModifier?: string;
  validateOversizedLocation!: Date;
  retryEmptyOrder!: string;
  backfillDuplicateModifierInTheQueue!: number;
  addRegionalGuest!: number;
  backfillLatePromoInTheQueue!: Date;
  addMissingDeliveryWindowOnReorder?: string;
  guardEmptyPickupSlotForFranchisees!: string[];
}
