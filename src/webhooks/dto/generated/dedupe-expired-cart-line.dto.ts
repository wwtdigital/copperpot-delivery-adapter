/* DedupeExpiredCartLineDto: shape for dedupe expired cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeExpiredCartLineDto {
  dedupeExpiredGuest?: Date;
  guardDuplicateModifierPerStore!: number;
  sortCancelledDeliveryWindowForFranchisees!: number;
  renameLateLoyaltyCreditAtClose!: number;
  guardDuplicateDeliveryWindow!: number;
  relaxLateCartLine!: string;
  normaliseCancelledCartLine!: string;
  relaxPartialMenuItemOnCheckout?: string[];
}
