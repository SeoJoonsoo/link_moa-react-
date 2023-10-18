import * as S from './style';

type Props = {
  children: React.ReactNode;
};
export default function Modal({ children }: Props) {
  return (
    <S.BlackSpace>
      <S.WhiteSpace>{children}</S.WhiteSpace>
    </S.BlackSpace>
  );
}
