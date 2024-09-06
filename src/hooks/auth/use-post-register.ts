import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toastError, toastSuccess } from '@/utils/toast'
import { registerApi } from '@/api/auth/auth-api'
import { RegisterPayload } from '@/types/auth-types'

export const usePostRegister = () => {
  return useMutation({
    mutationFn: (body: RegisterPayload) => registerApi(body),
    onSuccess: () => {
      toastSuccess('Registration successful')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toastError(`${error.response.data.message}`)
          return
        }
        return toastError(error.message)
      }
    },
  })
}
