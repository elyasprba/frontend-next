'use client'

import { useState } from 'react'
import { CartIcon, ChatIcon, ListIcon } from '@public/assets/icon'
import Modal from 'react-modal'
import Image from 'next/image'

import UserImage from '@public/user-image.svg'
import { NavbarList } from './navbar-list'

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
          <div onClick={toggleMenu}>
            <ListIcon width={30} height={30} />
          </div>
          <div className="flex gap-4">
            <ChatIcon width={30} height={30} />
            <CartIcon width={30} height={30} />
            <Image
              src={UserImage}
              alt="image-users"
              className="rounded-full"
              width={30}
              height={30}
            />
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

          <NavbarList />
        </main>
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
    borderBottomRightRadius: '25px',
    backgroundColor: '#EFEEEE',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}
