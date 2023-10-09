import { styled } from 'styled-components';

export const Footer = styled.footer`
  h1 {
    padding: 24px 12px 12px;
    font-size: 1.5rem;
  }
  #sitemap {
    margin: 0 auto;
    & > li {
      display: inline-block;
      padding: 12px 24px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      a {
        display: inline-block;
        padding: 12px;
        color: ${({ theme }) => theme.textInfo};
      }
    }
  }
`;
