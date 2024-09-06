'use client'

import Image from 'next/image'

import GetStartedImage from '@public/assets/get-started-image.svg'
import Button from '@/components/button/button'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleNavigation = () => {
    // test push
    router.replace('/welcome')
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-5">
        <div className="ml-6 mt-5">
          <h1 className="text-5xl font-bold">Coffee for Everyone</h1>
        </div>
        <div className="flex justify-center">
          <Image
            src={GetStartedImage}
            alt="get-started-image"
            className="my-5 h-auto w-full"
          />
        </div>

        <div className="flex flex-col" onClick={handleNavigation}>
          <Button title="Get Started" isBrown={true} />
        </div>
      </div>
    </main>
  )
}
