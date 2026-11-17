/* ============================================================
   설정 파일 — index.html(입력)과 admin.html(관리자)이 함께 사용합니다.
   Supabase 프로젝트를 만든 뒤 아래 두 값만 바꾸면 됩니다.
   (Project Settings > API 에서 복사)

   ※ anon(publishable) 키만 넣으세요. 공개돼도 되는 키이고 보안은 DB 권한(RLS)이 담당합니다.
   ※ service_role / secret 키는 절대 넣지 마세요.
   ============================================================ */
window.NM_CONFIG = {
  SUPABASE_URL: 'https://kcavnuyxhbjqgzypcqya.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_FALjDjHkqdFrYy9PI_7p_g_UdVNH3Aq',
  UNIT: 'rehab'          // 입력 화면의 기본 부서 (병원 확대 시 ?u=부서코드 로 지정 가능)
};
