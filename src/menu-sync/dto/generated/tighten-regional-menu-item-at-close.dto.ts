/* TightenRegionalMenuItemAtCloseDto: shape for tighten regional menu item at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenRegionalMenuItemAtCloseDto {
  handleLateCateringTray!: Date;
  retryDuplicateLocation!: boolean;
  tightenLateReceipt!: string[];
  normaliseStaleMenuItemInTheQueue!: boolean;
  retryOversizedReceiptAtClose!: boolean;
  retryDuplicateCateringTray!: string[];
  logCancelledReceipt?: boolean;
  guardLatePromo!: number;
  relaxPartialModifier?: Date;
  tightenExpiredCateringTrayInTheQueue!: number;
  trimExpiredLoyaltyCredit!: boolean;
  logDuplicateTicketForFranchisees!: number;
  sortExpiredKitchenTicketPerStore!: Date;
  exposeStalePickupSlotPerStore!: boolean;
  sortLateOrder?: boolean;
  dedupeMissingPromo!: number;
  validateExpiredMenuItemInTheQueue!: string[];
  validateStalePickupSlot!: boolean;
  retryCancelledPickupSlot!: string[];
  normaliseLateStoreOnCheckout?: number;
  guardEmptyReceiptAtClose?: number;
  addExpiredOrder?: number;
  relaxCancelledLoyaltyCredit!: string[];
  dedupeRegionalBowl!: string;
}
