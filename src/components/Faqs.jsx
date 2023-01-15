import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

const faqs = [
  {
    key: 1,
    question: "What do I need to rent a vehicle?",
    answer:
      "Each person who intends to drive must bring a valid driver's license, passport, and a valid means of payment (generally via credit card). All of these items must be submitted on the day the vehicle will be picked up. Kindly pay with an affiliated credit card. If you wish to pay in cash, you must also submit an item of identification (copies are acceptable) in addition to your driver's license.",
  },
  {
    key: 2,
    question: "Do I need insurance?",
    answer:
      "We offer a wide range of rental insurance products for people who want to be on the safe side.",
  },
  {
    key: 3,
    question: "Can anyone besides the reservation applicant drive the vehicle?",
    answer:
      "Yes; however, each person who intends to drive the vehicle must submit a valid driver’s license on the day the vehicle will be picked up. If it is not possible for all drivers to be present on the day of pick-up, a copy of their driver’s license (both sides) and passport must be prepared in advance and submitted.",
  },
  {
    key: 4,
    question: "Can I rent a vehicle without a reservation?",
    answer:
      "Yes, as long as a vehicle is available in the station; however, we recommend making a reservation because no vehicle may be available during busy periods.",
  },
  {
    key: 5,
    question: "For how many days can I reserve a rental vehicle?",
    answer:
      "We accept reservations for a rental period of one (1) month at most.",
  },
];

export function Faqs() {
  return (
    <section id="faqs" className="w-full max-w-2xl mx-auto scroll-mt-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p className="big mt-8 mb-16 text-center">
        If you can’t find what you’re looking for,{" "}
        <a
          href="mailto:hello@example.com"
          className="underline underline-offset-4"
        >
          reach out to us
        </a>
        .
      </p>
      <Accordion
        className="w-full max-w-[42rem] mx-auto"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.key}
            value={`item-${faq.key}`}
            className="border-t border-neutral-800 py-4"
          >
            <AccordionHeader>
              <AccordionTrigger className="accordionTrigger">
                <span className="text-xl font-semibold text-left">
                  {faq.question}
                </span>
                <svg
                  className="accordionChevron"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="m112 184 144 144 144-144"
                  />
                </svg>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="text-left mt-4">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
