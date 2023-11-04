import { EditMemberLinkInfo } from '@/types';
import * as S from './style';
import React, { RefObject, useEffect } from 'react';

type Props = {
  value: EditMemberLinkInfo;
  setValue: (value: EditMemberLinkInfo) => void;
  isFocusToTitleTextarea: boolean;
  setIsFocusToTitleTextarea: (isFocusToTitleTextarea: boolean) => void;
};

export default function LinkTicketForm({ value, setValue, isFocusToTitleTextarea, setIsFocusToTitleTextarea }: Props) {
  const titleTextarea: RefObject<HTMLTextAreaElement> = React.createRef();
  const { member_link_name, /*writer, writeDate,*/ tags, member_link_status } = value;
  useEffect(() => {
    if (titleTextarea.current !== null) {
      if (isFocusToTitleTextarea) {
        titleTextarea.current.focus();
        setIsFocusToTitleTextarea(false);
      }
    }
  }, [titleTextarea, member_link_name, isFocusToTitleTextarea]);
  return (
    <S.Article className={member_link_status}>
      <div className="wrapper">
        <S.LinkInfo>
          <div className="title-wrapper">
            <span>제목</span>
            <textarea
              ref={titleTextarea}
              className={`title ${member_link_name.length > 0 ? '' : 'warning'}`}
              value={member_link_name}
              rows={1}
              onChange={(e) => {
                const target = e.target;
                setValue({ ...value, member_link_name: target.value });
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              placeholder="제목을 입력해주세요"
              autoFocus={member_link_name.length > 0 ? false : true}
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
      {member_link_status === 'Saved' && <KeepStatus />}
      {member_link_status === 'In Progress' && <KeepGoingStatus />}
      {member_link_status === 'Completed' && <ReadStatus />}
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
