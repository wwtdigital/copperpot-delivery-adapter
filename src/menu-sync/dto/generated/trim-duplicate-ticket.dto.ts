/* TrimDuplicateTicketDto: shape for trim duplicate ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimDuplicateTicketDto {
  logDuplicatePromoForFranchisees!: number;
  guardDuplicateDeliveryWindow?: string[];
  logDuplicateMenuItem?: boolean;
  backfillRegionalOrder?: number;
  dedupeLateTaxLine?: string[];
  logExpiredTopping?: string;
  relaxOversizedTopping!: Date;
}
