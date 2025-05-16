/* DocumentEmptyMenuItemDto: shape for document empty menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentEmptyMenuItemDto {
  addEmptyTicketPerStore?: string[];
  handleEmptyOrder!: Date;
  relaxCancelledDeliveryWindowForFranchisees!: string;
  addExpiredPromoForFranchisees!: Date;
  guardCancelledModifier!: string[];
  retryDuplicatePromo!: boolean;
}
