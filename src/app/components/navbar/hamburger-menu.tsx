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
import UserImage from '@public/user-image.svg'
import Image from 'next/image'

const menuItems = [
  { icon: UserIcon, text: 'Edit Profile', link: '/profile' },
  { icon: CartListIcon, text: 'Orders', link: '/profile' },
  { icon: MenuIcon, text: 'All Menu', link: '/profile' },
  { icon: PrivacyPolicyIcon, text: 'Privasi policy', link: '/profile' },
  { icon: SecurityIcon, text: 'Security', link: '/profile' },
]

export const HamburgerMenu = () => {
  return (
    <main>
      <section className="flex flex-col items-center justify-center gap-3 rounded-e-3xl bg-brown py-7">
        <Image
          src={UserImage}
          alt="image-users"
          className="rounded-full"
          height={100}
          width={100}
        />
        <div className="text-center">
          <p className="text-md font-light text-white">Elyas</p>
          <p className="text-sm font-light text-white">elyas@gmail.com</p>
        </div>
      </section>

      <div className="flex h-auto w-full flex-col">
        <div className="flex flex-grow flex-col gap-5 px-8 py-[20%]">
          {menuItems.map((item, index) => (
            <section key={item.text}>
              {item.link && (
                <Link href={item.link} className="w-full cursor-pointer">
                  <MenuItemContent icon={item.icon} text={item.text} />
                </Link>
              )}
              {index < menuItems.length - 1 && <Divider />}
            </section>
          ))}
        </div>
        <div className="mt-auto px-10 py-5">
          <div className="flex items-center gap-1">
            <p className="text-lg font-medium text-brown">Sign-out</p>
            <NextIcon width={40} height={25} />
          </div>
        </div>
      </div>
    </main>
  )
}

const MenuItemContent: React.FC<{ icon: React.ElementType; text: string }> = ({
  icon: Icon,
  text,
}) => (
  <div className="flex w-full items-center gap-3 pb-2">
    <Icon width={23} height={23} />
    <p className="text-lg font-medium text-brown">{text}</p>
  </div>
)

const Divider: React.FC = () => (
  <div className="h-px w-full bg-brown opacity-50"></div>
)
