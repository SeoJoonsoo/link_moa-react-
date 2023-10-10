import { styled } from 'styled-components';
import { HeaderHeight } from '../Header/style';

export const Main = styled.main`
  margin-top: ${HeaderHeight};
  min-height: calc(100vh - ${HeaderHeight});
`;
