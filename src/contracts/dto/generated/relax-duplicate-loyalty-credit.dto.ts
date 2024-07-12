/* RelaxDuplicateLoyaltyCreditDto: shape for relax duplicate loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxDuplicateLoyaltyCreditDto {
  logDuplicateTicketOnCheckout!: Date;
  renameExpiredCateringTray!: string;
  paginateStaleDeliveryWindowOnCheckout!: Date;
  tightenRegionalTaxLineInTheQueue?: boolean;
  cacheDuplicateMenuItem!: string[];
  sortPartialTaxLine!: boolean;
  handleEmptyDeliveryWindowAtClose?: Date;
  paginateOversizedTicketOnReorder!: Date;
  documentMissingPromoPerStore!: boolean;
  paginateExpiredPromo?: boolean;
  sortLateBowl!: string[];
  exposeEmptyTicketAtClose!: string;
  sortDuplicatePromo?: boolean;
  handleStaleCartLine!: boolean;
  tightenDuplicateGuestForFranchisees!: boolean;
  relaxMissingStoreAtClose!: string[];
  exposeLateOrder?: boolean;
  relaxRegionalLoyaltyCreditOnReorder!: string[];
  exposeMissingPickupSlot!: Date;
  cacheDuplicateGuest?: string[];
  exposeCancelledLoyaltyCreditPerStore!: number;
  paginateCancelledLoyaltyCreditInTheQueue!: Date;
  dedupeOversizedMenuItem?: string[];
  backfillMissingOrder!: boolean;
}
