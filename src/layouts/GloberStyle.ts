import { createGlobalStyle } from 'styled-components';
import * as NANUM_SQURE_ROUND from '@/assets/font/NanumSquareRound';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'RixYeoljeongdo_Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundL';
    src: url(${NANUM_SQURE_ROUND.L.woff2}) format('woff2'),
          url(${NANUM_SQURE_ROUND.L.woff}) format('woff'),
          url(${NANUM_SQURE_ROUND.L.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundR';
    src: url(${NANUM_SQURE_ROUND.R.woff2}) format('woff2'),
          url(${NANUM_SQURE_ROUND.R.woff}) format('woff'),
          url(${NANUM_SQURE_ROUND.R.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundB';
    src: url(${NANUM_SQURE_ROUND.B.woff2}) format('woff2'),
          url(${NANUM_SQURE_ROUND.B.woff}) format('woff'),
          url(${NANUM_SQURE_ROUND.B.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundEB';
    src: url(${NANUM_SQURE_ROUND.EB.woff2}) format('woff2'),
          url(${NANUM_SQURE_ROUND.EB.woff}) format('woff'),
          url(${NANUM_SQURE_ROUND.EB.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    font-size: 15px;
    background-color: ${({ theme }) => theme.basicBg};
  }
  body {
    font-family: 'NanumSquareRoundR';
    overflow-wrap: break-word;
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  :lang(ko) { word-break: keep-all; }

  header,
  footer,
  main,
  section,
  div {
    box-sizing: border-box;
    padding: 10px; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
  }

  a {
    font-family: 'NanumSquareRoundR';
    color: ${({ theme }) => theme.black333};
    text-decoration: none;
  }

  button {
    font-family: 'NanumSquareRoundR';
    border: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    max-width: 1280px;
    height: 100vh;
    text-align: center;
    border: solid 1px #ddd; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    main {
      flex-grow: 1;
      flex-shrink: 1;
      border: solid 1px ${({ theme }) => theme.point}; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    }
    section {
      border: solid 1px ${({ theme }) => theme.point2}; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    }
    div {
      background-color: #ffffff; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
      border: solid 1px ${({ theme }) => theme.basicGray}; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    }
  }

`;
