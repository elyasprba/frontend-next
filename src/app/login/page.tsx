'use client'

import React from 'react'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type FieldValues } from 'react-hook-form'

import LoginImage from '@public/assets/login-image.svg'
import GoogleImage from '@public/assets/google-image.svg'

import Button from '../components/button/button'
import { FormField } from '../components/form/form-field'
import { loginSchema } from '../lib/shemas/login-shema'
import { usePostLogin } from '../hooks/auth/use-post-login'
import { LoginPayload } from '../types/auth-types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Page() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const { mutate, isPending, isSuccess } = usePostLogin()
  const router = useRouter()

  const onSubmit = async (data: FieldValues) => {
    mutate(data as LoginPayload)
  }

  if (isSuccess) {
    setTimeout(() => {
      router.replace('/dashboard')
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex items-center justify-center">
        <Image src={LoginImage} alt="login-image" className="h-auto w-full" />
        <section className="">
          <h1 className="text-6xl font-bold">
            Log <br /> in
          </h1>
        </section>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-5 w-full max-w-md space-y-4 px-5"
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

        <section className="pt-3">
          <section className="pb-6">
            <Link
              href="/dashboard"
              className='className="w-fit text-brown" border-b-2 border-b-brown text-sm font-light'
            >
              Forgot Password?
            </Link>
          </section>

          <Button title="Login" isBrown disabled={isSubmitting && isPending} />

          <section className="my-5 flex items-center">
            <section className="h-px flex-grow bg-gray-300"></section>
            <span className="px-4 text-sm font-light text-gray-500">
              or login in with
            </span>
            <section className="h-px flex-grow bg-gray-300"></section>
          </section>

          <button className="w-full rounded-2xl border-2 bg-white p-4">
            <section className="flex items-center justify-center gap-3">
              <Image src={GoogleImage} alt="google-image" />
              <div className="font-light">Login With Google</div>
            </section>
          </button>

          <section className="flex justify-center gap-1 pt-3">
            <div className="text-center text-sm text-slate-500">
              Don`t have an account yet?
            </div>
            <Link
              href="/register"
              className="cursor-pointer text-center text-sm text-blue-500"
            >
              Register
            </Link>
          </section>
        </section>
      </form>
    </main>
  )
}

export default Page
