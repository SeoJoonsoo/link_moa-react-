import { styled } from 'styled-components';

export const List = styled.div`
  width: 100%;
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
`;
