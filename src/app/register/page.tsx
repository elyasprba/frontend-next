'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type FieldValues } from 'react-hook-form'

import Image from 'next/image'

import RegisterImage from '@public/assets/register-image.svg'
import Button from '@/app/components/button/button'
import { registerSchema } from '../lib/shemas/register-shema'
import { FormField } from '@/app/components/form/form-field'
import { usePostRegister } from '../hooks/auth/use-post-register'
import { RegisterPayload } from '../types/auth-types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const { mutate, isSuccess, isPending } = usePostRegister()
  const router = useRouter()

  const onSubmit = async (data: FieldValues) => {
    mutate(data as RegisterPayload)
  }

  if (isSuccess) {
    setTimeout(() => {
      router.replace('/login')
    }, 1500)
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-5">
        <section className="relative">
          <Image
            src={RegisterImage}
            alt="register-image"
            className="h-auto w-full"
          />
          <section className="absolute right-0 top-3 text-left">
            <h1 className="text-6xl font-bold">
              Sign <br /> Up
            </h1>
          </section>
        </section>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-12 w-full max-w-md space-y-4"
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

          <section className="pt-5">
            <Button
              title="Create Account"
              isBrown
              disabled={isSubmitting && isPending}
            />
            <section className="flex justify-center gap-1 pt-3">
              <div className="text-center text-sm text-slate-500">
                Already have an account?
              </div>
              <Link
                href="/login"
                className="cursor-pointer text-center text-sm text-blue-500"
              >
                Login
              </Link>
            </section>
          </section>
        </form>
      </main>
    </>
  )
}

export default Page
