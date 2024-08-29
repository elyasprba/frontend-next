import { useMutation } from '@tanstack/react-query'
import { loginApi } from '../../api/auth/auth-api'
import { LoginPayload } from '../../types/auth-types'
import axios from 'axios'
import { toastError } from '@/app/utils/toast'
import { useRouter } from 'next/navigation'

export const usePostLogin = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: (body: LoginPayload) => loginApi(body),
    onSuccess: () => {
      router.push('/dashboard')
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
