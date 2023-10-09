import LinkTicket from '@/components/LinkTicket';
import { LinkInfo } from '@/types';
import * as S from './style';

type Props = {
  links: LinkInfo[];
};
export default function KeepGoingSection({ links }: Props) {
  return (
    <S.KeepGoing id="keep-going-section">
      <h2 className="title">KEEP GOING &#62;&#62;</h2>
      <div className="link-ticket-wrapper">
        {links.map((link) => {
          return <LinkTicket value={link} />;
        })}
      </div>
    </S.KeepGoing>
  );
}
