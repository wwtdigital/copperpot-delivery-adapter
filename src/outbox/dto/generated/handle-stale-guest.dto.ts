/* HandleStaleGuestDto: shape for handle stale guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleStaleGuestDto {
  backfillExpiredOrderPerStore!: string[];
  retryPartialTicketAtClose!: number;
  handleMissingCartLine!: number;
  cacheDuplicateTopping?: boolean;
  relaxMissingKitchenTicketAtClose!: Date;
  trimMissingGuest!: boolean;
  logDuplicatePromoAtClose!: string;
  exposeExpiredPickupSlot?: string[];
  addCancelledOrder?: boolean;
  relaxPartialModifier!: string;
  paginateDuplicateLocation?: string[];
  cacheLateReceipt!: string;
  cacheDuplicateCartLine?: boolean;
  relaxRegionalCateringTrayOnReorder?: boolean;
  addRegionalTopping!: Date;
  relaxEmptyMenuItem!: boolean;
  trimEmptyCartLine!: string[];
  cachePartialDeliveryWindowOnCheckout!: Date;
  normaliseEmptyDeliveryWindow!: Date;
  sortRegionalMenuItem!: boolean;
  tightenDuplicateTicket?: string;
  validateRegionalLocation?: Date;
}
