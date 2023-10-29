// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { jest } from '@jest/globals';
// import { MemoryRouter, Route, Routes } from 'react-router';
// import store from './redux/store';
// import { Provider } from 'react-redux';
// import AppLayout from './layouts/AppLayout';
// import Welcome from './pages/Welcome';
// import HomeLayout from './layouts/HomeLayout';
// import Keep from './components/Keep';
// import Read from './pages/Read';
// import All from './pages/All';

// jest.mock('@/constants', () => ({
//   ENVIRONMENT: 'development',
// }));

// jest.mock('axios', () => 'axios');

// describe('AppLayout', () => {
//   test('renders correctly', () => {
//     // 헤더 존재 확인
//     // 로그인 여부에 따라 로그아웃 버튼 유무 확인
//     const route = '/';
//     render(
//       <Provider store={store}>
//         <MemoryRouter initialEntries={[route]}>
//           <Routes>
//             <Route element={<AppLayout />}>
//               <Route element={<HomeLayout />}>
//                 <Route path="/" element={<Keep />} />
//                 <Route path="/read" element={<Read />} />
//                 <Route path="/all" element={<All />} />
//               </Route>
//               {/* <Route path="/index.php/welcome" element={<Welcome />} /> */}
//               <Route path="/welcome" element={<Welcome />} />
//             </Route>
//           </Routes>
//         </MemoryRouter>
//       </Provider>,
//     );
//     const mainPage = screen.getByText('로그인');
//     expect(mainPage).toBeInTheDocument();
//   });
// });

// // 💖App
// test.skip('로그인 시, 메인페이지로 리다이렉션', () => {
//   // Arrage
//   // Act
//   // Assert 이전 버튼에 .disabled 존재 확인
// });
// test.skip('로그아웃 시, 웰컴페이지로 리다이렉션', () => {
//   // Arrage
//   // Act
//   // Assert 이전 버튼에 .disabled 존재 확인
// });

// // 💚로그인 페이지 - 인풋
// test.skip('로그인 텍스트, 아이디, 패스워드 입력 인풋 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('아이디가 입력되지 않으면, 로그인 버튼 비활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('비밀번호가 8자 미만이면, 로그인 버튼 비활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert '비밀번호를 8자 이상 입력해주세요'
// });
// test.skip('아이디와 비밀번호가 입력되고, 비밀번호가 8자 이상이면 로그인 버튼 활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💚로그인 페이지 - 버튼
// test.skip('로그인, 회원가입 버튼 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert '로그인 성공! 반가워요'
// });
// test.skip('회원가입 버튼 클릭 시, 로그인 페이지 보여줌', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('로그인 버튼 클릭 후 로그인 성공시, 로그인 성공 모달 띄우고 메인페이지로 이동', () => {
//   // Arrage
//   // Act
//   // Assert '로그인 성공! 반가워요'
// });
// test.skip('로그인 버튼 클릭 후 로그인 실패시, 로그인 실패 메시지 띄움', () => {
//   // Arrage
//   // Act
//   // Assert '아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해주세요'
// });

// // 💙회원가입 페이지 - 인풋
// test.skip('회원가입 텍스트, 아이디, 패스워드 입력 인풋 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('아이디가 6자 미만이면, 회원가입 버튼 비활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert '아이디를 6자 이상 입력해주세요'
// });
// test.skip('아이디가 6자 이상인데 중복이면, 회원가입 버튼 활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert  '이미 사용중이 아이디입니다'
// });
// test.skip('비밀번호가 8자 미만이면, 회원가입 버튼 비활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert '비밀번호를 8자 이상 입력해주세요'
// });
// test.skip('아이디가 6자 이상이고 비밀번호가 8자 이상이면, 회원가입 버튼 활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💙회원가입 페이지 - 버튼
// test.skip('회원가입 버튼 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert '로그인 성공! 반가워요'
// });
// test.skip('회원가입 버튼 클릭 후, 회원가입 성공시, 회원가입 성공 모달 띄우고 메인페이지로 이동', () => {
//   // Arrage
//   // Act
//   // Assert '회원가입 완료! 반가워요'
// });
// test.skip('회원가입 버튼 클릭 후, 회원가입 실패시, 회원가입 실패 메시지 띄움', () => {
//   // Arrage
//   // Act
//   // Assert '오 이런, 문제가 생겼어요. 다시 시도해주세요'
// });

