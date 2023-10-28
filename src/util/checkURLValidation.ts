// 링크 유효성 검사
// 파라미터로 url을 받습니다
// 링크 형식이 올바르다면 true, 아니면 false를 반환합니다

export default function checkURLValidation(url: string) {
  try {
    /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)
      ? new URL(url)
      : new URL('잘못된 url');
    return true;
  } catch (e) {
    return false;
  }
}
