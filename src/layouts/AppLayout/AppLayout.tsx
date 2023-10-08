import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import * as S from './style';

function AppLayout() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  );
}

export default AppLayout;
