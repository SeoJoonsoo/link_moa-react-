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
  min-width: 312px;
  min-height: 172px;
  background: ${({ theme }) => theme.basicBg};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
`;
