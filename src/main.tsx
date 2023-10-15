import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from './layouts/theme.ts';
import { GlobalStyle } from './layouts/GloberStyle.ts';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={basicTheme}>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <Helmet>
            <title>KEEP ON</title>
          </Helmet>
          <RouterProvider router={router} />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
);
