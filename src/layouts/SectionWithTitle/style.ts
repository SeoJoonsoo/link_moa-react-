import { styled } from 'styled-components';

export const Section = styled.section`
  padding-top: 12px;
  padding-bottom: 12px;
  & > .title {
    padding: 0 12px;
    text-align: left;
    font-size: 18px;
    font-family: ${({ theme }) => theme.pointFont};
    color: ${(props) => (props.color ? props.color : ({ theme }) => theme.textLight)};
  }
`;
