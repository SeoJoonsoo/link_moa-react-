import { styled } from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.pointFont};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.point};
  border-radius: 7px;
  &.cancel {
    background-color: ${({ theme }) => theme.basicGray};
  }
`;
