import { css, styled } from 'styled-components';

const SectionCommon = css`
  padding-top: 12px;
  padding-bottom: 24px;
  & > .title {
    text-align: left;
    font-size: 18px;
    font-family: ${({ theme }) => theme.pointFont};
    padding-bottom: 18px;
  }
`;

export const KeepSection = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const KeepGoing = styled.section`
  ${SectionCommon}
  & > .title {
    color: ${({ theme }) => theme.point2};
  }
  .link-ticket-wrapper {
    max-height: 365px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 10px; /*스크롤바의 너비*/
    }
    &::-webkit-scrollbar-thumb {
      /*스크롤바*/
      background-color: ${({ theme }) => theme.basicGray};
      border-radius: 5px;
      border: solid 2px ${({ theme }) => theme.white};
    }
    &::-webkit-scrollbar-track {
      /* 스크롤바 트랙*/
      background-color: ${({ theme }) => theme.white};
    }
  }
`;

export const Section = styled.section`
  ${SectionCommon}
  &#list-section > .title {
    color: ${({ theme }) => theme.textLight};
  }
`;
