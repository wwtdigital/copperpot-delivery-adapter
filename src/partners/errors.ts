export class PartnerError extends Error {
  constructor(
    readonly partner: string,
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(`${partner} ${status} ${code}: ${message}`);
  }

  /** The outbox reads this: a 4xx other than 408, 425 and 429 will not get better on retry. */
  get retryable(): boolean {
    return isRetryableStatus(this.status);
  }
}

export function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 425 || status === 429 || status >= 500;
}

export interface FetchLike {
  (
    url: string,
    init: { method: string; headers: Record<string, string>; body?: string },
  ): Promise<{
    status: number;
    json(): Promise<unknown>;
  }>;
}
