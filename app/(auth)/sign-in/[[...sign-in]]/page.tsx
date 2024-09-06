import { SignIn } from "@clerk/nextjs"

import { LoadingDots } from "@/components/loading-dots"

export default function SignInPage() {
  return (
    <div className="relative flex h-dvh w-dvw items-center justify-center">
      <div className="absolute inset-0 flex h-dvh w-dvw items-center justify-center">
        <LoadingDots />
      </div>
      <SignIn />
    </div>
  )
}
