import { Outlet } from 'react-router';

export default function Main() {
  return (
    <main data-testid="main">
      메인 컨테이너
      <Outlet />
    </main>
  );
}
