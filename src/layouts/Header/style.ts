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
