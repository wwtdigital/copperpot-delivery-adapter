/* BackfillExpiredModifierDto: shape for backfill expired modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillExpiredModifierDto {
  cacheMissingLoyaltyCreditForPickup?: string[];
  handleStaleGuest?: number;
  guardLateCartLine?: number;
  backfillStaleTicket!: number;
  cacheRegionalModifierPerStore!: string[];
  retryExpiredModifier!: string;
  tightenLatePromoForPickup?: Date;
  normaliseRegionalStore!: boolean;
  cachePartialCartLine!: string[];
  cacheOversizedDeliveryWindow?: boolean;
  trimPartialTopping!: string;
  trimExpiredTicketAtClose?: Date;
  exposeStaleLoyaltyCreditAtClose!: boolean;
  addMissingBowl?: Date;
  relaxStaleLocationForPickup?: boolean;
  cacheDuplicateCartLine!: string[];
  paginateMissingLocationOnReorder!: number;
  renameStalePromo?: Date;
}
