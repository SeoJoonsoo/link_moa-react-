import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <>
      <section>KEEP 인풋 섹션</section>
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
