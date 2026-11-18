/* BackfillExpiredModifierForFranchiseesDto: shape for backfill expired modifier for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillExpiredModifierForFranchiseesDto {
  validateExpiredMenuItem!: boolean;
  dedupeMissingStoreOnReorder?: number;
  renameExpiredCartLine?: string[];
  exposeCancelledLoyaltyCredit!: string[];
  retryExpiredLocationOnReorder?: string[];
  tightenExpiredCartLineOnCheckout?: Date;
  logExpiredTicket?: Date;
  relaxExpiredCartLine!: string;
  dedupeDuplicateDeliveryWindow!: boolean;
  documentCancelledLoyaltyCredit!: string;
  trimStaleTicketInTheQueue!: Date;
  paginateRegionalDeliveryWindow!: string;
  documentPartialTicket!: string[];
  backfillPartialGuest!: string;
  handleLatePromo!: string[];
  sortOversizedTicketOnCheckout?: Date;
  backfillLateGuest?: boolean;
  backfillCancelledTaxLine!: number;
  backfillRegionalPickupSlot!: string;
  normaliseLateTopping?: string;
  validatePartialKitchenTicket!: boolean;
  renameStaleKitchenTicketInTheQueue!: string[];
  cachePartialCartLinePerStore!: string[];
  documentLateKitchenTicket!: number;
}
