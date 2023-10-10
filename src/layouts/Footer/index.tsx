import { Link } from 'react-router-dom';
import * as S from './style';

export default function Footer() {
  return (
    <S.Footer>
      <h1>Sitemap</h1>
      <ul id="sitemap">
        <li>
          로그인 시 접속 가능
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
          </ul>
        </li>
        <li>
          로그아웃 시 접속 가능
          <ul>
            <li>
              <Link to="/welcome">웰컴</Link>
            </li>
          </ul>
        </li>
      </ul>
    </S.Footer>
  );
}
