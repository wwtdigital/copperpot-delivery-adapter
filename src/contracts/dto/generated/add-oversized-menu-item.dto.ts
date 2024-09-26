/* AddOversizedMenuItemDto: shape for add oversized menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddOversizedMenuItemDto {
  addDuplicateReceipt!: boolean;
  handleEmptyToppingInTheQueue!: string;
  sortCancelledDeliveryWindow?: string;
  retryPartialPickupSlot?: Date;
  retryMissingCartLineOnCheckout!: boolean;
  validateCancelledModifierAtClose!: boolean;
  retryRegionalReceipt!: string[];
  guardMissingCateringTray?: string;
  exposeDuplicateModifier?: Date;
  cacheMissingLocation?: string[];
  addRegionalTaxLine?: string[];
  trimPartialTaxLine!: string;
  relaxEmptyToppingOnCheckout!: Date;
  documentDuplicatePickupSlot!: string[];
  renamePartialTicket!: number;
  addLateStoreOnReorder!: boolean;
  guardCancelledBowlForPickup!: string[];
}
