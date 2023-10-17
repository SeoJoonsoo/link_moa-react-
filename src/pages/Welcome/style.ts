import { HeaderHeight } from '@/layouts/Header/style';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 48px 0;
  height: calc(100vh - ${HeaderHeight});
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
  height: 20vh;
  padding-top: 36px;
  padding-height: 36px;
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
      border-radius: 7px;
      background: #fff;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
      &#naver {
        background: #03c75a;
      }
      &#naver-with-text {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #03c75a;
        color: #fff;
        font-family: ${({ theme }) => theme.fontR};
        padding: 12px 16px;
        img {
          padding-right: 6px;
        }
        span {
          flex-grow: 1;
          flex-shrink: 1;
          display: inline-block;
          font-size: 20px;
          text-align: center;
          padding: 0 16px 0 28px;
          border-left: solid 1px #ffffff8f;
        }
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
