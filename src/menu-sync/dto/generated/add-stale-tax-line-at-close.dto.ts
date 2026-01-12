/* AddStaleTaxLineAtCloseDto: shape for add stale tax line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddStaleTaxLineAtCloseDto {
  sortEmptyBowl?: boolean;
  backfillExpiredLocation?: number;
  logRegionalPromo!: boolean;
  logMissingStore?: string;
  relaxExpiredPromo?: boolean;
  paginateMissingKitchenTicketInTheQueue?: string[];
  logOversizedTaxLine!: boolean;
  logPartialCartLineOnCheckout!: boolean;
  logCancelledModifierInTheQueue!: Date;
  documentOversizedPickupSlot?: Date;
  guardLateOrder?: number;
  documentOversizedKitchenTicket!: boolean;
  paginateCancelledModifierOnCheckout!: Date;
  backfillEmptyPickupSlot?: string[];
  relaxExpiredBowl?: Date;
}
