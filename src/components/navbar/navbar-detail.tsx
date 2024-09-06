import { BackIcon } from '@public/assets/icon'
import Link from 'next/link'
import React from 'react'

interface NavbarDetailProps {
  title: string
  icon: React.ElementType
}

export const NavbarDetail: React.FC<NavbarDetailProps> = ({
  title,
  icon: Icon,
}) => {
  return (
    <>
      <nav className="flex items-center justify-between">
        <Link href="/dashboard">
          <BackIcon width={30} height={30} />
        </Link>
        <h1 className="items-center text-center text-xl font-bold text-brown">
          {title}
        </h1>
        <Link href="/dashboard">
          <Icon width={25} height={25} />
        </Link>
      </nav>
    </>
  )
}
