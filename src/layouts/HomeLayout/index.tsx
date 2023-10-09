import * as S from './style';
import TextForm from '@/components/Form/TextForm';
import { useEffect, useState } from 'react';
import { LinkInfo } from '@/types';
import KeepGoingSection from './KeepGoingSection';
import ListSection from './ListSection';

const dummyForKeepGoing: LinkInfo[] = [
  {
    title: '우아한 수다 타임에 작은 기여하기',
    url: 'https://www.naver.com/',
    writer: 'Stories by 송요창 on Medium',
    writeDate: '2023.09.11',
    tags: ['우수타'],
    createdAt: '0000.00.00',
    updatedAt: '0000.00.00',
    status: false,
  },
  {
    title: '[발표] 개발자의 학과 습',
    url: 'https://www.google.co.kr/',
    writer: 'Korean FE article',
    writeDate: '2023.09.12',
    tags: ['학습', '개발'],
    createdAt: '0000.00.00',
    updatedAt: '0000.00.00',
    status: false,
  },
  {
    title: '타이틀이다 길면 줄이기! 우선 길게 써야지 테스트해야하니까',
    url: 'https://ryusoo-h.github.io/myBoard/code-drawer/?post=post2',
    writer: '이름이 길수도 있죠 영어일수도있고 길수도있고',
    writeDate: '2023.10.09',
    tags: ['테스트', 'UI_뚝딱뚝딱', '태그', '개수', '늘리기'],
    createdAt: '0000.00.00',
    updatedAt: '0000.00.00',
    status: false,
  },
  {
    title: '우아한 수다 타임에 작은 기여하기',
    url: 'https://www.naver.com/',
    writer: 'Stories by 송요창 on Medium',
    writeDate: '2023.09.11',
    tags: ['우수타'],
    createdAt: '0000.00.00',
    updatedAt: '0000.00.00',
    status: false,
  },
  {
    title: '타이틀이다 길면 줄이기! 우선 길게 써야지 테스트해야하니까',
    url: 'https://ryusoo-h.github.io/myBoard/code-drawer/?post=post2',
    writer: '이름이 길수도 있죠 영어일수도있고 길수도있고',
    writeDate: '2023.10.09',
    tags: ['테스트', 'UI_뚝딱뚝딱', '안녕_이제_졸린듯', '시리얼_냠냠', '태그', '개수', '늘리기', '22222'],
    createdAt: '0000.00.00',
    updatedAt: '0000.00.00',
    status: false,
  },
];

const dummy: LinkInfo[] = [
  {
    title: '우아한 수다 타임에 작은 기여하기',
    url: 'https://www.naver.com/',
    writer: 'Stories by 송요창 on Medium',
    writeDate: '2023.09.11',
    tags: ['우수타'],
    createdAt: '0000.00.00',
    updatedAt: null,
    status: false,
  },
  {
    title: '[발표] 개발자의 학과 습',
    url: 'https://www.google.co.kr/',
    writer: 'Korean FE article',
    writeDate: '2023.09.12',
    tags: ['학습', '개발'],
    createdAt: '0000.00.00',
    updatedAt: '0000.00.00',
    status: false,
  },
  {
    title: '타이틀이다 길면 줄이기! 우선 길게 써야지 테스트해야하니까',
    url: 'https://ryusoo-h.github.io/myBoard/code-drawer/?post=post2',
    writer: '이름이 길수도 있죠 영어일수도있고 길수도있고',
    writeDate: '2023.10.09',
    tags: ['테스트', 'UI_뚝딱뚝딱', '안녕_이제_졸린듯', '시리얼_냠냠', '태그', '개수', '늘리기', '22222'],
    createdAt: '0000.00.00',
    updatedAt: '0000.00.00',
    status: true,
  },
];

export default function HomeLayout() {
  const [keepGoingLinks, setKeepGoingLinks] = useState<LinkInfo[]>([]);

  useEffect(() => {
    setKeepGoingLinks(dummyForKeepGoing); // TODO : 실제 데이터 받아와야함
    // setKeepGoingLinks([]); // keepGoing 데이터 없을때
  }, []);
  const onSubmit = () => {
    // TODO : 링크 저장 API 구현
  };
  return (
    <>
      <S.KeepSection id="keep-section">
        <TextForm
          className="point-button"
          placeholder="링크를 저장하고 언제든 꺼내보세요"
          buttonText="KEEP"
          onSubmit={onSubmit}
        />
      </S.KeepSection>
      {/* KEEP GOING section : 읽는 중인 링크 목록이 있으면 출력 */}
      {keepGoingLinks.length !== 0 && <KeepGoingSection links={keepGoingLinks} />}
      {/* LIST section : 새 글/읽은 글/모든 글 중 출력 (페이지에 해당함)  */}
      <ListSection />
    </>
  );
}
