import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const SignInButton = styled(Link)`
  background-color: ${({ theme }) => theme.white};
  padding: 12px;
  border-radius: 10px;
  font-size: 18px;
`;
export const SignUpButton = styled(Link)`
  color: ${({ theme }) => theme.textInfo};
  background-color: unset;
  border: none;
`;
