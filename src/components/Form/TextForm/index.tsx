import { useState } from 'react';
import * as S from './style';
import ICON_ALL_DELETE from '@/assets/images/ic-all-delete.svg';

// 텍스트인풋 + 버튼 으로 이루어진 폼
// 입력 시 [제출버튼]과 [전체 삭제 버튼]이 활성화됩니다
//  [제출버튼] default : 배경색=회색. disabled
//            활성화시 : 배경색=포인트색. disabled 해제
//  [전체 삭제 버튼] default : 숨김
//                  활성화시 : 버튼 아이콘 나타남

// className에 맞게 스타일을 적용합니다
// className에 아무것도 없을때 기본 스타일 :
//    input : 흰색
//    button : 글자색=검정, 배경색=회색, 폰트=fontR

// point-button : submit 버튼의 폰트를 pointFont로 적용합니다.

type Props = {
  className?: 'point-button';
  placeholder: string;
  buttonText: string;
  onSubmit: (value: string) => void;
};

export default function TextForm({ className, placeholder, buttonText, onSubmit }: Props) {
  const [value, setValue] = useState('');

  const onDeleteAll = () => {
    setValue('');
  };
  return (
    <S.Form
      className={className + (value !== '' ? 'isValue' : '')}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <div className="input-wrapper">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="all-delete-button"
          type="button"
          onClick={() => {
            onDeleteAll();
          }}
        >
          <img src={ICON_ALL_DELETE} alt="delete-icon" height={22} width={22} />
        </button>
      </div>
      <button type="submit" disabled={value === ''}>
        {buttonText}
      </button>
    </S.Form>
  );
}
