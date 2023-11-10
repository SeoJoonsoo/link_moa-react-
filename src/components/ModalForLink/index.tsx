import * as S from './style';
import Modal from '../Modal';
import LinkTicketForm from '../LinkTicketForm';
import { EditMemberLinkInfo, Tag } from '@/types';
import TagsFieldset from './TagsFieldset';
import StatusFieldset from './StatusFieldset';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeModal, openModal } from '@/redux/modal';
import { useState, useEffect } from 'react';
import { updateMemberLinks } from '@/redux/memberLinks';
import { openModalForAlert } from '@/redux/alertModal';
import memberLink from '@/api/link/memberLink';

// https://github.com/SeoJoonsoo/link_moa-react-/issues/2
// 위 문서의 ModalForLink 참고

type Props = {
  initialLinkInfo: EditMemberLinkInfo;
  linkInfo: EditMemberLinkInfo;
  setLinkInfo: (linkInfo: EditMemberLinkInfo) => void;
  setIsOpen: (isOpen: boolean) => void;
  clearLinkInfo: () => void;
};

export default function ModalForLink({ initialLinkInfo, linkInfo, setLinkInfo, setIsOpen, clearLinkInfo }: Props) {
  const [isFocusToTitleTextarea, setIsFocusToTitleTextarea] = useState(false);
  const memberLinks = useAppSelector((state) => state.memberLinks.linkInfo);
  const dispatch = useAppDispatch();

  const isChanged = () => {
    const initialValue: [string, string, Tag[]] = [
      initialLinkInfo.member_link_name,
      initialLinkInfo.member_link_status,
      initialLinkInfo.tags,
    ];
    const currentValue: [string, string, Tag[]] = [
      linkInfo.member_link_name,
      linkInfo.member_link_status,
      linkInfo.tags,
    ];
    if (
      initialValue[0] !== currentValue[0] ||
      initialValue[1] !== currentValue[1] ||
      JSON.stringify(initialValue[2]) !== JSON.stringify(currentValue[2])
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onDelete = (member_link_id: string) => {
    dispatch(
      openModal({
        isOpen: true,
        alert: (
          <>
            <div className="content-wrapper">정말 삭제하시겠습니까?</div>
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
                onClick={async () => {
                  const deleteResponse = await memberLink.delete(member_link_id);
                  if (deleteResponse.status === 'success') {
                    dispatch(
                      openModalForAlert({
                        status: 'success',
                        alert: '삭제되었습니다',
                      }),
                    );
                    dispatch(
                      updateMemberLinks(memberLinks.filter((linkInfo) => linkInfo.member_link_id !== member_link_id)),
                    );
                    dispatch(closeModal());
                    setIsOpen(false);
                    clearLinkInfo();
                  } else if (deleteResponse.status === 'fail') {
                    dispatch(
                      openModalForAlert({
                        status: 'fail',
                        alert: '삭제 중 오류가 발생했습니다',
                      }),
                    );
                  } else {
                    dispatch(
                      openModalForAlert({
                        status: 'error',
                        alert: '삭제 중 내부 오류가 발생했습니다',
                      }),
                    );
                  }
                }}
              />
            </div>
          </>
        ),
      }),
    );
  };
  const onCancel = () => {
    if (isChanged()) {
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
    } else {
      setIsOpen(false);
      clearLinkInfo();
    }
  };
  const onSubmit = async () => {
    // valid
    if (linkInfo.member_link_name === '') {
      setIsFocusToTitleTextarea(true);
      return;
    }

    // TODO : 제출 후 응답돌아올때까지 로딩 화면 출력하기

    if (isChanged()) {
      const response = await memberLink.createOrUpdate(linkInfo);
      if (response.status === 'success') {
        dispatch(
          openModalForAlert({
            status: 'success',
            alert: '저장되었습니다',
          }),
        );
        dispatch(updateMemberLinks(response.data.memberLinks));
        setIsOpen(false);
        clearLinkInfo();
      } else if (response.status === 'fail') {
        dispatch(
          openModalForAlert({
            status: 'fail',
            alert: '저장 중 오류가 발생했습니다',
          }),
        );
      } else {
        dispatch(
          openModalForAlert({
            status: 'error',
            alert: '저장 중 내부 오류가 발생했습니다',
          }),
        );
      }
    } else {
      dispatch(
        openModalForAlert({
          status: 'success',
          alert: '수정된 내용이 없습니다',
        }),
      );
      setIsOpen(false);
      clearLinkInfo();
    }
  };

  useEffect(() => {
    linkInfo.member_link_name.length > 0 ? setIsFocusToTitleTextarea(false) : setIsFocusToTitleTextarea(true);
  }, []);

  return (
    <S.ModalWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
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
              {linkInfo.member_link_id && (
                <Button
                  type="button"
                  className="cancel"
                  text="삭제"
                  onClick={() => {
                    onDelete(linkInfo.member_link_id!);
                  }}
                />
              )}
              <Button type="button" className="cancel" text="취소" onClick={onCancel} />
              <Button text={linkInfo.member_link_id ? '수정' : '저장'} type="submit" />
            </div>
          </form>
        </S.Contents>
      </Modal>
    </S.ModalWrapper>
  );
}
