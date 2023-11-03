import LinkTicket from '@/components/LinkTicket';
import { MemberLinkInfo } from '@/types';
import * as S from './style';

type Props = {
  links: MemberLinkInfo[];
};
export default function LinkTicketListWithScroll({ links }: Props) {
  return (
    <S.List className="link-ticket-list-width-scroll">
      {links.map((link) => {
        return <LinkTicket key={link.member_link_id} value={link} />;
      })}
    </S.List>
  );
}
