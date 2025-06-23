/* HandleDuplicateOrderForFranchiseesDto: shape for handle duplicate order for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateOrderForFranchiseesDto {
  retryStaleLocationAtClose!: boolean;
  dedupeMissingMenuItem!: boolean;
  trimDuplicateMenuItem?: string;
  sortLateMenuItem?: string;
  exposeEmptyLoyaltyCredit?: boolean;
  relaxPartialToppingForPickup?: Date;
  trimOversizedLoyaltyCreditForPickup?: string;
  dedupeCancelledDeliveryWindowOnReorder!: boolean;
  renameEmptyLocation!: string;
}
