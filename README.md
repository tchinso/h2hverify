# h2hverify

Cloudflare Workers에서 `https://verify.h2h.workers.dev`에 접속할 때마다 `magic_cookie=nom_nom_nom`을 설정합니다. 쿠키는 `h2h.workers.dev`와 그 하위 도메인에서 사용할 수 있으며, 유효기간은 방문할 때마다 400일로 갱신됩니다. 실제 보관 기간은 브라우저 정책에 따라 짧아질 수 있습니다.

Cloudflare Dashboard에서 이 저장소를 Workers 프로젝트에 연결하고 Worker 이름을 `verify`로 지정합니다. `h2h.workers.dev` 주소를 사용하려면 Cloudflare 계정의 Workers 서브도메인이 `h2h`여야 합니다. 빌드 명령은 필요하지 않으며 진입점은 `wrangler.jsonc`에 지정되어 있습니다.

로컬 테스트: `node --test`
