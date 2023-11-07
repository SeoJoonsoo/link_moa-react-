import { styled } from 'styled-components';

export const Tag = styled.button`
  padding: 6px 8px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.basicBg};
  &.unRead {
    background-color: ${({ theme }) => theme.point2Bg};
  }
`;
