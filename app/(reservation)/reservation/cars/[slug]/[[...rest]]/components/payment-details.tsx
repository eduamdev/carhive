import { currentUser } from "@clerk/nextjs/server"

import ElementsForm from "./elements-form"

export async function PaymentDetails() {
  const user = await currentUser()

  console.log(user?.primaryEmailAddress?.emailAddress)

  return (
    <>
      <h2 className="text-[22px] font-semibold">Pay with</h2>

      <div className="pt-5">
        <ElementsForm />
      </div>
    </>
  )
}
