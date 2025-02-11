/* HandleDuplicateBowlDto: shape for handle duplicate bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateBowlDto {
  handleLateDeliveryWindow?: string[];
  retryDuplicateTaxLine!: number;
  normaliseExpiredOrder!: number;
}
