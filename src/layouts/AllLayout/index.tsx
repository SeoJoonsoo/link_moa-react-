import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as S from './style';

export default function AllLayout() {
  return (
    <S.Tab className="tab">
      <div className="tab__buttons" role="tablist">
        <NavLink
          id="all"
          aria-controls="most-recently-saved"
          role="tab"
          to="/all"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          최근 저장 순
        </NavLink>
        <NavLink
          id="tag"
          aria-controls="collection-by-tag"
          role="tab"
          to="/tag"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          태그별 모음
        </NavLink>
      </div>
      <div className="tab__contents">
        <Outlet />
      </div>
    </S.Tab>
  );
}
