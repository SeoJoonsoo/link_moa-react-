import { Link, Outlet } from 'react-router-dom';
import * as S from './style';

export default function ListSection() {
  return (
    <S.Section id="list-section">
      <h2 className="title">LIST</h2>
      <Link to="/">새 글</Link>
      <Link to="/read">읽은 글</Link>
      <Link to="/all">모든 글</Link>
      <div>
        <Outlet />
      </div>
    </S.Section>
  );
}
