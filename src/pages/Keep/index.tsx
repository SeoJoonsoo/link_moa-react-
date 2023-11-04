import LinkTicketList from '@/components/LinkTicketList';
import { useAppSelector } from '@/redux/hooks';
import { MemberLinkInfo } from '@/types';
import { useEffect, useState } from 'react';

export default function Keep() {
  const [keepLinks, setKeepLinks] = useState<MemberLinkInfo[]>([]);
  const memberLinks = useAppSelector((state) => state.memberLinks.linkInfo);

  useEffect(() => {
    const newKeepLinks = memberLinks.filter((linkInfo) => linkInfo.member_link_status === 'Saved');
    setKeepLinks(newKeepLinks);
  }, [memberLinks]);

  return <LinkTicketList links={keepLinks} />;
}
