import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { loginApi } from '../../api/auth/auth-api'
import { LoginPayload } from '../../types/auth-types'
import { toastError, toastSuccess } from '@/app/utils/toast'
import { LS_KEYS, cookies } from '@/app/utils/cookies'

export const usePostLogin = () => {
  return useMutation({
    mutationFn: (body: LoginPayload) => loginApi(body),
    onSuccess: (data) => {
      cookies.set(LS_KEYS.auth, data)

      toastSuccess('Login successful')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toastError(`${error.response.data.message}`)
          return
        }
        toastError(error.message)
      }
    },
  })
}
