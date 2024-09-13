import { currentUser } from "@clerk/nextjs/server"

import ElementsForm from "./elements-form"

export async function PaymentDetails({
  amount,
  currency,
}: {
  amount: number
  currency: string
}) {
  const user = await currentUser()

  return (
    <>
      <h2 className="text-[22px] font-semibold">Pay with</h2>

      <div className="pt-5">
        <ElementsForm
          userEmail={user?.primaryEmailAddress?.emailAddress!}
          amount={amount}
          currency={currency}
        />
      </div>
    </>
  )
}
