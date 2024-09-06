import {
  CartListIcon,
  MenuIcon,
  NextIcon,
  PrivacyPolicyIcon,
  SecurityIcon,
  UserIcon,
} from '@public/assets/icon'
import Link from 'next/link'
import React from 'react'

export const NavbarList = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-5 px-10 py-12">
        <Link href="/profile">
          <div className="flex items-center gap-3">
            <UserIcon width={25} height={25} />
            <p className="text-lg font-medium text-brown">Edit Profile</p>
          </div>
        </Link>
        <section className="h-px flex-grow scale-y-[0.5] bg-brown"></section>

        <div className="flex items-center gap-3">
          <CartListIcon width={25} height={25} />
          <p className="text-lg font-medium text-brown">Orders</p>
        </div>
        <section className="h-px flex-grow scale-y-[0.5] bg-brown"></section>

        <div className="flex items-center gap-3">
          <MenuIcon width={25} height={25} />
          <p className="text-lg font-medium text-brown">All Menu</p>
        </div>
        <section className="h-px flex-grow scale-y-[0.5] bg-brown"></section>

        <div className="flex items-center gap-3">
          <PrivacyPolicyIcon width={25} height={25} />
          <p className="text-lg font-medium text-brown">Privasi policy</p>
        </div>
        <section className="h-px flex-grow scale-y-[0.5] bg-brown"></section>

        <div className="flex items-center gap-3">
          <SecurityIcon width={25} height={25} />
          <p className="text-lg font-medium text-brown">Security</p>
        </div>
      </div>

      <div className="pl-10 pt-14">
        <div className="flex items-center gap-1">
          <p className="text-lg font-medium text-brown">Sign-out</p>
          <NextIcon width={40} height={25} />
        </div>
      </div>
    </div>
  )
}
