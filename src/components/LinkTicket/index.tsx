import { LinkInfo } from '@/types';
import * as S from './style';

type Props = {
  value: LinkInfo;
};

export default function LinkTicket({ value }: Props) {
  const { title, url, writer, writeDate, tags, status } = value;
  const openEditModal = () => {
    // TODO : 해당 링크에 대한 수정 모달 띄우도록 구현
  };

  return (
    <S.Article className={status}>
      <div className="wrapper">
        <S.LinkInfo to={url} target="_blank">
          <h3 className="title">{title}</h3>
          <ul className="writeed-info">
            <li className="writer">{writer}</li>
            <li className="writed-date">{writeDate}</li>
          </ul>
        </S.LinkInfo>
        <S.Tags
          className="tags"
          onClick={() => {
            openEditModal();
          }}
        >
          {tags.map((tag) => {
            return <li key={tag}>#{tag}</li>;
          })}
        </S.Tags>
      </div>
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
