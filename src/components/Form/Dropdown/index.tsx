import * as S from './style';
import arrowToUnder from '@/assets/images/ic-arrow__under.svg';
import { useState } from 'react';

type Props = {
  disabled?: boolean; // 비활성화 상태를 출력하고싶으면 사용
  placeholderWhenDisabled?: string; // 비활성화 상태 때 출력될 placeholder
  placeholder: string;
  list: string[];
  selectedItem?: string; // 선택된 아이템이 표시되어야 한다면 이 값을 사용
  setSelectedItem: (item: string) => void;
};

export default function Dropdown({
  disabled = false,
  placeholderWhenDisabled = '',
  placeholder,
  list,
  selectedItem,
  setSelectedItem,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const isExternalClickDetected = (target: HTMLElement): void => {
    const handleExternalClick = (e: MouseEvent) => {
      if (!target.contains(e.target as Node)) {
        setIsOpen(false);
        window.removeEventListener('mousedown', handleExternalClick);
      }
    };
    if (!isOpen) {
      window.addEventListener('mousedown', handleExternalClick);
      setIsOpen(true);
    }
  };

  return (
    <>
      {disabled ? (
        // 요청 에러로 인해 목록을 가져올 수 없을때
        <S.DropwdownWrapper
          className="dropdown"
          onClick={(e) => {
            isExternalClickDetected(e.currentTarget);
          }}
        >
          <button type="button" className="dropdown__button" style={{ backgroundColor: '#fee9e9' }}>
            <span className="placeholder" style={{ color: '#FE4949' }}>
              {placeholderWhenDisabled}
            </span>
            <img src={arrowToUnder} alt="arrow to under" style={{ visibility: 'hidden' }} />
          </button>
        </S.DropwdownWrapper>
      ) : (
        // 목록을 가져왔을 때
        <S.DropwdownWrapper
          className="dropdown"
          onClick={(e) => {
            isExternalClickDetected(e.currentTarget);
          }}
        >
          <button
            type="button"
            className="dropdown__button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {selectedItem ? <span>{selectedItem}</span> : <span className="placeholder">{placeholder}</span>}
            <img src={arrowToUnder} alt="arrow to under" />
          </button>
          <ul className={`dropwdown__list scroll-prettier ${isOpen && 'open'}`}>
            {list.reduce(
              (acc, item) => {
                return (
                  <>
                    <li key={item}>
                      <button
                        type="button"
                        key={item}
                        onClick={() => {
                          setSelectedItem(item);
                          setIsOpen(false);
                        }}
                      >
                        #{item}
                      </button>
                    </li>
                    {acc}
                  </>
                );
              },
              <></>,
            )}
          </ul>
        </S.DropwdownWrapper>
      )}
    </>
  );
}
