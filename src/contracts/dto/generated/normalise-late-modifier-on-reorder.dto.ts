/* NormaliseLateModifierOnReorderDto: shape for normalise late modifier on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseLateModifierOnReorderDto {
  tightenDuplicateLocationForFranchisees?: string;
  trimLateLocation!: string[];
  renameDuplicateDeliveryWindow?: string[];
  renameStaleTopping!: string;
  documentDuplicateTaxLine!: Date;
}
