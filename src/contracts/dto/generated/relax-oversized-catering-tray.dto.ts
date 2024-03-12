/* RelaxOversizedCateringTrayDto: shape for relax oversized catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxOversizedCateringTrayDto {
  validateOversizedLocationForPickup!: Date;
  guardExpiredMenuItem!: string;
  validateLateLocation!: number;
  retryLateOrder!: boolean;
  validateOversizedCartLineForFranchisees!: string;
  documentRegionalCartLine?: number;
  paginateMissingStore!: string;
}
