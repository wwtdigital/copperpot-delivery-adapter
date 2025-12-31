/* DedupeCancelledMenuItemForFranchiseesDto: shape for dedupe cancelled menu item for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeCancelledMenuItemForFranchiseesDto {
  exposeDuplicateOrder?: string;
  renameCancelledPromo?: Date;
  exposeDuplicateDeliveryWindow!: boolean;
  normaliseCancelledCateringTray!: string;
  documentRegionalReceipt!: boolean;
  guardPartialDeliveryWindow!: string;
}
