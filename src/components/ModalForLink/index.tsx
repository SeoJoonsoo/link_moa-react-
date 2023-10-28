import * as S from './style';
import Modal from '../Modal';
import LinkTicketForm from '../LinkTicketForm';
import { LinkInfo } from '@/types';
import TagsFieldset from './TagsFieldset';
import StatusFieldset from './StatusFieldset';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeModal, openModal } from '@/redux/modal';
import createMemberLink from '@/api/createMemberLink';
import { openModalForAlert } from '@/redux/alertModal';
import { useState, useEffect } from 'react';

// https://github.com/SeoJoonsoo/link_moa-react-/issues/2
// 위 문서의 ModalForLink 참고

type Props = {
  linkInfo: LinkInfo;
  setLinkInfo: (linkInfo: LinkInfo) => void;
  setIsOpen: (isOpen: boolean) => void;
  clearLinkInfo: () => void;
};

export default function ModalForLink({ linkInfo, setLinkInfo, setIsOpen, clearLinkInfo }: Props) {
  const [isFocusToTitleTextarea, setIsFocusToTitleTextarea] = useState(false);
  const alertModal = useAppSelector((state) => state.alertModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    linkInfo.title.length > 0 ? setIsFocusToTitleTextarea(false) : setIsFocusToTitleTextarea(true);
  }, []);

  const onCancel = () => {
    // 정말 작성을 취소할건지 물어보는 모달 호출
    dispatch(
      openModal({
        isOpen: true,
        alert: (
          <>
            <div className="content-wrapper">
              정말 취소하시겠습니까?
              <br />
              취소 시 작성하던 내용은 저장되지 않습니다
            </div>
            <div className="button-wrapper">
              <Button
                className="cancel"
                text="아니오"
                onClick={() => {
                  dispatch(closeModal());
                }}
              />
              <Button
                text="네"
                onClick={() => {
                  dispatch(closeModal());
                  setIsOpen(false);
                  clearLinkInfo();
                }}
              />
            </div>
          </>
        ),
      }),
    );
  };
  const onSubmit = () => {
    // valid
    if (linkInfo.title === '') {
      setIsFocusToTitleTextarea(true);
      return;
    }
    // TODO : 제출 후
    // TODO : 응답돌아올때까지 로딩 화면 띄움
    createMemberLink(linkInfo.url, linkInfo.title, linkInfo.tags)
      .then((response) => {
        // 응답돌아왔을때 성공이면 창닫으면서 '저장되었습니다' 알림 모달 호출
        // console.log('제출결과: ', response.status);
        if (response.status === 'success') {
          dispatch(
            openModalForAlert({
              ...alertModal,
              isOpen: true,
              status: 'success',
              alert: '저장되었습니다',
            }),
          );
          setIsOpen(false);
          clearLinkInfo();
        } else {
          dispatch(
            openModalForAlert({
              ...alertModal,
              isOpen: true,
              status: response.status,
              alert: '저장 중 오류가 발생했습니다',
            }),
          );
        }
      })
      .catch((e) => {
        console.log('저장 실패 :', e);
        dispatch(
          openModalForAlert({
            ...alertModal,
            isOpen: true,
            status: 'error',
            alert: '저장 중 오류가 발생했습니다',
          }),
        );
      });
  };
  return (
    <S.ModalWrapper>
      <Modal>
        <S.Contents>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO : form 제출
            }}
          >
            <LinkTicketForm
              value={linkInfo}
              setValue={setLinkInfo}
              isFocusToTitleTextarea={isFocusToTitleTextarea}
              setIsFocusToTitleTextarea={setIsFocusToTitleTextarea}
            />
            <TagsFieldset linkInfo={linkInfo} setLinkInfo={setLinkInfo} />
            <StatusFieldset linkInfo={linkInfo} setLinkInfo={setLinkInfo} />
            <div className="button-wrapper">
              <Button className="cancel" text="취소" onClick={onCancel} />
              <Button text="저장" onClick={onSubmit} />
            </div>
          </form>
        </S.Contents>
      </Modal>
    </S.ModalWrapper>
  );
}
