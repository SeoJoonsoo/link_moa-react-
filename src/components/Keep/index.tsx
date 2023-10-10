import * as S from './style';
import TextForm from '@/components/Form/TextForm';

export default function Keep() {
  const onSubmit = () => {
    // TODO : 링크 저장 API 구현
  };
  return (
    <S.KeepSection id="keep-section">
      <TextForm
        className="point-button"
        placeholder="링크를 저장하고 언제든 꺼내보세요"
        buttonText="KEEP"
        onSubmit={onSubmit}
      />
    </S.KeepSection>
  );
}
