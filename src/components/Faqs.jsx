import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { faqs } from "../data/faqs";
import { Icons } from "./Icons";

export function Faqs() {
  return (
    <section id="faqs" className="w-full max-w-2xl mx-auto scroll-mt-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-xl leading-9 mt-8 mb-16 text-center">
        If you can’t find what you’re looking for,{" "}
        <a
          href="mailto:hello@example.com"
          className="text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-200"
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
                <span className="text-xl font-medium text-left">
                  {faq.question}
                </span>
                <Icons.ChevronDown className="accordionChevron" />
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
