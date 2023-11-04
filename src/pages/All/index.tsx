import LinkTicketList from '@/components/LinkTicketList';
import { useAppSelector } from '@/redux/hooks';

export default function All() {
  const memberLinks = useAppSelector((state) => state.memberLinks.linkInfo);

  return <LinkTicketList links={memberLinks} />;
}
