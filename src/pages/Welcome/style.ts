import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 48px 0;
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideSection = styled.section`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .slide-wrapper {
    height: 300px;
    max-width: 400px;
    width: 100%;
    background-color: #fff; // TODO : 임시로 사이즈 확인을 위함
  }
`;
export const LoginSection = styled.section`
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  padding: 36px 0;
  .description {
    color: ${({ theme }) => theme.textInfo};
    padding-bottom: 16px;
  }
  .easy-login {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    &__button {
      font-size: 0;
      padding: 8px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.08);
      &#naver {
        background: #34a853;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
