/* GuardOversizedStoreForFranchiseesDto: shape for guard oversized store for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedStoreForFranchiseesDto {
  relaxPartialKitchenTicket!: string[];
  relaxOversizedOrderForPickup!: string;
  validateDuplicateMenuItemPerStore!: boolean;
  logPartialStore!: string;
  handleStaleStore!: Date;
  paginateEmptyTaxLine?: boolean;
  paginateRegionalKitchenTicketInTheQueue!: string[];
  paginateRegionalOrder!: number;
  trimRegionalTaxLineAtClose!: string;
}
