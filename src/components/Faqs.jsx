import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ReactComponent as ChevronDownSVG } from "./../assets/icons/chevron-down.svg";

export default function Faqs() {
  return (
    <section
      id="faqs"
      className="w-full max-w-2xl mx-auto text-center scroll-mt-10"
    >
      <h2 className="text-3xl lg:text-4xl font-bold">
        Frequently Asked Questions
      </h2>
      <p className="big mt-8 mb-16">
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
        <AccordionItem
          value="item-1"
          className="border-t border-neutral-800 py-4"
        >
          <AccordionHeader>
            <AccordionTrigger className="AccordionTrigger">
              <span className="text-xl font-semibold">
                This is a super common question?
              </span>
              <ChevronDownSVG className="AccordionChevron" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="text-left mt-4">
            <p>
              You can add extra decorative elements, such as chevrons, and
              rotate it when the item is open
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-t border-b border-neutral-800 py-4"
        >
          <AccordionHeader>
            <AccordionTrigger className="AccordionTrigger">
              <span className="text-xl font-semibold">
                This is a random QA?
              </span>
              <ChevronDownSVG className="AccordionChevron" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="text-left mt-4">
            <p>
              You can add extra decorative elements, such as chevrons, and
              rotate it when the item is open
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
