import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { toastError, toastSuccess } from '@/utils/toast'
import { loginApi } from '@/api/auth/auth-api'
import { cookies, LS_KEYS } from '@/utils/cookies'
import { LoginPayload } from '@/types/auth-types'

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
