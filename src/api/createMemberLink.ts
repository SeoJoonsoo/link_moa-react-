import { VITE_API_ROOT } from '@/constants';
import axios from 'axios';

export default async function createMemberLink(url: string, name: string, tags: string[]) {
  const data = await axios
    .post(
      `${VITE_API_ROOT}/Link/createMemberLink`,
      {
        url,
        name,
        tags,
      },
      {
        headers: {
          'Contest-Type': 'application/json',
        },
        withCredentials: true,
      },
    )
    .then((response) => {
      console.log('저장 요청 응답: ', response);
      return response.data;
    })
    .catch((e) => {
      console.log('저장 요청 실패: ', e);
      return e.data;
    });
  return data;
}
