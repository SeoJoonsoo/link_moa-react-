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
  placeholderText: string;
  buttonText: string;
  onClick: (value: string) => void;
  style?: { [attribute: string]: string };
  onChange?: (value: string) => string; // 값에 변화를 주고싶으면 onChange를 전달합니다
};

export default function TextForm({ className, placeholderText, buttonText, onClick, onChange, style }: Props) {
  const [value, setValue] = useState('');

  const onClickForSubmit = () => {
    onClick(value);
    onDeleteAll();
  };

  const onDeleteAll = () => {
    setValue('');
  };
  return (
    <S.Form className={className + (value !== '' ? 'isValue' : '')} style={style}>
      <div className="input-wrapper">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) {
              const newValue = onChange(e.target.value);
              newValue && setValue(newValue);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onClickForSubmit();
            }
          }}
        />
        <span className={`placeholder ${value.length !== 0 ? 'hidden' : ''}`}>{placeholderText}</span>
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
      <button
        className="submit-button"
        type="button"
        disabled={value === ''}
        onClick={() => {
          onClickForSubmit();
        }}
      >
        {buttonText}
      </button>
    </S.Form>
  );
}
