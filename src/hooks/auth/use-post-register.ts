import { useMutation } from '@tanstack/react-query'
import { registerApi } from '../../app/api/auth/auth-api'
import { RegisterPayload } from '../../types/auth-types'
import axios from 'axios'
import { toastError, toastSuccess } from '@/utils/toast'

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
