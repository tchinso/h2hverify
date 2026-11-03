const COOKIE = 'magic_cookie=nom_nom_nom; Domain=h2h.workers.dev; Path=/; Max-Age=34560000; Secure; SameSite=Lax';

export default {
  fetch() {
    return new Response('쿠키 설정을 요청했습니다.', {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'Set-Cookie': COOKIE,
      },
    });
  },
};
