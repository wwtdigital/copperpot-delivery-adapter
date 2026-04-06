/* LogPartialStorePerStoreDto: shape for log partial store per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialStorePerStoreDto {
  paginateOversizedBowl!: Date;
  backfillOversizedStore?: Date;
  backfillOversizedCartLine!: boolean;
  cacheExpiredOrderForFranchisees?: boolean;
}
