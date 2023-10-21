import * as S from './style';
import TextInput from '@/components/Form/TextInput';
import { openModalForAlert } from '@/redux/alertModal';
import getLinkTitle from '@/api/getLinkTitle';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ModalForLink from '../ModalForLink';
import { useState } from 'react';
import { LinkInfo } from '@/types';
import { closeModal, openModal } from '@/redux/modal';
import Button from '../Button';

const initialLinkInfo: LinkInfo = {
  id: null,
  title: '',
  url: '',
  writer: 'TODO : 작성자 정보 가져오기',
  writeDate: '0000.00.00', // TODO : 작성 날짜정보 가져오기
  tags: [],
  createdAt: '',
  updatedAt: null,
  status: 'keep', // TODO : 상태 저장 구현 기다림
};

export default function Keep() {
  const [isOpenModalForLink, setIsOpenModalForLink] = useState(false);
  const alertModal = useAppSelector((state) => state.alertModal);
  const [linkInfo, setLinkInfo] = useState<LinkInfo>(initialLinkInfo);
  const dispatch = useAppDispatch();
  const setLinkInfoClear = () => {
    setLinkInfo(initialLinkInfo);
  };

  const onClickToKeepButton = (value: string) => {
    const checkURLValidation = (url: string) => {
      try {
        // 링크 유효성 검사
        /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)
          ? new URL(url)
          : new URL('잘못된 url');
        return true;
      } catch (e) {
        return false;
      }
    };

    if (checkURLValidation(value)) {
      // TODO : 링크 정보 조회 -> 조회값이 있으면
      // 저장된 정보를 링크 수정 모달에 출력
      // 아니면 새 링크 저장 모달 출력

      // 링크 정보 받아와서 링크 추가 모달 띄움
      getLinkTitle(value)
        .then((response) => {
          if (response.status === 'success' && response.data.link.title) {
            setLinkInfo({ ...linkInfo, title: response.data.link.title, url: value });
            setIsOpenModalForLink(true);
          } else {
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
                          setLinkInfo(initialLinkInfo);
                          setIsOpenModalForLink(false);
                        }}
                      />
                      <Button
                        text="확인"
                        onClick={() => {
                          dispatch(closeModal());
                          setLinkInfo({ ...linkInfo, url: value });
                          setIsOpenModalForLink(true);
                        }}
                      />
                    </div>
                  </>
                ),
              }),
            );
          }
        })
        .catch((e) => {
          console.log('url 정보 가져올 수 없음: ', e);
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
                        setIsOpenModalForLink(false);
                        setLinkInfo(initialLinkInfo);
                      }}
                    />
                    <Button
                      text="확인"
                      onClick={() => {
                        dispatch(closeModal());
                        setLinkInfo({ ...linkInfo, url: value });
                        setIsOpenModalForLink(true);
                      }}
                    />
                  </div>
                </>
              ),
            }),
          );
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
  };
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
          setLinkInfoClear={setLinkInfoClear}
        />
      )}
    </>
  );
}
