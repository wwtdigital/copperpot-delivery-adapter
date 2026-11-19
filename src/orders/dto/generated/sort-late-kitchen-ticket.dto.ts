/* SortLateKitchenTicketDto: shape for sort late kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateKitchenTicketDto {
  renameOversizedTicket!: Date;
  renameMissingOrderAtClose!: number;
  sortRegionalCateringTrayInTheQueue?: boolean;
  logExpiredLocation!: boolean;
  dedupeDuplicateReceiptInTheQueue?: string;
  trimStaleTicketAtClose!: string;
  normaliseOversizedBowlInTheQueue!: string[];
  normaliseStalePickupSlot!: number;
}
