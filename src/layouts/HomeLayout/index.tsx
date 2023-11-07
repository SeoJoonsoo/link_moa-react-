import { useEffect, useState } from 'react';
import { MemberLinkInfo } from '@/types';
import Keep from '../../components/Keep';
import SectionWithTitle from '../SectionWithTitle';
import { basicTheme } from '../theme';
import LinkTicketListWithScroll from '../../components/LinkTicketListWithScroll';
import * as S from './style';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateMemberLinks } from '@/redux/memberLinks';
import getMemberLinks from '@/api/link/getMemberLinks';
import { openModalForAlert } from '@/redux/alertModal';

export default function HomeLayout() {
  const [keepGoingLinks, setKeepGoingLinks] = useState<MemberLinkInfo[]>([]);
  const dispatch = useAppDispatch();
  const alertModal = useAppSelector((state) => state.alertModal);
  const isLogin = useAppSelector((state) => state.isLogin.isLogin);
  const memberLinks = useAppSelector((state) => state.memberLinks.linkInfo);

  useEffect(() => {
    if (isLogin) {
      getMemberLinks()
        .then((response) => {
          console.log('홈레이아웃 getMemberLinks 응답', response.data.memberLinks);
          dispatch(updateMemberLinks(response.data.memberLinks));
        })
        .catch((e) => {
          console.log('홈레이아웃 getMemberLinks 에러', e);
          dispatch(
            openModalForAlert({
              ...alertModal,
              isOpen: true,
              status: 'error',
              alert: '링크 정보를 가져오지 못했습니다',
            }),
          );
        });
    }
  }, []);

  useEffect(() => {
    // KEEP GOING에 출력할 링크 추출
    const newKeepGoingLinks = memberLinks.filter((linkInfo) => linkInfo.member_link_status === 'In Progress');
    setKeepGoingLinks(newKeepGoingLinks);
  }, [memberLinks]);

  return (
    <>
      <Keep />

      {keepGoingLinks.length !== 0 && (
        <SectionWithTitle
          id="keep-going-section"
          title="KEEP GOING &#62;&#62;"
          color={basicTheme.point2}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
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
