import { styled } from 'styled-components';

export const BlackSpace = styled.section`
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
`;
export const WhiteSpace = styled.section`
  padding: 0;
  min-width: 312px;
  max-width: 500px;
  min-height: 172px;
  background: ${({ theme }) => theme.basicBg};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  .content-wrapper {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
  .button-wrapper {
    display: flex;
    gap: 8px;
    padding: 12px;
    & :nth-child(n) {
      flex-grow: 1;
    }
  }
`;
