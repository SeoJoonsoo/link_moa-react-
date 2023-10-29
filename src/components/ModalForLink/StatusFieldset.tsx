import { basicTheme } from '@/layouts/theme';
import { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { LinkInfo, Status } from '@/types';

type CheckStep = {
  status: Status;
  className: string;
  step: number;
  label: string;
  isChecked: boolean;
};

type Props = {
  linkInfo: LinkInfo;
  setLinkInfo: (linkInfo: LinkInfo) => void;
};

export default function StatusFieldset({ linkInfo, setLinkInfo }: Props) {
  const checkSteps = useRef<CheckStep[]>([
    {
      status: 'keep',
      className: 'keep',
      step: 1,
      label: '저장',
      isChecked: true,
    },
    {
      status: 'keep-going',
      className: `keep-going ${linkInfo.status !== 'keep' ? 'line' : ''}`,
      step: 2,
      label: '읽는 중',
      isChecked: linkInfo.status !== 'keep',
    },
    {
      status: 'read',
      className: `read ${linkInfo.status === 'read' ? 'line' : ''}`,
      step: 3,
      label: '완독',
      isChecked: linkInfo.status === 'read',
    },
  ]);
  return (
    <S.StatusFieldset className="status">
      <legend>상태</legend>
      <span>상태</span>
      <div className="wrapper">
        <ul>
          {checkSteps.current.map((checkStep) => (
            <CheckInput linkInfo={linkInfo} setLinkInfo={setLinkInfo} checkStep={checkStep} />
          ))}
        </ul>
      </div>
    </S.StatusFieldset>
  );
}

type CheckInputProps = {
  linkInfo: LinkInfo;
  setLinkInfo: (linkInfo: LinkInfo) => void;
  checkStep: CheckStep;
};

function CheckInput({ linkInfo, setLinkInfo, checkStep }: CheckInputProps) {
  const { status, className, step, label, isChecked } = checkStep;
  return (
    <li>
      <input type="radio" name="status" id={status} checked={linkInfo.status === status} readOnly />
      <label
        htmlFor={status}
        className={className}
        onClick={() => {
          setLinkInfo({ ...linkInfo, status: status });
        }}
      >
        <IconCheck status={status} isChecked={isChecked} />
        <span>step{step}</span>
        <span>{label}</span>
      </label>
    </li>
  );
}

type IconCheckProps = {
  status: Status;
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
