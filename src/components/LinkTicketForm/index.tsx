import { LinkInfo } from '@/types';
import * as S from './style';
import React, { RefObject, useEffect } from 'react';

type Props = {
  value: LinkInfo;
  setValue: (value: LinkInfo) => void;
  isFocusToTitleTextarea: boolean;
  setIsFocusToTitleTextarea: (isFocusToTitleTextarea: boolean) => void;
};

export default function LinkTicketForm({ value, setValue, isFocusToTitleTextarea, setIsFocusToTitleTextarea }: Props) {
  const titleTextarea: RefObject<HTMLTextAreaElement> = React.createRef();
  const { title, /*writer, writeDate,*/ tags, status } = value;
  useEffect(() => {
    if (titleTextarea.current !== null) {
      if (isFocusToTitleTextarea) {
        titleTextarea.current.focus();
        setIsFocusToTitleTextarea(false);
      }
    }
  }, [titleTextarea, title, isFocusToTitleTextarea]);
  return (
    <S.Article className={status}>
      <div className="wrapper">
        <S.LinkInfo>
          <div className="title-wrapper">
            <span>제목</span>
            <textarea
              ref={titleTextarea}
              className={`title ${title.length > 0 ? '' : 'warning'}`}
              value={title}
              rows={1}
              onChange={(e) => {
                const target = e.target;
                setValue({ ...value, title: target.value });
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              placeholder="제목을 입력해주세요"
              autoFocus={title.length > 0 ? false : true}
            />
          </div>
          {/* TODO: 보류. 백에서 링크를 크롤링한 뒤 작성자, 작성일 정보를 가져올 수 있을 때 추가해야함 */}
          {/* <ul className="writeed-info">
            <li className="writer">{writer}</li>
            <li className="writed-date">{writeDate}</li>
          </ul> */}
        </S.LinkInfo>
        <S.Tags className="tags">
          {tags.length > 0 || <S.NoTags id="no-tags">#태그_없음</S.NoTags>}
          {tags.map((tag) => {
            return (
              <li key={tag} aria-selected="false">
                #{tag}
              </li>
            );
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
