import * as S from './style';
import Modal from '../Modal';
import LinkTicketForm from '../LinkTicketForm';
import { EditLinkInfo } from '@/types';
import TagsFieldset from './TagsFieldset';
import StatusFieldset from './StatusFieldset';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeModal, openModal } from '@/redux/modal';
import createMemberLink from '@/api/link/createMemberLink';
import { openModalForAlert } from '@/redux/alertModal';
import { useState, useEffect } from 'react';
import { updateMemberLinks } from '@/redux/memberLinks';

// https://github.com/SeoJoonsoo/link_moa-react-/issues/2
// 위 문서의 ModalForLink 참고

type Props = {
  linkInfo: EditLinkInfo;
  setLinkInfo: (linkInfo: EditLinkInfo) => void;
  setIsOpen: (isOpen: boolean) => void;
  clearLinkInfo: () => void;
};

export default function ModalForLink({ linkInfo, setLinkInfo, setIsOpen, clearLinkInfo }: Props) {
  const [isFocusToTitleTextarea, setIsFocusToTitleTextarea] = useState(false);
  const alertModal = useAppSelector((state) => state.alertModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    linkInfo.member_link_name.length > 0 ? setIsFocusToTitleTextarea(false) : setIsFocusToTitleTextarea(true);
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
    if (linkInfo.member_link_name === '') {
      setIsFocusToTitleTextarea(true);
      return;
    }

    const openModalWhenCreatingFail = (status: 'success' | 'fail' | 'error') => {
      dispatch(
        openModalForAlert({
          ...alertModal,
          isOpen: true,
          status: status,
          alert: '저장 중 오류가 발생했습니다',
        }),
      );
    };
    // TODO : 제출 후 응답돌아올때까지 로딩 화면 출력하기
    createMemberLink(linkInfo.link_url, linkInfo.member_link_name, linkInfo.tags)
      .then((response) => {
        console.log('제출결과: ', response);
        if (response.status === 'success') {
          dispatch(
            openModalForAlert({
              ...alertModal,
              isOpen: true,
              status: 'success',
              alert: '저장되었습니다',
            }),
          );
          dispatch(updateMemberLinks(response.data.memberLinks));
          setIsOpen(false);
          clearLinkInfo();
        } else {
          openModalWhenCreatingFail('fail');
        }
      })
      .catch((e) => {
        console.log('링크 저장 실패 :', e);
        openModalWhenCreatingFail('error');
      });
  };
  return (
    <S.ModalWrapper>
      <Modal>
        <S.Contents>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <LinkTicketForm
              value={linkInfo}
              setValue={setLinkInfo}
              isFocusToTitleTextarea={isFocusToTitleTextarea}
              setIsFocusToTitleTextarea={setIsFocusToTitleTextarea}
            />
            {/* TODO : 태그, 상태 탭 이동 이슈 */}
            <TagsFieldset linkInfo={linkInfo} setLinkInfo={setLinkInfo} />
            <StatusFieldset linkInfo={linkInfo} setLinkInfo={setLinkInfo} />
            <div className="button-wrapper">
              <Button className="cancel" text="취소" onClick={onCancel} />
              <Button text="저장" type="submit" />
            </div>
          </form>
        </S.Contents>
      </Modal>
    </S.ModalWrapper>
  );
}
