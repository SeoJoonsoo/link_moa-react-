import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './style';
import getMemberTagAll from '@/api/tag/getMemberTagAll';
import { MemberLinkInfo, Tag } from '@/types';
import TagList from '@/components/TagList';
import LinkTicketList from '@/components/LinkTicketList';
import TagButton from '@/components/Tag';
import quitIcon from '@/assets/images/ic-quit.svg';
import rightArrowIcon from '@/assets/images/Tag/ic-arrow__right__point-color.svg';
import { openModalForAlert } from '@/redux/alertModal';

export default function Tag() {
  const memberLinks = useAppSelector((state) => state.memberLinks.linkInfo);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get('tag');
  const dispatch = useAppDispatch();

  const [allTags, setAllTags] = useState<string[]>([]);
  const [allTagsWithReadStatus, setAllTagsWithReadStatus] = useState<Map<string, boolean>>(new Map());
  // allTagsWithReadStatus에 읽은 태그는 true, 안읽은 태그는 false
  const [unReadTags, setUnReadTags] = useState<string[]>([]);
  const [linkInfoNoTags, setLinkInfoNoTags] = useState<MemberLinkInfo[]>([]);

  const [linkListHasSelectedTag, setLinkListHasSelectedTag] = useState<MemberLinkInfo[]>([]);

  const onClickTag = (tagName: string) => {
    setSearchParams({ tag: tagName });
  };

  useEffect(() => {
    const newAllTagsWithReadSatus = new Map();
    const newLinkInfoNoTags: MemberLinkInfo[] = [];

    (async function () {
      const MemberTagAll = await getMemberTagAll();
      if (MemberTagAll.status === 'success') {
        const tags = MemberTagAll.data.memberTags;
        setAllTags(tags.reverse());
        tags.forEach((tagName) => {
          newAllTagsWithReadSatus.set(tagName, true);
        });

        memberLinks.forEach((linkInfo) => {
          // 안읽은 태그 분류
          if (linkInfo.member_link_status !== 'Completed') {
            linkInfo.tags.forEach((tag) => {
              newAllTagsWithReadSatus.set(tag.name, false);
            });
          }

          // 태그가 없는 링크 저장
          if (linkInfo.tags.length === 0) {
            newLinkInfoNoTags.push(linkInfo);
          }
        });
        setAllTagsWithReadStatus(newAllTagsWithReadSatus);
        setLinkInfoNoTags(newLinkInfoNoTags);
      } else if (MemberTagAll.status === 'fail') {
        dispatch(
          openModalForAlert({
            status: 'fail',
            alert: <>오류로 태그를 가져오지 못했습니다</>,
          }),
        );
      } else {
        dispatch(
          openModalForAlert({
            status: 'fail',
            alert: <>내부 오류로 태그를 가져오지 못했습니다</>,
          }),
        );
      }
    })();
  }, [memberLinks]);

  useEffect(() => {
    const newUnReadTags = allTags.filter((tagName) => !allTagsWithReadStatus.get(tagName));
    setUnReadTags(newUnReadTags);
  }, [allTags, allTagsWithReadStatus]);

  useEffect(() => {
    if (tag) {
      const newLinkListHasSelectedTag = memberLinks.filter((linkInfo) => {
        const tags = linkInfo.tags.map((tag) => tag.name);
        return tags.includes(tag);
      });
      setLinkListHasSelectedTag(newLinkListHasSelectedTag);
    }
  }, [tag, memberLinks]);

  return (
    <S.Tag id="collection-by-tag" role="tabpanel" aria-labelledby="tag">
      {tag ? (
        // 태그 검색 시
        <>
          <S.TagInfoWrapper>
            <TagButton tagName={tag} onClick={() => {}} style={{ backgroundColor: '#fff' }} />
            <span>태그 글 ({linkListHasSelectedTag.length})</span>
            <button
              className="quit-button"
              onClick={() => {
                setLinkListHasSelectedTag([]);
                navigate('/tag');
              }}
            >
              <img src={quitIcon} alt="quit icon" />
            </button>
          </S.TagInfoWrapper>
          <LinkTicketList links={linkListHasSelectedTag} />
        </>
      ) : (
        // 태그 검색 전
        <>
          {/* TODO: 태그 없는 링크리스트 페이지 만들고 코드 적용하기
          {linkInfoNoTags.length > 0 && ( */}
          {false && (
            <S.TagInfoWrapper>
              태그 없는 글이 총 {linkInfoNoTags.length}개 있어요. 태그 추가하기
              <button
                className="quit-button"
                onClick={() => {
                  // TODO: 태그 없는 링크리스트 페이지 보여주기
                }}
              >
                <img src={rightArrowIcon} alt="오른쪽 화살표" />
              </button>
            </S.TagInfoWrapper>
          )}
          {unReadTags.length > 0 && (
            <S.Wrapper>
              <S.Title>아직 안읽은 글 태그</S.Title>
              <TagList tagNames={unReadTags} tagsReadStatus={allTagsWithReadStatus} onClick={onClickTag} />
            </S.Wrapper>
          )}
          <S.Wrapper>
            <S.Title>전체 태그</S.Title>
            {allTagsWithReadStatus.size > 0 ? (
              <TagList tagNames={allTags} tagsReadStatus={allTagsWithReadStatus} onClick={onClickTag} />
            ) : (
              <span className="alert">
                태그가 없습니다.
                <br />
                저장 시 태그를 추가해서 링크들을 편리하게 관리해보세요
              </span>
            )}
          </S.Wrapper>
        </>
      )}
    </S.Tag>
  );
}
