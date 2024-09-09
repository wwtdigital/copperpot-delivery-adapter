/* RelaxExpiredBowlDto: shape for relax expired bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxExpiredBowlDto {
  sortMissingCartLine!: boolean;
  documentRegionalCartLine?: string[];
  exposeRegionalDeliveryWindowPerStore!: Date;
}
