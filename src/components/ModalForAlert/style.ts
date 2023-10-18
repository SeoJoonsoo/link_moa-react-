import { styled } from 'styled-components';

export const ModalWrapper = styled.section<{ closeTime: number }>`
  position: relative;
  z-index: 9999;
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
export const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 36px;
  padding-bottom: 36px;
  width: 100%;
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
