import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 15px;
    background-color: ${({ theme }) => theme.basicBg};
  }
  body {
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
