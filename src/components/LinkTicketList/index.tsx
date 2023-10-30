import * as S from './style';
import LinkTicket from '@/components/LinkTicket';
import { LinkInfo } from '@/types';

type Props = {
  links: LinkInfo[];
  alert?: string;
};

export default function LinkTicketList({ links, alert }: Props) {
  return (
    <div>
      <S.ListHeader>
        <li className="link-title">제목</li>
        <li className="link-status">상태</li>
      </S.ListHeader>
      <S.List>
        {links.length === 0 ? (
          <div className="alert">
            {alert ? (
              <span>{alert}</span>
            ) : (
              <span>
                새로운 글이 없습니다
                <br />새 링크를 <a href="#keep-section">KEEP</a> 해보세요
              </span>
            )}
          </div>
        ) : (
          links.map((link) => {
            return <LinkTicket key={link.member_link_id} value={link} />;
          })
        )}
        {}
      </S.List>
    </div>
  );
}
