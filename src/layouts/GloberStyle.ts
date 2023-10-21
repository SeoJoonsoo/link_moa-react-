import { createGlobalStyle } from 'styled-components';
import { fonts } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  :root {
    font-size: 15px;
    background-color: ${({ theme }) => theme.basicBg};
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
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
  article,
  div,
  input {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p {
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

  textarea {
    background-color: unset;
    outline-color: ${({ theme }) => theme.basicGray};
    resize: none;
    width: 100%;
    font-size: 15px;
    font-family: ${({ theme }) => theme.fontR};
    border: none;
  }

  section {
    padding: 12px;
  }

  #root {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    min-width: 360px;
    max-width: 540px;
    min-height: 100vh;
    text-align: center;
  }

  .scroll-prettier {
      overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        /*스크롤바*/
        border: solid 2px ${({ theme }) => theme.white};
        border-radius: 4px;
        background-color: ${({ theme }) => theme.basicGray};
    }
    &::-webkit-scrollbar-track {
      /* 스크롤바 트랙*/
      background-color: ${({ theme }) => theme.white};
    }
  }
`;
