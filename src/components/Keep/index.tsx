import * as S from './style';
import TextForm from '@/components/Form/TextForm';
import { openModalForAlert } from '@/redux/alertModal';
import getLinkTitle from '@/api/getLinkTitle';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Keep() {
  const alertModal = useAppSelector((state) => state.alertModal);
  const dispatch = useAppDispatch();
  const onSubmit = (value: string) => {
    let url;
    try {
      // 링크 유효성 검사
      url = new URL(value);
      console.log(url);
      // 링크 정보 가져오기
      getLinkTitle(value)
        .then((response) => {
          if (response.status === 'success') {
            // TODO : 링크 추가/수정 모달로 연결해야함!
            // 지금은 테스트를 위해 alertModal 띄움
            // 아 openModal이아니라 openModalForAlert네..
            dispatch(
              openModal({
                ...alertModal,
                isOpen: true,
                status: 'success',
                alert: <>제목 : {response.data.link.title}</>,
              }),
            );
          } else {
            // TODO : 버튼이 있는 모달 만들어야함!
            dispatch(
              openModal({
                ...alertModal,
                isOpen: true,
                status: response.status,
                alert: (
                  <>
                    url 정보를 가져올 수 없습니다.
                    <br />
                    직접 입력해서 저장해주세요.
                    <button>취소</button> <button>확인</button>
                  </>
                ),
              }),
            );
          }
        })
        .catch();
    } catch (e) {
      console.log('typeError 발생');
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

    //  /Link/getLinkTitle?url=
    //{"status":"success","message":"ok","data":{"link":{"title":"NAVER"}}}
  };
  return (
    <S.KeepSection id="keep-section">
      <TextForm
        className="point-button"
        placeholder="url을 저장하고 언제든 꺼내보세요"
        buttonText="KEEP"
        onSubmit={onSubmit}
      />
    </S.KeepSection>
  );
}
