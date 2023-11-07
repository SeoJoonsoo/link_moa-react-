import { VITE_API_ROOT } from '@/constants';
import { Response } from '@/types';
import { instance } from '../api';

type Data = Response;

export default async function deleteMemberLink(member_link_id: string) {
  const data: Data = await instance
    .delete(`${VITE_API_ROOT}/Link?id=${member_link_id}`, {})
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
