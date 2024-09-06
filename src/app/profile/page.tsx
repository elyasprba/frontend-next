import { NavbarDetail } from '../../components/navbar/navbar-detail'
import Image from 'next/image'
import UserImage from '@public/user-image.svg'
import { CartIcon, NextIcon } from '@public/assets/icon'
import CoffeeImage from '@public/coffee.svg'
import Button from '../../components/button/button'

function Page() {
  return (
    <>
      <main className="bg-[#f5f5f8] p-7">
        <NavbarDetail title="My Profile" icon={CartIcon} />

        <section className="flex flex-col items-center gap-4 pt-10">
          <Image
            src={UserImage}
            alt="profile-image"
            className="rounded-full"
            width={90}
            height={90}
          />
          <div className="text-center">
            <p className="text-md font-semibold text-brown">
              Elyas Purba Prastiya
            </p>
            <div className="pt-2">
              <p className="text-sm text-brown">elyasprba@gmail.com</p>
              <p className="text-sm text-brown">+6289612345678</p>
              <p className="text-sm text-brown">
                Iskandar Street Block A Number 102
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section>
          <div className="flex justify-between">
            <p className="text-md font-bold text-brown">Order History</p>
            <p className="text-sm text-brown">See more</p>
          </div>
          <div className="flex gap-4 py-3">
            <Image
              src={CoffeeImage}
              alt="order-history-image"
              width={60}
              height={60}
            />
            <Image
              src={CoffeeImage}
              alt="order-history-image"
              width={60}
              height={60}
            />
            <Image
              src={CoffeeImage}
              alt="order-history-image"
              width={60}
              height={60}
            />
            <Image
              src={CoffeeImage}
              alt="order-history-image"
              width={60}
              height={60}
            />
            <Image
              src={CoffeeImage}
              alt="order-history-image"
              width={60}
              height={60}
            />
            <Image
              src={CoffeeImage}
              alt="order-history-image"
              width={60}
              height={60}
            />
          </div>
        </section>

        <Divider />

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between rounded-2xl border-2 bg-white p-5">
            <p className="font-semibold text-brown">Account</p>
            <NextIcon width={30} height={30} />
          </div>
          <div className="flex items-center justify-between rounded-2xl border-2 bg-white p-5">
            <p className="font-semibold text-brown">Edit Password</p>
            <NextIcon width={30} height={30} />
          </div>
          <div className="flex items-center justify-between rounded-2xl border-2 bg-white p-5">
            <p className="font-semibold text-brown">FAQ</p>
            <NextIcon width={30} height={30} />
          </div>
          <div className="flex items-center justify-between rounded-2xl border-2 bg-white p-5">
            <p className="font-semibold text-brown">Help</p>
            <NextIcon width={30} height={30} />
          </div>
        </section>

        <div className="pb-5 pt-5">
          <Button title="Save" isBrown />
        </div>
      </main>
    </>
  )
}

export default Page

const Divider: React.FC = () => (
  <div className="py-5">
    <div className="h-1 w-full bg-brown opacity-10"></div>
  </div>
)
