import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

// 로그인 여부에 따라 리다이렉션 시킴
// 로그인하지 않은 유저는 /welcome 페이지만 볼 수 있습니다.

export default function useIsLogin(): { isLogin: boolean } {
  const currentPath = useLocation();
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.isLogin).isLogin;

  useEffect(() => {
    console.log(currentPath.pathname);
    // TODO : 이슈. isLogin이 다른 탭에서도 같은 값이 유지되길 바래서 redux-persist를 사용했는데
    // isLogin이 다른 탭에서 변경된 경우 localstorage에는 바뀐것을 확인했으나
    // store에는 새로고침 해야지만 반영됨.
    if (isLogin) {
      if (currentPath.pathname.includes('welcome') || currentPath.pathname.includes('naverLogin')) {
        navigate('/');
      }
    } else {
      navigate('/welcome');
    }
  }, [isLogin, currentPath.pathname]);

  return { isLogin };
}
