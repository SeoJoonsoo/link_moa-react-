import { VITE_API_ROOT } from '@/constants';
import axios from 'axios';

export const instance = axios.create({
  baseURL: VITE_API_ROOT,
  headers: {
    'Contest-Type': 'application/json',
  },
});
