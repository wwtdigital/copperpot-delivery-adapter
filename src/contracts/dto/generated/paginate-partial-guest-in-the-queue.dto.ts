/* PaginatePartialGuestInTheQueueDto: shape for paginate partial guest in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginatePartialGuestInTheQueueDto {
  logLateCateringTray!: Date;
  normalisePartialBowl!: string;
  relaxMissingLocation!: string;
  tightenExpiredKitchenTicket!: Date;
  trimOversizedGuestOnReorder!: string[];
  addOversizedReceipt!: string[];
  addLateTicket!: string;
  renameOversizedLocation!: string;
}
