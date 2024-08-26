"use client";

import Image from "next/image";

import WelcomeImage from "@public/assets/welcome-image.svg";
import Button from "@/app/components/button/button";

import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-5">
        <div className="mt-6 text-center">
          <h1 className="mb-4 text-6xl font-bold">Welcome!</h1>
          <p className="text-md mx-10 font-light">
            Get a cup of coffee for free only for new user
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={WelcomeImage}
            alt="welcome-image"
            width={308}
            height={201}
            className="my-9 items-center"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button
            title="Create New Account"
            isBrown={true}
            onClick={handleRegister}
          />
          <Button title="Login" isBrown={false} onClick={handleLogin} />
        </div>
      </div>
    </main>
  );
}
