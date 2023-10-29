import * as S from './style';
import arrowToUnder from '@/assets/images/ic-arrow__under.svg';
import { useState } from 'react';

type Props = {
  placeholder: string;
  list: string[];
  selectedItem?: string;
  setSelectedItem: (item: string) => void;
};

export default function Dropdown({ placeholder, list, selectedItem, setSelectedItem }: Props) {
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
    <S.DropwdownWrapper
      className="dropdown"
      onClick={(e) => {
        isExternalClickDetected(e.currentTarget);
      }}
    >
      <button
        className="dropdown__button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selectedItem ? <span>{selectedItem}</span> : <span className="placeholder">{placeholder}</span>}
        <img src={arrowToUnder} alt="arrow to under" />
      </button>
      <ul className={`dropwdown__list scroll-prettier ${isOpen && 'open'}`}>
        {list.map((item) => (
          <li key={item}>
            <button
              key={item}
              onClick={() => {
                setSelectedItem(item);
                setIsOpen(false);
              }}
            >
              #{item}
            </button>
          </li>
        ))}
      </ul>
    </S.DropwdownWrapper>
  );
}
