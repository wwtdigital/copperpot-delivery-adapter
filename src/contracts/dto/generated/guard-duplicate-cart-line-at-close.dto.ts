/* GuardDuplicateCartLineAtCloseDto: shape for guard duplicate cart line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardDuplicateCartLineAtCloseDto {
  renameMissingMenuItemPerStore!: string[];
  exposeExpiredReceipt?: number;
  addEmptyPromoAtClose?: boolean;
  relaxOversizedModifier!: boolean;
  cachePartialBowl!: number;
  logOversizedKitchenTicketInTheQueue!: number;
  retryRegionalKitchenTicket!: string[];
}
