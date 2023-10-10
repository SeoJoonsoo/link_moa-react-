import LinkTicketList from '@/components/LinkTicketList';
import { dummyForAll } from '@/dummy';
import { LinkInfo } from '@/types';
import { useEffect, useState } from 'react';

export default function All() {
  const [keepLinks, setKeepLinks] = useState<LinkInfo[]>([]);

  useEffect(() => {
    setKeepLinks(dummyForAll); // TODO : 실제 데이터 받아와야함
    // setKeepLinks([]); // keep 데이터 없을때
  });

  return <LinkTicketList links={keepLinks} />;
}
