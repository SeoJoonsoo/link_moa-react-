import LinkTicketList from '@/components/LinkTicketList';
import { dummyForKeep } from '@/dummy';
import { LinkInfo } from '@/types';
import { useEffect, useState } from 'react';

export default function Keep() {
  const [keepLinks, setKeepLinks] = useState<LinkInfo[]>([]);

  useEffect(() => {
    setKeepLinks(dummyForKeep); // TODO : 실제 데이터 받아와야함
    // setKeepLinks([]); // keep 데이터 없을때
  });

  return <LinkTicketList links={keepLinks} />;
}
