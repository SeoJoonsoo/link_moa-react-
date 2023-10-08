import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import * as S from './style';
import useScrollToTop from '@/hooks/useScrollToTop';

function AppLayout() {
  useScrollToTop();
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
