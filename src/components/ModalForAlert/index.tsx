import * as S from './style';
import successIcon from '@/assets/images/Modal/ic-success.svg';
import failIcon from '@/assets/images/Modal/ic-fail.svg';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/alertModal';

type Props = {
  status: 'success' | 'fail' | 'error';
  onClick: () => void;
  children: React.ReactNode;
};
export default function ModalForAlert({ status = 'success', onClick, children }: Props) {
  const alertModal = useAppSelector((state) => state.alertModal);
  const dispatch = useDispatch();
  const closeTime = 3000;

  useEffect(() => {
    if (alertModal.isOpen) {
      setTimeout(() => {
        dispatch(closeModal());
      }, closeTime);
    }
  }, [alertModal]);
  return (
    <S.BlackSpace onClick={onClick} closeTime={closeTime}>
      <S.WhiteSpace>
        <img
          className="icon"
          src={status === 'success' ? successIcon : failIcon}
          alt={status === 'success' ? 'success icon' : 'fail icon'}
        />
        <p className="alert">{children}</p>
      </S.WhiteSpace>
    </S.BlackSpace>
  );
}
