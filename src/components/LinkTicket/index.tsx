import { EditMemberLinkInfo, MemberLinkInfo } from '@/types';
import * as S from './style';
import { useState } from 'react';
import ModalForLink from '../ModalForLink';
import memberLink from '@/api/link/memberLink';
import { useAppDispatch } from '@/redux/hooks';
import { updateMemberLinks } from '@/redux/memberLinks';
import { useEffect } from 'react';

type Props = {
  value: MemberLinkInfo;
};

export default function LinkTicket({ value }: Props) {
  const {
    member_link_id,
    member_link_name,
    link_url,
    writer,
    /* writed_date, */ created_at,
    tags,
    member_link_status,
  } = value;
  const [linkInfo, setLinkInfo] = useState<EditMemberLinkInfo>(value);
  const [isOpenLinkEditModal, setIsOpenLinkEditModal] = useState(false);
  const dispatch = useAppDispatch();

  const clearLinkInfo = () => {
    setLinkInfo(value);
  };
  useEffect(() => {
    setLinkInfo(value);
  }, [value]);

  return (
    <S.Article
      className={member_link_status}
      onClick={() => {
        setIsOpenLinkEditModal(true);
      }}
    >
      <div className="wrapper">
        <S.LinkInfo
          to={link_url}
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (member_link_status === 'Saved') {
              memberLink
                .update(
                  member_link_id,
                  link_url,
                  member_link_name,
                  tags.map((tag) => tag.name),
                  'In Progress',
                )
                .then((response) => {
                  if (response.data.status === 'success') {
                    dispatch(updateMemberLinks(response.data.data.memberLinks));
                  }
                });
            }
            window.open(link_url);
          }}
        >
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
        <S.Tags className="tags">
          {tags &&
            tags.map((tag) => {
              return <li key={tag.order}>#{tag.name}</li>;
            })}
        </S.Tags>
      </div>
      {member_link_status === 'Saved' && <KeepStatus />}
      {member_link_status === 'In Progress' && <KeepGoingStatus />}
      {member_link_status === 'Completed' && <ReadStatus />}

      {isOpenLinkEditModal && (
        <ModalForLink
          initialLinkInfo={value}
          linkInfo={linkInfo}
          setLinkInfo={setLinkInfo}
          setIsOpen={setIsOpenLinkEditModal}
          clearLinkInfo={clearLinkInfo}
        />
      )}
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
