import { MemberLinkInfo } from '@/types';
import * as S from './style';

type Props = {
  value: MemberLinkInfo;
};

export default function LinkTicket({ value }: Props) {
  const { member_link_name, link_url, writer, /* writed_date, */ created_at, tags, status } = value;
  const openEditModal = () => {
    // TODO : 해당 링크에 대한 수정 모달 띄우도록 구현
  };

  return (
    <S.Article className={status}>
      <div className="wrapper">
        <S.LinkInfo to={link_url} target="_blank">
          <h3 className="title">{member_link_name}</h3>
          <ul className="writeed-info">
            <li className="writer">{writer}</li>
            {/* TODO : 백에서 writer, writed-date 구현 완료 시
                현재 주석부분 출력하고, 아래 craeted-date 숨기기
              <li className="writed-date">{writed_date}</li>
            */}
            <li className="created-date">저장일: {created_at.slice(0, -3)}</li>
          </ul>
        </S.LinkInfo>
        <S.Tags
          className="tags"
          onClick={() => {
            openEditModal();
          }}
        >
          {tags &&
            tags.map((tag) => {
              return <li key={tag}>#{tag}</li>;
            })}
        </S.Tags>
      </div>
      {
        /* TODO: status 백 구현 중 (현재는 임의로 status값이 없을때 default : keep) */
        status === undefined && <KeepStatus />
      }
      {status === 'keep' && <KeepStatus />}
      {status === 'keep-going' && <KeepGoingStatus />}
      {status === 'read' && <ReadStatus />}
    </S.Article>
  );
}

function KeepStatus() {
  return (
    <S.StatusInfo className="status-info keep">
      K<br />E<br />E<br />P
    </S.StatusInfo>
  );
}
function KeepGoingStatus() {
  return (
    <S.StatusInfo className="status-info keep-going">
      K<br />E<br />E<br />P
    </S.StatusInfo>
  );
}
function ReadStatus() {
  return (
    <S.StatusInfo className="status-info read">
      R<br />E<br />A<br />D
    </S.StatusInfo>
  );
}
