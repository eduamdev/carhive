import { SignInButton, SignUpButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

export function AuthSection() {
  return (
    <>
      <h2 className="text-[22px] font-semibold">Log in or sign up to book</h2>
      <div className="pt-10">
        <div className="grid grid-cols-1 items-center justify-center gap-4">
          <Button className="w-full text-[15px]" size={"lg"} asChild>
            <SignInButton>Login</SignInButton>
          </Button>
          <Button
            variant={"outline"}
            className="w-full text-[15px]"
            size={"lg"}
            asChild
          >
            <SignUpButton />
          </Button>
        </div>
      </div>
    </>
  )
}
