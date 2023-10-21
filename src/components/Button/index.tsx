import * as S from './style';

// className에 cancel을 전달하면 회색 버튼이 생깁니다

type Props = {
  className?: string;
  text: string;
  onClick: () => void;
};

export default function Button({ className, text, onClick }: Props) {
  return (
    <S.Button
      className={className}
      type="button"
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </S.Button>
  );
}
