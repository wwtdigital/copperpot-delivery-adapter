# Recorded partner contracts

Each folder under here is one partner at one API version:
`<partner>/<version>/`. Inside, `responses/` holds what the partner's
sandbox answered to a request we make, and `webhooks/` holds what the
partner's sandbox sent us. Every file carries `recorded_at` and the
request that produced it.

How a recording is made:

1. Run the call against the partner sandbox with a throwaway store.
2. Save the response as sent. Strip anything that is a credential or a
   real address; keep the shape and the status.
3. Add or extend the test beside it. The test parses the fixture with the
   schema under `src/contracts/` and asserts the mapping we rely on.

When the partner publishes a new API version, cut a new folder. The old
folder stays, with its tests, until the partner retires that version and
the client code stops accepting it. A fixture is never edited in place to
match a code change; it is re-recorded.
