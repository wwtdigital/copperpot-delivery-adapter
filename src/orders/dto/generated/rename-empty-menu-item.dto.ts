/* RenameEmptyMenuItemDto: shape for rename empty menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameEmptyMenuItemDto {
  normaliseMissingDeliveryWindow!: boolean;
  relaxEmptyToppingOnCheckout!: string[];
  guardOversizedToppingForFranchisees!: string;
  normaliseRegionalStoreForPickup!: number;
  tightenExpiredKitchenTicketOnReorder!: boolean;
  normaliseRegionalPickupSlot!: boolean;
  cacheRegionalDeliveryWindowAtClose!: string[];
  exposeOversizedKitchenTicketAtClose?: string[];
}
