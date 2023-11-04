// 링크 유효성 검사
// 파라미터로 url을 받습니다
// 링크 형식이 올바르다면 true, 아니면 false를 반환합니다

export default function checkURLValidation(url: string) {
  try {
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-\/]))?/g.test(url)
      ? new URL(url)
      : new URL('잘못된 url');
    return true;
  } catch (e) {
    return false;
  }
}
