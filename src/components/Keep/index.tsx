import * as S from './style';
import TextInput from '@/components/Form/TextInput';
import { openModalForAlert } from '@/redux/alertModal';
import getLinkTitle from '@/api/link/getLinkTitle';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ModalForLink from '../ModalForLink';
import { useCallback, useRef, useState } from 'react';
import { EditLinkInfo } from '@/types';
import { closeModal, openModal } from '@/redux/modal';
import Button from '../Button';
import checkURLValidation from '@/util/checkURLValidation';

export default function Keep() {
  const initialLinkInfo = useRef<EditLinkInfo>({
    member_link_name: '',
    link_url: '',
    writer: '', // TODO : 백 구현 중
    writed_date: '0000-00-00', // TODO : 백 구현 중
    tags: [],
    status: 'keep', // TODO : 상태 저장 구현 기다림
  });
  const [linkInfo, setLinkInfo] = useState<EditLinkInfo>(initialLinkInfo.current);
  const [isOpenModalForLink, setIsOpenModalForLink] = useState(false);
  const alertModal = useAppSelector((state) => state.alertModal);
  const dispatch = useAppDispatch();
  const clearLinkInfo = useCallback(() => {
    setLinkInfo(initialLinkInfo.current);
  }, []);

  const onClickToKeepButton = useCallback(
    (value: string) => {
      const openModalWhenGettingTitleFail: () => void = () => {
        dispatch(
          openModal({
            isOpen: true,
            alert: (
              <>
                <div className="content-wrapper">
                  url 정보를 가져올 수 없습니다.
                  <br />
                  직접 입력해서 저장해주세요.
                </div>
                <div className="button-wrapper">
                  <Button
                    className="cancel"
                    text="취소"
                    onClick={() => {
                      dispatch(closeModal());
                      setLinkInfo(initialLinkInfo.current);
                      setIsOpenModalForLink(false);
                    }}
                  />
                  <Button
                    text="확인"
                    onClick={() => {
                      dispatch(closeModal());
                      setLinkInfo({ ...linkInfo, link_url: value });
                      setIsOpenModalForLink(true);
                    }}
                  />
                </div>
              </>
            ),
          }),
        );
      };
      if (checkURLValidation(value)) {
        // TODO : 링크 정보 조회 -> 조회값이 있으면
        // 저장된 정보를 링크 수정 모달에 출력
        // 아니면 새 링크 저장 모달 출력

        // 링크 정보 받아와서 링크 추가 모달 띄움
        getLinkTitle(value)
          .then((response) => {
            if (response.status === 'success' && response.data.link.title) {
              setLinkInfo({ ...linkInfo, member_link_name: response.data.link.title, link_url: value });
              setIsOpenModalForLink(true);
            } else {
              openModalWhenGettingTitleFail();
            }
          })
          .catch((/*e*/) => {
            // console.log('getLinkTitle Error: ', e);
            openModalWhenGettingTitleFail();
          });
      } else {
        dispatch(
          openModalForAlert({
            ...alertModal,
            isOpen: true,
            status: 'fail',
            alert: (
              <>
                잘못된 형식의 url입니다.
                <br />
                다시 시도해주세요
              </>
            ),
          }),
        );
      }
    },
    [linkInfo, alertModal],
  );

  return (
    <>
      <S.KeepSection id="keep-section">
        <TextInput
          className="point-button"
          placeholderText="url을 저장하고 언제든 꺼내보세요"
          buttonText="KEEP"
          onClick={onClickToKeepButton}
        />
      </S.KeepSection>
      {isOpenModalForLink && (
        <ModalForLink
          linkInfo={linkInfo}
          setLinkInfo={setLinkInfo}
          setIsOpen={setIsOpenModalForLink}
          clearLinkInfo={clearLinkInfo}
        />
      )}
    </>
  );
}
