import { useEffect, useState } from 'react';
import { LinkInfo } from '@/types';
import Keep from '../../components/Keep';
import { dummyForKeepGoing } from '../../dummy';
import SectionWithTitle from '../SectionWithTitle';
import { basicTheme } from '../theme';
import LinkTicketListWithScroll from '../../components/LinkTicketListWithScroll';
import * as S from './style';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';

export default function HomeLayout() {
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.isLogin);
  const [keepGoingLinks, setKeepGoingLinks] = useState<LinkInfo[]>([]);

  useEffect(() => {
    setKeepGoingLinks(dummyForKeepGoing); // TODO : 실제 데이터 받아와야함
    // setKeepGoingLinks([]); // keepGoing 데이터 없을때
  }, []);
  useEffect(() => {
    if (!isLogin.isLogin) {
      navigate('/welcome');
    }
  }, [isLogin.isLogin]);

  return (
    <>
      <Keep />

      {keepGoingLinks.length !== 0 && (
        <SectionWithTitle id="keep-going-section" title="KEEP GOING &#62;&#62;" color={basicTheme.point2}>
          <LinkTicketListWithScroll links={keepGoingLinks} />
        </SectionWithTitle>
      )}

      <SectionWithTitle id="test" title="LIST">
        <S.PageSection id="list-section">
          <nav className="name-wrapper">
            <ul>
              <NavLi to="/" title="새 글" className="keep" position="left" />
              <NavLi to="/read" title="읽은 글" className="read" position="left" />
              <NavLi to="/all" title="모든 글" className="all" position="right" />
            </ul>
          </nav>
          <div className="content-wrapper">
            <Outlet />
          </div>
        </S.PageSection>
      </SectionWithTitle>
    </>
  );
}

type Props = {
  to: string;
  title: string;
  className: string;
  position: string;
};

export function NavLi({ to, title, className, position }: Props) {
  return (
    <li className={position}>
      <NavLink id={title} to={to} className={({ isActive }) => `${className} ${isActive ? 'active' : undefined}`}>
        {title}
      </NavLink>
    </li>
  );
}
