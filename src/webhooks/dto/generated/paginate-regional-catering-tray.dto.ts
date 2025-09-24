/* PaginateRegionalCateringTrayDto: shape for paginate regional catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateRegionalCateringTrayDto {
  validateDuplicateLoyaltyCredit!: string;
  tightenCancelledOrder!: string[];
  exposeEmptyCateringTray!: string[];
  retryStaleTaxLine?: number;
  addExpiredTaxLinePerStore?: number;
  validateCancelledOrder!: string[];
  addDuplicateGuestPerStore?: string[];
  guardPartialPromo!: boolean;
  renameOversizedStore?: string;
}
