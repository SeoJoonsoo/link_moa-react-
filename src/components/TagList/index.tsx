import Tag from '../Tag';
import * as S from './style';

type Props = {
  tagNames: string[];
  tagsReadStatus: Map<string, boolean>;
  onClick: (tagName: string) => void;
};

export default function TagList({ tagNames, tagsReadStatus, onClick }: Props) {
  return (
    <S.TagList>
      {tagNames.map((tagName) => (
        <Tag tagName={tagName} onClick={onClick} isRead={tagsReadStatus.get(tagName)!} />
      ))}
    </S.TagList>
  );
}
