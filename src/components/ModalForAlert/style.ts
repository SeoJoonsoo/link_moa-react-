import { styled } from 'styled-components';

export const BlackSpace = styled.section<{ closeTime: number }>`
  position: fixed;
  z-index: 999999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);

  animation-duration: ${(props) => props.closeTime * 0.5}ms;
  animation-delay: ${(props) => props.closeTime * 0.5}ms;
  animation-name: padeout;

  @keyframes padeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
export const WhiteSpace = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 36px;
  padding-bottom: 36px;
  min-width: 312px;
  min-height: 172px;
  background: ${({ theme }) => theme.basicBg};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  .icon {
    width: 30px;
    height: 30px;
  }
  .alert {
    line-height: 180%;
    font-size: 16px;
    .bold {
      font-family: ${({ theme }) => theme.fontB};
    }
  }
`;
