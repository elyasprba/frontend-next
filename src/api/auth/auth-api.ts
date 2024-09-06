import { LoginPayload, RegisterPayload } from '@/types/auth-types'
import httpService from '../http-service'

export const registerApi = async (body: RegisterPayload) => {
  const response = await httpService.post('/api/auth/register', body)
  return response.data
}
export const loginApi = async (body: LoginPayload) => {
  const response = await httpService.post('/api/auth/login', body)
  return response.data
}
