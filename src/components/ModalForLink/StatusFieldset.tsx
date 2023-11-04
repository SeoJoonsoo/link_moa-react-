import { basicTheme } from '@/layouts/theme';
import { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { EditMemberLinkInfo, LinkStatus } from '@/types';

type CheckStep = {
  status: LinkStatus;
  className: (currentStatus: LinkStatus) => string;
  step: number;
  label: string;
  isChecked: (currentStatus: LinkStatus) => boolean;
};

type Props = {
  linkInfo: EditMemberLinkInfo;
  setLinkInfo: (linkInfo: EditMemberLinkInfo) => void;
};

export default function StatusFieldset({ linkInfo, setLinkInfo }: Props) {
  const checkSteps = useRef<CheckStep[]>([
    {
      status: 'Saved',
      className: (_currentStatus) => {
        return 'keep';
      },
      step: 1,
      label: '저장',
      isChecked: (_currentStatus) => {
        return true;
      },
    },
    {
      status: 'In Progress',
      className: (currentStatus) => {
        return `keep-going ${currentStatus !== 'Saved' ? 'line' : ''}`;
      },
      step: 2,
      label: '읽는 중',
      isChecked: (currentStatus) => {
        return currentStatus !== 'Saved';
      },
    },
    {
      status: 'Completed',
      className: (currentStatus) => {
        return `read ${currentStatus === 'Completed' ? 'line' : ''}`;
      },
      step: 3,
      label: '완독',
      isChecked: (currentStatus) => {
        return currentStatus === 'Completed';
      },
    },
  ]);
  const [currentStatus, setCurrentStatus] = useState<LinkStatus>(linkInfo.member_link_status);

  useEffect(() => {
    setLinkInfo({ ...linkInfo, member_link_status: currentStatus });
  }, [currentStatus]);

  return (
    <S.StatusFieldset className="status">
      <legend>상태</legend>
      <span>상태</span>
      <div className="wrapper">
        <ul>
          {checkSteps.current.map((checkStep) => (
            <CheckInput checkStep={checkStep} currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} />
          ))}
        </ul>
      </div>
    </S.StatusFieldset>
  );
}

type CheckInputProps = {
  checkStep: CheckStep;
  currentStatus: LinkStatus;
  setCurrentStatus: (currentStatus: LinkStatus) => void;
};

function CheckInput({ checkStep, currentStatus, setCurrentStatus }: CheckInputProps) {
  const { status, className, step, label, isChecked } = checkStep;

  return (
    <li>
      <input type="radio" name="status" id={status} checked={currentStatus === status} readOnly />
      <label
        htmlFor={status}
        className={className(currentStatus)}
        onClick={() => {
          setCurrentStatus(status);
        }}
      >
        <IconCheck status={status} isChecked={isChecked(currentStatus)} />
        <span>step{step}</span>
        <span>{label}</span>
      </label>
    </li>
  );
}

type IconCheckProps = {
  status: LinkStatus;
  isChecked: boolean;
};
function IconCheck({ status, isChecked }: IconCheckProps) {
  const { basicBg, basicGray, point2Bg, point2Line, point2, point } = basicTheme;
  const [iconColor, setIconColor] = useState([basicGray, basicBg]);

  useEffect(() => {
    setIconColor([basicGray, basicBg]);
    if (isChecked) {
      switch (status) {
        case 'Saved':
          setIconColor([point2Line, point2Bg]);
          break;
        case 'In Progress':
          setIconColor([point2, point2Bg]);
          break;
        case 'Completed':
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
