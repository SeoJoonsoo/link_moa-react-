import LinkTicketList from '@/components/LinkTicketList';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import getMemberLinks from '@/api/link/getMemberLinks';
import { openModalForAlert } from '@/redux/alertModal';
import { updateMemberLinks } from '@/redux/memberLinks';

export default function All() {
  const [alert, setAlert] = useState('');
  const dispatch = useAppDispatch();
  const alertModal = useAppSelector((state) => state.alertModal);
  const memberLinks = useAppSelector((state) => state.memberLinks);

  const openModalWhenGettingMemberLinksFail = () => {
    dispatch(
      openModalForAlert({
        ...alertModal,
        isOpen: true,
        status: 'error',
        alert: '링크 정보를 가져오지 못했습니다',
      }),
    );
  };
  useEffect(() => {
    getMemberLinks()
      .then((response) => {
        console.log('getMemberLinks 응답: ', response);
        if (response.status === 'success') {
          dispatch(updateMemberLinks(response.data.memberLinks));
          setAlert('');
        } else {
          openModalWhenGettingMemberLinksFail();
          setAlert('링크 정보를 가져오지 못했습니다');
        }
      })
      .catch(() => {
        openModalWhenGettingMemberLinksFail();
        setAlert('링크 정보를 가져오지 못했습니다');
      });
  }, []);

  return <LinkTicketList links={memberLinks.linkInfo} alert={alert} />;
}
