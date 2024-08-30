'use client'

import { useState } from 'react'
import { CartIcon, ChatIcon, ListIcon } from '@public/assets/icon'
import Modal from 'react-modal'
import Image from 'next/image'

import UserImage from '@public/user-image.svg'
import { HamburgerMenu } from './hamburger-menu'
import Link from 'next/link'

export const Navbar = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="mx-5 my-10">
        <section className="flex justify-between">
          <div onClick={toggleMenu} className="cursor-pointer">
            <ListIcon width={30} height={30} />
          </div>
          <div className="flex gap-4">
            <ChatIcon width={30} height={30} />
            <CartIcon width={30} height={30} />
            <Link href="/profile">
              <Image
                src={UserImage}
                alt="image-users"
                className="rounded-full"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </section>
      </nav>

      {children}

      <Modal
        isOpen={isMenuOpen}
        onRequestClose={toggleMenu}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <HamburgerMenu />
      </Modal>
    </>
  )
}

const customStyles = {
  content: {
    top: '2px',
    left: '-1px',
    right: '25%',
    bottom: '0',
    borderTopRightRadius: '25px',
    backgroundColor: '#EFEEEE',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}
