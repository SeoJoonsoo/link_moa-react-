import LinkTicket from '@/components/LinkTicket';
import { LinkInfo } from '@/types';
import * as S from './style';

type Props = {
  links: LinkInfo[];
};
export default function LinkTicketListWithScroll({ links }: Props) {
  return (
    <S.List className="link-ticket-list-width-scroll">
      {links.map((link) => {
        return <LinkTicket key={link.id} value={link} />;
      })}
    </S.List>
  );
}
