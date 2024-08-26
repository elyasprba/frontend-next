import Image from "next/image";

import RegisterImage from "@public/assets/register-image.svg";
import Button from "@/app/components/button/button";

function Register() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div className="relative">
          <Image
            src={RegisterImage}
            alt="register-image"
            width={308}
            height={201}
          />
          <div className="absolute right-0 top-3 text-left">
            <h1 className="text-6xl font-bold">
              Sign <br /> Up
            </h1>
          </div>
        </div>

        <form className="mx-auto mt-8 w-full max-w-md space-y-4 px-5">
          <div className="flex items-center border-b border-line py-2">
            <input
              className="w-full appearance-none border-none bg-transparent leading-tight text-gray-700 focus:outline-none"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center border-b border-line py-2">
            <input
              className="w-full appearance-none border-none bg-transparent leading-tight text-gray-700 focus:outline-none"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center border-b border-line py-2">
            <input
              className="w-full appearance-none border-none bg-transparent leading-tight text-gray-700 focus:outline-none"
              name="phoneNumber"
              type="text"
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="pt-6">
            <Button title="Create Account" isBrown />
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
