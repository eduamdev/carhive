import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqs } from "../data/faqs";

export function Faqs() {
  return (
    <section
      id="faqs"
      className="w-full max-w-2xl mx-auto scroll-mt-10 px-6 2xl:px-0"
    >
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
      <Accordion type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem value={`item-${faq.key}`} key={faq.key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
