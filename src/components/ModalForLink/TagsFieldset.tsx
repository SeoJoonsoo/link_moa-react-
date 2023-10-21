import * as S from './style';
import TextForm from '../Form/TextInput';
import Dropdown from '../Form/Dropdown';
import { useState, useEffect } from 'react';
import { LinkInfo } from '@/types';

type Props = {
  linkInfo: LinkInfo;
  setLinkInfo: (linkInfo: LinkInfo) => void;
};

const dummyList = ['리스트1', '리스트2', '리스트3', '리스트4', '리스트5', '리스트6', '리스트7'];

export default function TagsFieldset({ linkInfo, setLinkInfo }: Props) {
  const [selectedTag, setSelectedTag] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

  useEffect(() => {
    // TODO : '기존 태그에서 찾기' 드롭다운 출력을위해
    // 유저의 태그 목록을 가져와야함!
    // 지금은 임의로 dummyList사용함
    setTagList(dummyList);
  }, []);

  useEffect(() => {
    console.log('selectedTag 들어옴: ', selectedTag);
    if (selectedTag.length > 0 && !linkInfo.tags.includes(selectedTag)) {
      setLinkInfo({ ...linkInfo, tags: [...linkInfo.tags, selectedTag] });
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
              key={tag}
              className="tags__button"
              onClick={() => {
                setLinkInfo({
                  ...linkInfo,
                  tags: linkInfo.tags.filter((eachTag) => eachTag !== tag),
                });
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <TextForm
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
          <Dropdown placeholder="기존 태그에서 찾기" list={tagList} setSelectedItem={setSelectedTag} />
        )}
      </div>
    </S.TagsFieldset>
  );
}
