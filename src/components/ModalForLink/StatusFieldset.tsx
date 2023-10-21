import { basicTheme } from '@/layouts/theme';
import { useState, useEffect } from 'react';
import * as S from './style';
import { LinkInfo } from '@/types';

type Props = {
  linkInfo: LinkInfo;
  setLinkInfo: (linkInfo: LinkInfo) => void;
};

export default function StatusFieldset({ linkInfo, setLinkInfo }: Props) {
  return (
    <S.StatusFieldset className="status">
      <legend>상태</legend>
      <span>상태</span>
      <div className="wrapper">
        <div>
          <div>
            <input type="radio" name="status" id="keep" checked={linkInfo.status === 'keep'} readOnly />
            <label
              htmlFor="keep"
              className="keep"
              onClick={() => {
                setLinkInfo({ ...linkInfo, status: 'keep' });
              }}
            >
              <IconCheck status="keep" isChecked={true} />
              <span>step1</span>
              <span>저장</span>
            </label>
          </div>
          <div>
            <input type="radio" name="status" id="keep-going" checked={linkInfo.status === 'keep-going'} readOnly />
            <label
              htmlFor="keep-going"
              className={`keep-going ${linkInfo.status !== 'keep' ? 'line' : ''}`}
              onClick={() => {
                setLinkInfo({ ...linkInfo, status: 'keep-going' });
              }}
            >
              <IconCheck status="keep-going" isChecked={linkInfo.status !== 'keep'} />
              <span>step2</span>
              <span>읽는 중</span>
            </label>
          </div>
          <div>
            <input type="radio" name="status" id="read" checked={linkInfo.status === 'read'} readOnly />
            <label
              htmlFor="read"
              className={`read ${linkInfo.status === 'read' ? 'line' : ''}`}
              onClick={() => {
                setLinkInfo({ ...linkInfo, status: 'read' });
              }}
            >
              <IconCheck status="read" isChecked={linkInfo.status === 'read'} />
              <span>step3</span>
              <span>완독</span>
            </label>
          </div>
        </div>
      </div>
    </S.StatusFieldset>
  );
}

type IconCheckProps = {
  status: 'keep' | 'keep-going' | 'read';
  isChecked: boolean;
};
function IconCheck({ status, isChecked }: IconCheckProps) {
  const { basicBg, basicGray, point2Bg, point2Line, point2, point } = basicTheme;
  const [iconColor, setIconColor] = useState([basicGray, basicBg]);
  useEffect(() => {
    setIconColor([basicGray, basicBg]);
    if (isChecked) {
      switch (status) {
        case 'keep':
          setIconColor([point2Line, point2Bg]);
          break;
        case 'keep-going':
          setIconColor([point2, point2Bg]);
          break;
        case 'read':
          setIconColor([point, point2Bg]);
          break;
        default:
          setIconColor([basicGray, basicBg]);
          break;
      }
    }
  }, [isChecked]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 31 31" fill="none">
      <rect x="1.7334" y="1.12988" width="28" height="28" rx="6" fill={iconColor[0]} />
      <path d="M7.44336 14.0096L13.7167 20.2829L24.0228 9.97681" stroke={iconColor[1]} strokeWidth="4" />
      <rect x="1.7334" y="1.12988" width="28" height="28" rx="6" stroke={iconColor[0]} strokeWidth="2" />
    </svg>
  );
}
