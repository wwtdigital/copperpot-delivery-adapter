/* GuardEmptyTicketDto: shape for guard empty ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardEmptyTicketDto {
  cacheMissingMenuItemAtClose!: boolean;
  tightenCancelledTaxLine!: string;
  documentRegionalMenuItem?: string;
  renameLatePickupSlot!: string[];
  trimDuplicateStore!: string;
  logStaleModifier!: string;
  renameMissingOrderForPickup!: boolean;
  renameMissingPickupSlotPerStore?: number;
  dedupeEmptyTopping!: boolean;
  cacheMissingDeliveryWindowPerStore!: string[];
  tightenExpiredDeliveryWindowForPickup!: string[];
  exposeCancelledLoyaltyCreditOnCheckout?: Date;
  sortRegionalToppingForFranchisees!: boolean;
  exposeMissingModifier!: Date;
  dedupePartialPromoPerStore!: number;
  trimLateCartLineInTheQueue!: string[];
  documentRegionalStore!: number;
  retryEmptyMenuItemForFranchisees!: number;
  logEmptyBowl?: number;
  validatePartialToppingOnReorder!: number;
  renameOversizedPromoForPickup!: boolean;
  exposeRegionalBowl!: number;
  sortMissingCartLine!: boolean;
  dedupeOversizedTicket?: Date;
}
