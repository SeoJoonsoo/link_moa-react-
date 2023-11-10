import { openModalForAlert } from '@/redux/alertModal';
import { useAppDispatch } from '@/redux/hooks';
import { Navigate } from 'react-router';

export default function NotFound() {
  const dispatch = useAppDispatch();

  dispatch(
    openModalForAlert({
      closeTime: 4000,
      status: 'fail',
      alert: (
        <>
          페이지를 찾을 수 없습니다
          <br />
          메인페이지로 이동합니다
        </>
      ),
    }),
  );

  return <Navigate to="/" replace={true} />;
}
