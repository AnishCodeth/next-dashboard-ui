"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="bg-lamaSky flex justify-center items-center h-screen w-screen">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white flex flex-col p-12 rounded-md shadow-lg gap-2"
        >
          <header className="flex gap-2">
            <Image
              src="/announcement.png"
              alt="announcement"
              width={20}
              height={20}
            />
            <h1 className="font-bold">SchoolLama</h1>
          </header>
          <h2 className="text-gray-400">Sign in to your account</h2>
          <Clerk.GlobalError className="block text-sm text-rose-400" />
          <div>
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Label className="text-gray-500">Username</Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="border-gray-400 border-2 outline-none rounded-md p-1"
              />
              <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
            </Clerk.Field>
          </div>
          <div>
            <Clerk.Field name="password" className="flex flex-col gap-2">
              <Clerk.Label className="text-gray-500">password</Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="border-gray-400 border-2 outline-none rounded-md p-1"
              />
              <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit
            className="relative isolate w-full rounded-lg bg-gradient-to-b from-emerald-400 to-emerald-500 px-3.5 py-2 text-center text-sm font-medium text-emerald-950 shadow-[0_1px_0_0_theme(colors.white/30%)_inset,0_-1px_1px_0_theme(colors.black/5%)_inset] outline-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:text-emerald-950/80 active:before:bg-black/10"
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}
