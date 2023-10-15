import axios from 'axios';

type Response = {
  isLogin: boolean;
  status: string;
  message: string;
};

export default async function logOut() {
  const data: Response = await axios
    .get(`${import.meta.env.VITE_API_ROOT}/member/logout`)
    .then((response) => {
      if (response.data.status === 'success') {
        console.log('로그아웃 성공', response.data);
      } else if (response.data.status === 'fail') {
        console.log('로그아웃 실패', response.data);
      } else if (response.data.status === 'error') {
        console.log('로그아웃 성공', response.data);
      }
      return response.data;
    })
    .catch((e) => {
      console.log('로그아웃 요청 실패 :', e);
    });
  return data;
}
