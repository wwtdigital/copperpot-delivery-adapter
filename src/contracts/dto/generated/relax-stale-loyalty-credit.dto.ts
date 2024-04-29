/* RelaxStaleLoyaltyCreditDto: shape for relax stale loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxStaleLoyaltyCreditDto {
  backfillPartialStore!: boolean;
  trimDuplicatePickupSlotInTheQueue?: string;
  cacheOversizedLoyaltyCreditForFranchisees!: string;
  renameRegionalTaxLine!: string[];
}
