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
}
