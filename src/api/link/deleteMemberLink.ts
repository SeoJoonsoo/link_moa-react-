import { VITE_API_ROOT } from '@/constants';
import { Response } from '@/types';
import axios from 'axios';

type Data = Response;

export default async function deleteMemberLink(member_link_id: string) {
  const data: Data = await axios
    .delete(`${VITE_API_ROOT}/Link?id=${member_link_id}`, {
      headers: {
        'Contest-Type': 'application/json',
      },
      withCredentials: true,
    })
    .then((response: { data: Data }) => {
      console.log('delete: ', response);
      return response.data;
    })
    .catch((e) => {
      console.log('delete 실패: ', e);
      return e.data;
    });

  return data;
}
