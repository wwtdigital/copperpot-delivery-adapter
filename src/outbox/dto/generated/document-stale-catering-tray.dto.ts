/* DocumentStaleCateringTrayDto: shape for document stale catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentStaleCateringTrayDto {
  tightenExpiredPromo?: boolean;
  addDuplicateKitchenTicket!: Date;
  cacheRegionalOrderPerStore!: boolean;
  trimMissingStore!: boolean;
  renameOversizedLoyaltyCredit!: Date;
  tightenDuplicatePickupSlot!: number;
  cacheExpiredKitchenTicket?: Date;
  tightenOversizedPickupSlot!: string[];
  documentPartialReceipt?: Date;
  sortOversizedOrder!: boolean;
  trimEmptyStore?: string[];
}
