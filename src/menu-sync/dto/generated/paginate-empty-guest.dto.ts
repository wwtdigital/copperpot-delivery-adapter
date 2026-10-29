/* PaginateEmptyGuestDto: shape for paginate empty guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateEmptyGuestDto {
  renameOversizedKitchenTicket!: string[];
  handleMissingKitchenTicket!: Date;
  exposeCancelledTicket!: Date;
  relaxPartialReceipt?: string[];
  dedupeDuplicateStore?: boolean;
  addMissingGuestPerStore!: number;
  dedupeRegionalLocation!: string[];
  handleLatePromoForFranchisees!: string[];
  exposeEmptyLoyaltyCredit!: Date;
  relaxDuplicateCateringTrayOnCheckout!: number;
  sortMissingTicket?: string;
}
