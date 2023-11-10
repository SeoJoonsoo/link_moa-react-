import * as S from './style';
import TextInput from '../Form/TextInput';
import Dropdown from '../Form/Dropdown';
import { useState, useEffect } from 'react';
import { EditMemberLinkInfo } from '@/types';
import getMemberTagAll from '@/api/tag/getMemberTagAll';

type Props = {
  linkInfo: EditMemberLinkInfo;
  setLinkInfo: (linkInfo: EditMemberLinkInfo) => void;
};

export default function TagsFieldset({ linkInfo, setLinkInfo }: Props) {
  const [selectedTag, setSelectedTag] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [isDropdownDisabled, setIsDropdownDisabled] = useState<boolean>(false);

  useEffect(() => {
    // '기존 태그에서 찾기' 드롭다운 출력을 위해 태그 리스트를 저장함
    (async function () {
      const MemberTagAll = await getMemberTagAll();
      if (MemberTagAll.status === 'success') {
        setTagList(MemberTagAll.data.memberTags);
        setIsDropdownDisabled(false);
      } else {
        setIsDropdownDisabled(true);
      }
    })();
  }, []);

  useEffect(() => {
    const tagNames = linkInfo.tags.map((tag) => tag.name);
    if (selectedTag.length > 0 && !tagNames.includes(selectedTag)) {
      const tagLastOrder = linkInfo.tags.length === 0 ? -1 : linkInfo.tags[linkInfo.tags.length - 1].order;
      setLinkInfo({ ...linkInfo, tags: [...linkInfo.tags, { name: selectedTag, order: tagLastOrder + 1 }] });
    }
    setSelectedTag('');
  }, [selectedTag]);

  return (
    <S.TagsFieldset className="tag">
      <legend>태그</legend>
      <span>태그</span>
      <div className="wrapper">
        <div className="tags">
          {linkInfo.tags.length > 0 || <span className="no-tags">태그가 없습니다. 태그를 추가해주세요</span>}
          {linkInfo.tags.map((tag) => (
            <button
              type="button"
              key={tag.name}
              className="tags__button"
              onClick={() => {
                setLinkInfo({
                  ...linkInfo,
                  tags: linkInfo.tags.filter((eachTag) => eachTag.name !== tag.name),
                });
              }}
            >
              {tag.name}
            </button>
          ))}
        </div>
        <TextInput
          placeholderText="태그 직접 입력하기"
          buttonText={'추가'}
          onClick={(value) => {
            setSelectedTag(value);
          }}
          onChange={(value) => {
            return value.split(' ').join('');
          }}
          style={{ height: '36px' }}
        />
        {tagList.length > 0 && (
          <Dropdown
            disabled={isDropdownDisabled}
            placeholderWhenDisabled="태그 목록을 가져오지 못했습니다"
            placeholder="기존 태그에서 찾기"
            list={tagList}
            setSelectedItem={setSelectedTag}
          />
        )}
      </div>
    </S.TagsFieldset>
  );
}
