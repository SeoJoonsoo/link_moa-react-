import LinkTicketList from '@/components/LinkTicketList';
import { dummyForRead } from '@/dummy';
import { MemberLinkInfo } from '@/types';
import { useEffect, useState } from 'react';

export default function Read() {
  const [keepLinks, setKeepLinks] = useState<MemberLinkInfo[]>([]);

  useEffect(() => {
    setKeepLinks(dummyForRead); // TODO : 실제 데이터 받아와야함
    // setKeepLinks([]); // keep 데이터 없을때
  });

  return <LinkTicketList links={keepLinks} alert="읽은 글이 없습니다" />;
}
