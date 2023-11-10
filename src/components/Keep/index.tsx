import * as S from './style';
import TextInput from '@/components/Form/TextInput';
import { openModalForAlert } from '@/redux/alertModal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ModalForLink from '../ModalForLink';
import { useCallback, useRef, useState } from 'react';
import { EditMemberLinkInfo } from '@/types';
import { closeModal, openModal } from '@/redux/modal';
import Button from '../Button';
import checkURLValidation from '@/util/checkURLValidation';
import { memberLinkInfos } from '@/redux/memberLinks';
import link from '@/api/link/link';

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
    async (url: string) => {
      if (!checkURLValidation(url)) {
        dispatch(
          openModalForAlert({
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
        return false;
      }

      // 저장된 사용자 링크 정보 조회
      const responseOfLinkInfo = await link.getInfo(url);
      const savedLinkInfo = responseOfLinkInfo.data.linkInfo;
      if (responseOfLinkInfo.status === 'success' && savedLinkInfo !== null) {
        // 저장된 정보가 있다면 수정 모달로 유도함
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
                      // TODO: writer, writed_date 백 구현 시 추가해야함
                      const {
                        member_link_id,
                        member_link_name,
                        link_url,
                        member_link_status,
                        tags,
                        /* writer, writed_date */
                      } = savedLinkInfo;
                      setLinkInfo({
                        ...linkInfo,
                        member_link_id,
                        member_link_name,
                        link_url,
                        member_link_status,
                        tags,
                        /* writer, writed_date */
                      });
                      setIsOpenModalForLink(true);
                    }}
                  />
                </div>
              </>
            ),
          }),
        );
        return true;
      } else if (responseOfLinkInfo.status !== 'success') {
        dispatch(
          openModalForAlert({
            status: 'error',
            alert: (
              <>
                링크 정보 조회에 실패했습니다.
                <br />
                다시 시도해주세요
              </>
            ),
          }),
        );
        return false;
      }

      // 저장된 정보가 없다면 링크 타이틀 정보 받아와서 링크 추가 모달 띄움
      const linkTitle = await link.getTitle(url);

      if (linkTitle) {
        setLinkInfo({ ...linkInfo, member_link_name: linkTitle, link_url: url });
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
