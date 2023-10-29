import * as S from './style';

// https://github.com/SeoJoonsoo/link_moa-react-/issues/2
// 위 문서의 Modal 참고

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <S.BlackSpace aria-hidden="true">
      <S.WhiteSpace aria-modal="true">{children}</S.WhiteSpace>
    </S.BlackSpace>
  );
}
