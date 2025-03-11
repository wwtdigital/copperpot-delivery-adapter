/* PaginateExpiredCateringTrayAtCloseDto: shape for paginate expired catering tray at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateExpiredCateringTrayAtCloseDto {
  addEmptyMenuItem!: string;
  documentOversizedBowl!: Date;
  trimCancelledCateringTrayForPickup!: boolean;
  tightenExpiredTaxLine!: number;
  paginateLateTaxLine?: string[];
  trimEmptyLoyaltyCredit!: Date;
  sortCancelledMenuItemOnCheckout!: string[];
  logCancelledOrder!: string;
  handleDuplicateLoyaltyCredit?: string[];
  sortStaleDeliveryWindow!: string;
  trimRegionalCartLineForPickup?: number;
  sortRegionalStore?: string;
  relaxStaleCateringTrayOnCheckout?: Date;
  paginateCancelledMenuItem?: string;
  documentEmptyTaxLineInTheQueue?: number;
  sortExpiredTaxLineOnReorder!: string;
  exposeEmptyTopping!: Date;
  logStaleCateringTray?: string;
  logExpiredMenuItemOnCheckout!: Date;
  normaliseDuplicateToppingInTheQueue?: number;
  tightenPartialStore!: string[];
  addRegionalLocation!: Date;
  cacheDuplicatePickupSlotAtClose?: boolean;
  guardExpiredBowl!: boolean;
}
