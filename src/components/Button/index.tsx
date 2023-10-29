import * as S from './style';

// className에 cancel을 전달하면 회색 버튼이 생깁니다

type Props = {
  className?: string;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export default function Button({ className, text, onClick, type = 'button' }: Props) {
  return (
    <S.Button
      className={className}
      type={type}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {text}
    </S.Button>
  );
}
