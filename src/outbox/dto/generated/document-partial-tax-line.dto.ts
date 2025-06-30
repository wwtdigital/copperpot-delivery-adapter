/* DocumentPartialTaxLineDto: shape for document partial tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentPartialTaxLineDto {
  cacheRegionalLoyaltyCreditOnCheckout!: number;
  normaliseStaleTicket!: string[];
  relaxOversizedBowl!: string[];
  guardPartialDeliveryWindowOnReorder?: Date;
  relaxLateLoyaltyCreditForFranchisees!: boolean;
  cacheOversizedModifier?: Date;
  handleStaleDeliveryWindow!: string[];
  dedupeLateTicket!: string[];
  trimLateOrderAtClose?: string;
  dedupeRegionalCartLine?: Date;
  dedupeMissingMenuItem!: string[];
  paginateStaleBowlInTheQueue!: number;
  normaliseDuplicateCateringTrayForPickup!: boolean;
  trimOversizedPickupSlotOnReorder!: Date;
  exposeOversizedOrderOnCheckout!: Date;
  cacheStaleGuestOnReorder?: Date;
  documentMissingStore!: Date;
  logLatePromo!: number;
  addOversizedPromo!: Date;
  normaliseLateOrder!: string[];
  relaxRegionalTopping!: Date;
  paginateStalePromo!: number;
  guardEmptyTicketOnCheckout!: Date;
  logStaleDeliveryWindow?: string;
}
