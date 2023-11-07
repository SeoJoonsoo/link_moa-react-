import * as S from './style';
import TextInput from '@/components/Form/TextInput';
import { openModalForAlert } from '@/redux/alertModal';
import getLinkTitle from '@/api/link/getLinkTitle';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ModalForLink from '../ModalForLink';
import { useCallback, useRef, useState } from 'react';
import { EditMemberLinkInfo, LinkInfo } from '@/types';
import { closeModal, openModal } from '@/redux/modal';
import Button from '../Button';
import checkURLValidation from '@/util/checkURLValidation';
import { getLinkInfo } from '@/api/link/getLinkInfo';
import { findLinkInfo, memberLinkInfos } from '@/redux/memberLinks';

export default function Keep() {
  const initialLinkInfo = useRef<EditMemberLinkInfo>({
    member_link_name: '',
    link_url: '',
    writer: '', // TODO : 백 구현 중
    writed_date: '0000-00-00', // TODO : 백 구현 중
    tags: [],
    member_link_status: 'Saved',
  });
  const [linkInfo, setLinkInfo] = useState<EditMemberLinkInfo>(initialLinkInfo.current);
  const [isOpenModalForLink, setIsOpenModalForLink] = useState(false);
  const alertModal = useAppSelector((state) => state.alertModal);
  const memberLinks = useAppSelector(memberLinkInfos);
  const dispatch = useAppDispatch();
  const clearLinkInfo = useCallback(() => {
    setLinkInfo(initialLinkInfo.current);
  }, []);

  const onClickToKeepButton = useCallback(
    (url: string) => {
      if (checkURLValidation(url)) {
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
                        setLinkInfo({ ...linkInfo, link_url: url });
                        setIsOpenModalForLink(true);
                      }}
                    />
                  </div>
                </>
              ),
            }),
          );
        };
        const openModalWhenExistingSavedLinkInfo: (savedLinkInfo: LinkInfo) => void = (savedLinkInfo) => {
          console.log('memberLinks: ', memberLinks, 'saved: ', savedLinkInfo);
          dispatch(
            openModal({
              isOpen: true,
              alert: (
                <>
                  <div className="content-wrapper">
                    이미 저장된 링크입니다
                    <br />
                    수정하시겠습니까?
                  </div>
                  <div className="button-wrapper">
                    <Button
                      className="cancel"
                      text="아니오"
                      onClick={() => {
                        dispatch(closeModal());
                        setLinkInfo(initialLinkInfo.current);
                        setIsOpenModalForLink(false);
                      }}
                    />
                    <Button
                      text="네"
                      onClick={() => {
                        dispatch(closeModal());
                        // memberLinks에서 링크 정보를 찾아 수정 모달 띄움
                        const existingLinkInfo = findLinkInfo(memberLinks, savedLinkInfo.link_id);
                        console.log(existingLinkInfo);
                        if (existingLinkInfo) {
                          // TODO: writer, writed_date 백 구현 시 추가해야함
                          const {
                            member_link_id,
                            member_link_name,
                            link_url,
                            member_link_status,
                            tags,
                            /* writer, writed_date */
                          } = existingLinkInfo;
                          setLinkInfo({
                            ...linkInfo,
                            member_link_id,
                            member_link_name,
                            link_url,
                            member_link_status,
                            tags,
                            /* 
                            writer,
                            writed_date, 
                            */
                          });
                          setIsOpenModalForLink(true);
                        } else {
                          dispatch(
                            openModalForAlert({
                              ...alertModal,
                              isOpen: true,
                              status: 'fail',
                              alert: (
                                <>
                                  해당 링크 정보 조회에 실패했습니다.
                                  <br />
                                  다시 시도해주세요
                                </>
                              ),
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
        // 저장된 사용자 링크 정보 조회
        getLinkInfo(url)
          .then((response) => {
            if (response.data.linkInfo !== null) {
              // 조회값이 있으면 저장된 정보를 링크 수정 모달에 출력
              openModalWhenExistingSavedLinkInfo(response.data.linkInfo);
            } else {
              // 아니면 링크 타이틀 정보 받아와서 링크 추가 모달 띄움
              getLinkTitle(url)
                .then((response) => {
                  if (response.status === 'success' && response.data.link.title) {
                    setLinkInfo({ ...linkInfo, member_link_name: response.data.link.title, link_url: url });
                    setIsOpenModalForLink(true);
                  } else {
                    openModalWhenGettingTitleFail();
                  }
                })
                .catch((/*e*/) => {
                  // console.log('getLinkTitle Error: ', e);
                  openModalWhenGettingTitleFail();
                });
            }
          })
          .catch(() => {
            dispatch(
              openModalForAlert({
                ...alertModal,
                isOpen: true,
                status: 'fail',
                alert: (
                  <>
                    링크 정보 조회에 실패했습니다.
                    <br />
                    다시 시도해주세요
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
    },
    [linkInfo, alertModal, memberLinks],
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
