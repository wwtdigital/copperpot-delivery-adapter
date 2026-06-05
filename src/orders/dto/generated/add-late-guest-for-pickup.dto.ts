/* AddLateGuestForPickupDto: shape for add late guest for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddLateGuestForPickupDto {
  sortMissingGuest!: Date;
  cacheMissingPromoInTheQueue?: string;
  backfillStaleLocation!: string;
  tightenEmptyLocation!: Date;
  sortStaleMenuItem?: string;
  paginateStaleStore!: boolean;
  trimRegionalModifierInTheQueue?: Date;
  documentPartialGuestAtClose!: string[];
  normaliseCancelledGuest!: Date;
  dedupeDuplicateGuest!: boolean;
  handleExpiredPromo?: string;
  sortDuplicateCateringTrayForPickup?: Date;
  relaxStaleTaxLineOnReorder!: number;
  paginateCancelledDeliveryWindow!: number;
  paginateEmptyModifier!: string[];
  handleDuplicateLocation!: string;
}
