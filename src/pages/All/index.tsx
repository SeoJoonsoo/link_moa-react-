import TextInput from '@/components/Form/TextInput';
import LinkTicketList from '@/components/LinkTicketList';
import { useAppSelector } from '@/redux/hooks';
import { MemberLinkInfo } from '@/types';
import { useState, useEffect } from 'react';
import * as S from './style';

export default function All() {
  const memberLinks = useAppSelector((state) => state.memberLinks.linkInfo);
  const [list, setList] = useState<MemberLinkInfo[]>([]);

  useEffect(() => {
    setList(memberLinks);
  }, [memberLinks]);

  const resetList = () => {
    setList(memberLinks);
  };
  const onClickSearch = (value: string) => {
    // value가 포함된 제목 찾기
    const newMemberLinks = memberLinks.filter((linkInfo) =>
      linkInfo.member_link_name.replace(/\s+/g, '').toLowerCase().includes(value.replace(/\s+/g, '').toLowerCase()),
    );
    setList(newMemberLinks);
  };

  return (
    <div id="most-recently-saved" role="tabpanel" aria-labelledby="all">
      <S.SearchWrapper>
        <TextInput
          className="bgGray"
          placeholderText="검색어를 입력해주세요"
          buttonText="검색"
          onClick={onClickSearch}
          onClickDeleteAll={resetList}
          deleteAfterSubmit={false}
        />
      </S.SearchWrapper>

      <LinkTicketList links={list} />
    </div>
  );
}
