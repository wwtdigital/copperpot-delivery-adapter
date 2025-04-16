/* ExposeExpiredPickupSlotDto: shape for expose expired pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredPickupSlotDto {
  dedupeEmptyPickupSlot!: Date;
  documentStaleCateringTrayAtClose?: Date;
  renameOversizedReceipt!: boolean;
  trimLatePickupSlot!: number;
  handleExpiredGuestForFranchisees?: number;
  tightenPartialMenuItem?: string[];
  cacheDuplicateCartLine!: string[];
  documentPartialPickupSlot!: number;
  logRegionalTicket!: boolean;
  logMissingLoyaltyCredit!: string;
  paginateStaleOrderAtClose!: boolean;
  guardCancelledBowl!: boolean;
  validateDuplicateStoreInTheQueue!: number;
  renameDuplicateGuest!: string[];
  dedupeRegionalBowlOnCheckout?: string[];
}
