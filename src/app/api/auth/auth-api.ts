import { RegisterPayload } from '../../types/auth-types';
import httpService from '../http-service';

export const registerApi = async (body: RegisterPayload) => {
  const response = await httpService.post('/api/auth/register', body);
  return response.data;
};
