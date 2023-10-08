import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Welcome from '.';
import { MemoryRouter, Route, Routes } from 'react-router';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

describe('Welcome', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>,
    );

    const signInButton = screen.getByText('로그인하기');
    const signUpButton = screen.getByText('회원가입');

    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});

// 💛웰컴 페이지 - 슬라이드
test.skip('첫번째 슬라이드일 때, 이전 버튼 비활성화', () => {
  // Arrage
  // Act
  // Assert 이전 버튼에 .disabled 존재 확인
});
test.skip('마지막 슬라이드일 때, 다음 버튼 비활성화', () => {
  // Arrage
  // Act
  // Assert 다음 버튼에 .disabled 존재 확인
});
test.skip('다음 버튼 클릭 시 다음 슬라이드 보여줌', () => {
  // Arrage
  // Act
  // Assert 현재 슬라이드 1 -> 2
});
test.skip('이전 버튼 클릭 시, 이전 슬라이드 보여줌', () => {
  // Arrage
  // Act
  // Assert 현재 슬라이드 2 -> 1
});

test.skip('첫번째 슬라이드일 때, 오른쪽으로 스와이프 비활성화', () => {
  // Arrage
  // Act
  // Assert
});
test.skip('마지막 슬라이드일 때, 왼쪽으로 스와이프 비활성화', () => {
  // Arrage
  // Act
  // Assert
});
test.skip('왼쪽으로 스와이프 시 다음 슬라이드 보여줌', () => {
  // Arrage
  // Act
  // Assert 현재 슬라이드 1 -> 2
});
test.skip('오른쪽으로 스와이프 시, 이전 슬라이드 보여줌', () => {
  // Arrage
  // Act
  // Assert 현재 슬라이드 2 -> 1
});

// 💛웰컴 페이지 - 로그인 버튼 영역(임시)
test('로그인하기 버튼 클릭 시, 로그인 페이지 보여줌', async () => {
  // Arrage
  const route = '/welcome';
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </MemoryRouter>,
  );

  // Act
  const SignInButton = screen.getByTestId('sign-in-button');
  userEvent.click(SignInButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByTestId('sign-in-section')).toBeInTheDocument();
  });
});

test('회원가입 버튼 클릭 시, 회원가입 페이지 보여줌', async () => {
  // Arrage
  const route = '/welcome';
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </MemoryRouter>,
  );

  // Act
  const SignUpButton = screen.getByTestId('sign-up-button');
  fireEvent.click(SignUpButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByTestId('sign-up-section')).toBeInTheDocument();
  });
});
