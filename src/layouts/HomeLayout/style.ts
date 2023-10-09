import { styled } from 'styled-components';

export const KeepSection = styled.section`
  padding: 24px 0;
`;

export const Section = styled.section`
  padding: 12px 0 24px;
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
