import * as S from './style';
import successIcon from '@/assets/images/Modal/ic-success.svg';
import failIcon from '@/assets/images/Modal/ic-fail.svg';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { closeModalForAlert } from '@/redux/alertModal';
import Modal from '../Modal';

// https://github.com/SeoJoonsoo/link_moa-react-/issues/2
// 위 문서의 ModalForAlert 참고

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
        dispatch(closeModalForAlert());
      }, closeTime);
    }
  }, [alertModal]);
  return (
    <S.ModalWrapper
      onClick={() => {
        dispatch(closeModalForAlert());
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
