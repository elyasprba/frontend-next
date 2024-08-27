'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type FieldValues } from 'react-hook-form'

import Image from 'next/image'

import RegisterImage from '@public/assets/register-image.svg'
import Button from '@/app/components/button/button'
import { registerSchema } from '../lib/shemas/register-shema'
import { FormField } from '@/app/components/form/form-field'
import { usePostRegister } from '../hooks/use-post-register'
import { RegisterPayload } from '../types/auth-types'

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const { mutate } = usePostRegister()

  const onSubmit = async (data: FieldValues) => {
    mutate(data as RegisterPayload)
  }

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div className="relative">
          <Image
            src={RegisterImage}
            alt="register-image"
            className="h-auto w-full"
          />
          <div className="absolute right-0 top-3 text-left">
            <h1 className="text-6xl font-bold">
              Sign <br /> Up
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 w-full max-w-md space-y-4 px-5"
        >
          <FormField
            id="email"
            register={register('email')}
            error={errors.email?.message}
            placeholder="Enter your email"
            type="text"
          />

          <FormField
            id="password"
            register={register('password')}
            error={errors.password?.message}
            placeholder="Enter your password"
            type="password"
          />

          <FormField
            id="phone_number"
            register={register('phone_number')}
            error={errors.phone_number?.message}
            placeholder="Enter your phone number"
            type="text"
          />

          <div className="pt-6">
            <Button
              title="Create Account"
              isBrown={false}
              disabled={isSubmitting}
            />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
