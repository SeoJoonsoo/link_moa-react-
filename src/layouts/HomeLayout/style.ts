import { styled } from 'styled-components';

export const KeepSection = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Section = styled.section`
  padding-top: 12px;
  padding-bottom: 24px;
  & > .title {
    text-align: left;
    font-size: 18px;
    font-family: ${({ theme }) => theme.pointFont};
  }
  &#keep-going-section .title {
    color: ${({ theme }) => theme.point2};
  }
  &#list-section .title {
    color: ${({ theme }) => theme.textLight};
  }
`;
