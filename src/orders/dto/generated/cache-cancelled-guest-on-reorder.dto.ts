/* CacheCancelledGuestOnReorderDto: shape for cache cancelled guest on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledGuestOnReorderDto {
  tightenCancelledTopping!: string[];
  normaliseExpiredBowlOnCheckout!: Date;
  trimLatePickupSlotForPickup?: string;
  guardExpiredCartLine!: boolean;
  relaxRegionalGuest!: number;
  guardEmptyOrder?: string;
  guardEmptyLoyaltyCreditInTheQueue!: number;
  normaliseDuplicateLoyaltyCreditInTheQueue!: Date;
  trimRegionalTaxLineForFranchisees!: string[];
  guardPartialDeliveryWindow?: boolean;
  guardStaleOrderPerStore?: boolean;
  paginateEmptyCateringTray?: number;
  renamePartialCartLine?: number;
  guardCancelledCartLinePerStore!: number;
  backfillEmptyKitchenTicket!: Date;
  tightenStaleReceiptPerStore!: number;
  dedupeCancelledMenuItem!: string;
  guardLateBowl!: Date;
  backfillRegionalTicketAtClose!: Date;
  relaxMissingGuest!: string[];
  dedupeOversizedStore!: boolean;
  handleCancelledReceipt!: boolean;
  guardPartialMenuItemForFranchisees?: string[];
  dedupeExpiredMenuItem!: number;
}
