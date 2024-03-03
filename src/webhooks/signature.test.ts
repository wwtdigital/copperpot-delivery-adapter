import { describe, expect, it } from 'vitest';
import { sign, verify } from './signature';

const body = '{"event_id":"evt_1","type":"order.created"}';
const key = 'unit-test-signing-key';

describe('webhook signature', () => {
  it('accepts the hex digest and the sha256= form', () => {
    const digest = sign(body, key);
    expect(verify(body, key, digest)).toBe(true);
    expect(verify(body, key, `sha256=${digest}`)).toBe(true);
  });

  it('rejects a changed body, a wrong key, a missing header and an empty key', () => {
    const digest = sign(body, key);
    expect(verify(body + ' ', key, digest)).toBe(false);
    expect(verify(body, 'another-key', digest)).toBe(false);
    expect(verify(body, key, undefined)).toBe(false);
    expect(verify(body, '', digest)).toBe(false);
  });

  it('treats a header of the wrong length as false rather than throwing', () => {
    expect(verify(body, key, 'abc')).toBe(false);
  });
});
