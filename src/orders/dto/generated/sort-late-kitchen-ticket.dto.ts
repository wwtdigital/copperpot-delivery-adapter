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
  trimPartialTicketAtClose!: Date;
  renameDuplicateKitchenTicketOnCheckout!: Date;
  paginateOversizedBowlPerStore?: number;
  paginateDuplicateLoyaltyCredit!: string[];
  validateOversizedReceiptOnReorder!: boolean;
  relaxStaleModifierForPickup!: string;
  relaxEmptyToppingPerStore!: Date;
  dedupeLateModifierAtClose?: number;
  dedupeLateReceipt?: string;
  renameExpiredReceipt?: number;
  normaliseOversizedKitchenTicketOnReorder?: number;
  paginateCancelledGuest?: number;
  retryMissingPromoInTheQueue?: boolean;
  documentEmptyOrderPerStore!: boolean;
  sortPartialKitchenTicketOnCheckout!: number;
  renameDuplicatePromoAtClose!: number;
  logEmptyCateringTrayAtClose!: boolean;
  logStaleGuest!: boolean;
  backfillMissingCateringTray!: string[];
  retryEmptyKitchenTicketForFranchisees!: string;
  guardLatePickupSlot!: string;
  trimRegionalKitchenTicket?: string[];
  relaxCancelledDeliveryWindow!: number;
  validateDuplicateCateringTray!: string;
}
