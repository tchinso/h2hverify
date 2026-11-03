import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.mjs';

test('sets the shared cookie on a first visit and renews it on later visits', async () => {
  for (const cookie of ['', 'magic_cookie=nom_nom_nom', 'magic_cookie=old_value']) {
    const response = await worker.fetch(new Request('https://verify.h2h.workers.dev/', {
      headers: cookie ? { Cookie: cookie } : {},
    }));

    assert.equal(response.status, 200);
    assert.equal(
      response.headers.get('Set-Cookie'),
      'magic_cookie=nom_nom_nom; Domain=h2h.workers.dev; Path=/; Max-Age=34560000; Secure; SameSite=Lax',
    );
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
  }
});
