/* TightenRegionalTicketDto: shape for tighten regional ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenRegionalTicketDto {
  sortEmptyPickupSlot?: boolean;
  retryStaleMenuItem?: number;
  sortMissingModifier!: number;
  exposeOversizedMenuItem!: boolean;
  guardCancelledDeliveryWindow!: Date;
  renameOversizedOrder!: number;
  documentStaleOrderForPickup?: boolean;
  cacheOversizedStore?: string;
  addExpiredKitchenTicketAtClose!: boolean;
  guardCancelledGuest?: Date;
  retryStaleOrder!: string;
  sortStaleStore?: boolean;
  paginatePartialTaxLineInTheQueue!: string[];
  cacheLateOrder?: string[];
  validateOversizedKitchenTicket!: Date;
}
