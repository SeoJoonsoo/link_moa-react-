import { ReactNode } from 'react';
import * as S from './style';

type Props = {
  id: string;
  title: string;
  color?: string;
  children: ReactNode;
  [props: string]: any;
};

export default function SectionWithTitle({ title, color, children, ...props }: Props) {
  return (
    <S.Section className="section-with-title" color={color} {...props}>
      <h2 className="title">{title}</h2>
      <div className="wrapper">{children}</div>
    </S.Section>
  );
}