// // 💜메인 페이지 - 헤더
// test.skip('헤더에 로그아웃 버튼 존재', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('로그아웃 버튼 클릭 시, 로그아웃 모달 띄움', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 로그아웃 모달
// test.skip('로그아웃 텍스트, 네, 아니오 버튼 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('모달영역 밖 클릭 시, 모달 닫힘', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('아니오 버튼 클릭 시, 모달 닫힘', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('네 버튼 클릭 시, 로그아웃되어 웰컴 페이지로 이동함', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - KEEP 인풋
// test.skip('인풋, placeholder, 버튼 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('인풋에 텍스트가 없으면, 텍스트 전체 삭제 버튼과 KEEP 버튼이 비활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('인풋에 텍스트가 있으면, 텍스트 전체 삭제 버튼과 KEEP 버튼이 활성화됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('KEEP 버튼 클릭 시, 링크 추가 모달 띄움', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 링크 추가/수정 모달
// test.skip('링크 정보가 로딩되지 않았으면, 스켈레톤 UI 띄우고 수정이 불가능함', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('링크 정보가 로딩되면, 정보가 출력되고 수정이 가능함', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 링크 추가/수정 모달 - 태그 - 태그 인풋
// test.skip('태그 인풋에 텍스트가 없으면, 추가버튼 비활성화', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('태그 인풋에 텍스트가 있으면, 추가버튼 활성화', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('태그 인풋 이미 있는 태그라면, 추가버튼 비활성화', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('태그 인풋에 텍스트가 있고 태그 추가 버튼 클릭 시, 해당 태그가 태그 Form과 링크 카드에 추가됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 링크 추가/수정 모달 - 태그 - 태그 드롭박스
// test.skip('기존 태그가 없을 시, 태그 드롭박스 존재 안함', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('기존 태그가 있으면, 태그 드롭박스 존재함', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('기존 태그가 있고 태그 드롭박스 클릭 시, 태그 드롭박스 아이템 리스트가 펼쳐짐', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('태그 드롭박스 아이템 클릭 시, 태그 Form과 링크 카드에 추가됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('태그 드롭박스 아이템 중 태그 인풋 이미 있는 아이템이면, 추가 버튼 비활성화', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 링크 추가/수정 모달 - 태그 - 태그 리스트
// test.skip('태그 삭제 버튼 클릭 시, 해당 태그가 태그 Form과 링크 카드에서 삭제됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 링크 추가/수정 모달 - 상태
// test.skip('저장, 읽는 중, 완독 버튼 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('상태 정보가 없다면, 저장 버튼 활성화 됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('상태 정보가 있다면, 그 정보에 해당하는 상태로 상태 버튼과 링크 티켓 디자인이 적용됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('읽는중 버튼 클릭 시, 저장, 읽는중 버튼 체크되고 읽는중 링크 티켓 디자인이 적용됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('완독 버튼 클릭 시, 저장, 읽는중, 완독 버튼 체크되고 완독 링크 티켓 디자인이 적용됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('저장 버튼 클릭 시, 저장 버튼만 체크됨되고 저장 링크 티켓 디자인이 적용됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 링크 추가/수정 모달 - 버튼
// test.skip('취소 버튼 클릭 시, 취소 확인 모달 띄움', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('저장 버튼 클릭 후 저장 성공 시, 저장 완료 모달 띄우고 닫히고 새 링크 티켓이 메인페이지의 새 글에 추가됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - 링크 추가/수정 모달 - 취소 모달
// test.skip('취소, 아니요, 네 버튼 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('아니요 클릭 시, 취소 모달 닫힘', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('네 클릭 시, 취소 모달과 링크 추가/수정 모달이 닫히고 정보 초기화함', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - KEEP GOING 영역(읽는 중 글 리스트)
// test.skip('읽는 중인 글이 있다면, 영역 출력하고 KEEP GOING과 글이 있음', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('읽는 중인 글이 없다면, 영역 숨김', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('KEEP GOING 영역 높이 90% 이상 스크롤 시, 읽는 중인 글 추가 요청', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - ALL 영역(모든 글 리스트)
// test.skip('ALL 텍스트, 새글, 읽는 중인 글, 모든 글 탭, 버튼 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - ALL 영역(모든 글 리스트) - 새 글 탭 보여짐
// test.skip('새 글 탭 비활성화, 읽는 중인 글, 모든 글 탭 활성화 확인하고 새 글 영역이 보여지고 있는지 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('새 글에 글이 없다면, 글 없음 메시지 띄움', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('새 글에 글이 있다면, 링크 티켓이 있음', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// // 💜메인 페이지 - ALL 영역(모든 글 리스트) - 읽는 중인 글 탭 보여짐
// test.skip('읽는 중인 글 클릭 시, 읽는 중인 글 탭 비활성화, 새 글, 모든 글 탭 활성화되고 읽는 중인 글 영역 보여짐', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('읽는 중인 글에 글이 없다면, 글 없음 메시지 띄움', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('읽는 중인 글에 글이 있다면, 링크 티켓이 있음', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// // 💜메인 페이지 - ALL 영역(모든 글 리스트) - 모든 글 탭 보여짐
// test.skip('모든 글 클릭 시, 모든 글 탭 비활성화, 새 글, 읽는 중인 글 탭 활성화되고 모든 글 영역 보여짐', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('모든 글이 보여지고 있다면, 최근 저장 순, 태그별 모음 버튼과 검색 인풋 존재 확인', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('최근 저장 순 버튼이 비활성화, 태그별 모음 버튼이 활성화 된 상태로 최근 저장 순 영역이 보임', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('최근 저장 순 버튼이 활성화된 상태로 모든 글에 글이 없다면, 글 없음 메시지 띄움', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('최근 저장 순 버튼이 활성화된 상태로 모든 글에 글이 있다면, 날짜별로 링크 티켓이 출력됨', () => {
//   // Arrage
//   // Act
//   // Assert
// });
// test.skip('태그별 모음 버튼이 클릭 시, 태그별 모음 버튼이 비활성화되고, 최근 저장 순 버튼이 활성화되며 태그별 모음 영역이 보임', () => {
//   // Arrage
//   // Act
//   // Assert
// });

// 💌 링크 티켓 컴포넌트

// test.skip('테스트 조건', () => {
//   // Arrage
//   // Act
//   // Assert
// });
