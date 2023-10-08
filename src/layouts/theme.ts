import { DefaultTheme, css } from 'styled-components';
import * as NANUM_SQURE_ROUND from '@/assets/font/NanumSquareRound';

export const basicTheme: DefaultTheme = {
  point: '#EB3636',
  pointFocus: '#FE4949',
  point2: '#FFBC39',
  point2Line: '#FFE071',
  point2Bg: '#FFFBDC',
  basicBg: '#F8F8F8',
  basicGray: '#E5E2E2',
  textLight: '#B9B9B9',
  textInfo: '#7C7C7C',
  black333: '#333333',
  black: '#000000',
  white: '#FFFFFF',
  fontL: 'NanumSquareRoundL',
  fontR: 'NanumSquareRoundR',
  fontB: 'NanumSquareRoundB',
  fontEB: 'NanumSquareRoundEB',
  pointFont: 'RixYeoljeongdo_Regular',
};

export const fonts = css`
  @font-face {
    font-family: 'RixYeoljeongdo_Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundL';
    src:
      url(${NANUM_SQURE_ROUND.L.woff2}) format('woff2'),
      url(${NANUM_SQURE_ROUND.L.woff}) format('woff'),
      url(${NANUM_SQURE_ROUND.L.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundR';
    src:
      url(${NANUM_SQURE_ROUND.R.woff2}) format('woff2'),
      url(${NANUM_SQURE_ROUND.R.woff}) format('woff'),
      url(${NANUM_SQURE_ROUND.R.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundB';
    src:
      url(${NANUM_SQURE_ROUND.B.woff2}) format('woff2'),
      url(${NANUM_SQURE_ROUND.B.woff}) format('woff'),
      url(${NANUM_SQURE_ROUND.B.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumSquareRoundEB';
    src:
      url(${NANUM_SQURE_ROUND.EB.woff2}) format('woff2'),
      url(${NANUM_SQURE_ROUND.EB.woff}) format('woff'),
      url(${NANUM_SQURE_ROUND.EB.ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
