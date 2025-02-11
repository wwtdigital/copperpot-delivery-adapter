/* HandleDuplicateBowlDto: shape for handle duplicate bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateBowlDto {
  handleLateDeliveryWindow?: string[];
  retryDuplicateTaxLine!: number;
  normaliseExpiredOrder!: number;
  relaxStaleTaxLinePerStore?: Date;
  dedupeMissingCartLine!: number;
  backfillExpiredPromo!: string;
  handleOversizedDeliveryWindow!: number;
  trimEmptyStore!: string[];
  trimExpiredTaxLine!: number;
  sortRegionalToppingForFranchisees?: number;
  exposeStaleDeliveryWindow!: string[];
  retryExpiredDeliveryWindowForFranchisees?: boolean;
  cacheCancelledModifier?: string;
  dedupeLateLoyaltyCreditForPickup!: string;
  trimExpiredKitchenTicket!: boolean;
  relaxPartialTopping!: number;
}
