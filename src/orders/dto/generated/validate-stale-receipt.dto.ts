/* ValidateStaleReceiptDto: shape for validate stale receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleReceiptDto {
  documentOversizedModifierPerStore!: string;
  cacheOversizedTopping?: number;
}
