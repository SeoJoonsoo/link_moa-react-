import { styled } from 'styled-components';

export const HeaderHeight = '58px';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 9999;
  height: ${HeaderHeight};
  background-color: ${({ theme }) => theme.basicBg};
  transition: box-shadow 0.2s ease-in-out;
  &.scrolled {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  }
  h1 {
    font-size: 0;
    padding: 12px;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.basicGray};
  height: 100%;
  padding: 14px;
  &::before {
    content: '';
    display: block;
    width: 0px;
    height: 0;
    position: absolute;
    top: 0;
    left: -4px;
    border-top: 0px solid transparent;
    border-bottom: 60px solid ${({ theme }) => theme.basicGray};
    border-right: 10px solid ${({ theme }) => theme.basicGray};
    border-left: 4px solid transparent;
  }
`;
