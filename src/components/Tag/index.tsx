import * as S from './style';

type Props = {
  tagName: string;
  onClick: (tagName: string) => void;
  isRead?: boolean;
  [prop: string]: any;
};

export default function Tag({ tagName, onClick, isRead, ...props }: Props) {
  return (
    <S.Tag
      {...props}
      className={isRead ? '' : 'unRead'}
      onClick={() => {
        onClick(tagName);
      }}
    >
      #{tagName}
    </S.Tag>
  );
}
