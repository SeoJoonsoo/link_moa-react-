import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import login from '@/api/login';

export default function NaverLogin() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(login());
  }, []);

  return <span>네이버 로그인 중...</span>;
}
