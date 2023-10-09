import { styled } from 'styled-components';

export const Header = styled.header`
  position: relative;
  overflow: hidden;
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
    height: 100%;
    position: absolute;
    top: 0;
    left: -3px;
    border-top: 58px solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 0px solid transparent;
    border-right: 3px solid ${({ theme }) => theme.basicGray};
  }
`;
