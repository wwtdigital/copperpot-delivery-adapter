/* ValidateExpiredReceiptDto: shape for validate expired receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateExpiredReceiptDto {
  retryDuplicateModifier!: number;
  backfillCancelledTopping!: boolean;
  paginatePartialCateringTrayForPickup!: string[];
  documentOversizedMenuItemAtClose?: Date;
  dedupeRegionalMenuItemForFranchisees!: string[];
  handlePartialCateringTray!: boolean;
  normaliseRegionalCartLine!: boolean;
  relaxCancelledToppingPerStore!: number;
  handlePartialGuestPerStore!: boolean;
  guardStaleKitchenTicket!: boolean;
}
