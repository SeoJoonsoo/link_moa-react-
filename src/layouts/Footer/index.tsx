import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <h1>푸터</h1>
      <ul>
        <li>
          개발 편의를 위한 사이트맵
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/read">읽은 글</Link>
            </li>
            <li>
              <Link to="/all">모든 글</Link>
            </li>
            <li>
              <Link to="/welcome">웰컴</Link>
            </li>
            <li>
              <Link to="/sign-in">로그인</Link>
            </li>
            <li>
              <Link to="/sign-up">회원가입</Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
