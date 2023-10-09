import { createGlobalStyle } from 'styled-components';
import { fonts } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  :root {
    font-size: 15px;
    background-color: ${({ theme }) => theme.basicBg};
  }
  body {
    font-family: ${({ theme }) => theme.fontR};
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
  div,
  input {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    font-weight: normal;
  }
  ul, ol, li {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fontR};
  }
  a {
    font-family: ${({ theme }) => theme.fontR};
    color: ${({ theme }) => theme.black333};
    text-decoration: none;
  }

  button {
    font-family: ${({ theme }) => theme.fontR};
    border: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    min-width: 360px;
    max-width: 1280px;
    min-height: 100vh;
    text-align: center;
    border: solid 1px #ddd; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    main {
      border: solid 1px ${({ theme }) => theme.point}; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    }
    section {
      border: solid 1px ${({ theme }) => theme.point2}; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    }
    div {
      border: solid 1px ${({ theme }) => theme.basicGray}; /* TODO : 임의로 영역 확인을 위한 스타일(UI작업시 삭제) */
    }
  }

`;
