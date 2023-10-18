import * as S from './style';
import successIcon from '@/assets/images/Modal/ic-success.svg';
import failIcon from '@/assets/images/Modal/ic-fail.svg';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { closeModal } from '@/redux/alertModal';
import Modal from '../Modal';

type Props = {
  status: 'success' | 'fail' | 'error';
  closeTime: number;
  children: React.ReactNode;
};
export default function ModalForAlert({ status = 'success', closeTime, children }: Props) {
  const alertModal = useAppSelector((state) => state.alertModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (alertModal.isOpen) {
      setTimeout(() => {
        dispatch(closeModal());
      }, closeTime);
    }
  }, [alertModal]);
  return (
    <S.ModalWrapper
      onClick={() => {
        dispatch(closeModal());
      }}
      closeTime={closeTime}
    >
      <Modal>
        <S.Contents>
          <img
            className="icon"
            src={status === 'success' ? successIcon : failIcon}
            alt={status === 'success' ? 'success icon' : 'fail icon'}
          />
          <p className="alert">{children}</p>
        </S.Contents>
      </Modal>
    </S.ModalWrapper>
  );
}
