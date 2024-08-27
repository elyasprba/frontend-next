import { useMutation } from '@tanstack/react-query';
import { registerApi } from '../api/auth/auth-api';
import { RegisterPayload } from '../types/auth-types';

export const usePostRegister = () => {
  return useMutation({
    mutationFn: (body: RegisterPayload) => registerApi(body),
    onSuccess: () => {
      alert('Registration successful');
    },
  });
};
