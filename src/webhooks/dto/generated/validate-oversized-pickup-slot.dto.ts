/* ValidateOversizedPickupSlotDto: shape for validate oversized pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateOversizedPickupSlotDto {
  documentStaleStore!: boolean;
  addOversizedKitchenTicket!: string[];
  logStaleGuest!: Date;
  backfillOversizedTicket?: string;
  logMissingLoyaltyCredit!: string[];
  exposeRegionalMenuItem!: Date;
  retryStaleModifier!: boolean;
}
