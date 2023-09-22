import * as S from './style';

export default function Welcome() {
  return (
    <div>
      <section>welcome 슬라이드 Section</section>
      <S.ButtonWrapper className="signs-wrapper">
        <S.SignInButton id="signIn" data-testid="sign-in-button" to="/sign-in">
          로그인하기
        </S.SignInButton>
        <S.SignUpButton id="signUp" data-testid="sign-up-button" to="/sign-up">
          회원가입
        </S.SignUpButton>
      </S.ButtonWrapper>
    </div>
  );
}
