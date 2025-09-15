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
  renameOversizedReceipt?: string;
  validateDuplicateLoyaltyCredit!: string;
  addPartialStore?: Date;
  logCancelledDeliveryWindowForFranchisees?: number;
  addMissingGuestOnReorder?: Date;
  guardCancelledBowl?: number;
  logMissingPickupSlotPerStore?: string;
  validateMissingTicket!: Date;
  relaxDuplicateGuest?: boolean;
  paginateStaleDeliveryWindowForPickup!: boolean;
  validatePartialOrder!: number;
  relaxExpiredToppingInTheQueue!: number;
  validateLatePickupSlotAtClose!: number;
  guardExpiredPromo?: string;
  guardDuplicateTicket!: string;
  sortEmptyDeliveryWindow?: Date;
  dedupePartialOrderAtClose!: string[];
  cacheLateModifierForFranchisees!: Date;
}
