import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from './layouts/theme.ts';
import { GlobalStyle } from './layouts/GloberStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={basicTheme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>,
);
