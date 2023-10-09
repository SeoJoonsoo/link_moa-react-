import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import * as S from './style';
import TextForm from '@/components/Form/TextForm/TextForm';

export default function HomeLayout() {
  const onSubmit = () => {
    // TODO : 링크 저장 API 구현
  };
  return (
    <>
      <S.KeepSection>
        <TextForm
          className="point-button"
          placeholder="링크를 저장하고 언제든 꺼내보세요"
          buttonText="KEEP"
          onSubmit={onSubmit}
        />
      </S.KeepSection>
      <section>
        <h2>KEEP GOING &#62;&#62;</h2>
      </section>
      <section>
        <h2>ALL 섹션</h2>
        <Link to="/">새 글</Link>
        <Link to="/read">읽은 글</Link>
        <Link to="/all">모든 글</Link>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
}
