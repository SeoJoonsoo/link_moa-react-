import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import * as S from './style';
import { useState } from 'react';

function AppLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    if (scrollLocation !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <Header className={isScrolled && 'scrolled'} />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  );
}

export default AppLayout;
