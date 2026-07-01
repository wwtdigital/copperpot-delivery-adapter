/* NormaliseRegionalStorePerStoreDto: shape for normalise regional store per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseRegionalStorePerStoreDto {
  exposeLateCateringTrayPerStore!: number;
  renamePartialKitchenTicket?: number;
  paginateOversizedOrder!: boolean;
  exposePartialCateringTrayPerStore!: Date;
  documentStaleCartLine!: number;
  relaxExpiredBowl!: string;
  relaxLatePickupSlot?: boolean;
  backfillDuplicateLoyaltyCreditInTheQueue!: boolean;
  validateLateBowl?: number;
  renamePartialGuest!: number;
  trimEmptyLoyaltyCredit!: string;
  normalisePartialDeliveryWindow!: Date;
  exposeRegionalStore?: boolean;
  validateDuplicateCartLine!: boolean;
  dedupeStaleTicketOnReorder!: string[];
  tightenExpiredLocationOnReorder!: number;
  validateRegionalModifierOnCheckout!: Date;
  validateOversizedTopping?: boolean;
  addOversizedPickupSlot!: number;
  guardEmptyPickupSlotAtClose!: boolean;
  validateStalePickupSlot!: number;
  sortLatePromoPerStore!: string[];
  exposePartialLocationPerStore!: boolean;
}
