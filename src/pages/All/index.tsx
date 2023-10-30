import LinkTicketList from '@/components/LinkTicketList';
import { LinkInfo } from '@/types';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import getMemberLinks from '@/api/link/getMemberLinks';
import { openModalForAlert } from '@/redux/alertModal';

export default function All() {
  const [memberLinks, setMemberLinks] = useState<LinkInfo[]>([]); // all 링크
  const dispatch = useAppDispatch();
  const alertModal = useAppSelector((state) => state.alertModal);

  const openModalWhenGettingMemberLinksFail = () => {
    dispatch(
      openModalForAlert({
        ...alertModal,
        isOpen: true,
        status: 'error',
        alert: '링크 정보 조회에 실패했습니다',
      }),
    );
  };
  useEffect(() => {
    getMemberLinks()
      .then((response) => {
        console.log('getMemberLinks 응답: ', response);
        if (response.status === 'success') {
          setMemberLinks(response.data.memberLinks);
        } else {
          openModalWhenGettingMemberLinksFail();
        }
      })
      .catch(() => {
        openModalWhenGettingMemberLinksFail();
      });
  }, []);

  return <LinkTicketList links={memberLinks} />;
}
