import { Alert, AlertDescription } from "@/components/ui/alert"

export function StripeTestCards() {
  return (
    <Alert>
      <AlertDescription className="text-balance">
        <p>
          Use any of{" "}
          <a
            href="https://stripe.com/docs/testing#cards"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline"
          >
            Stripe&apos;s test cards
          </a>
          , like{" "}
          <span className="whitespace-nowrap tabular-nums tracking-wide ">
            4242 4242 4242 4242
          </span>
          . No real charges will apply.
        </p>
      </AlertDescription>
    </Alert>
  )
}
