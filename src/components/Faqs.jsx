import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

export default function Faqs() {
  return (
    <section id="faqs" className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Frequently Asked Questions
      </h2>
      <p className="big mt-6 mb-12">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget.
      </p>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem
          value="item-1"
          className="border-t border-neutral-800 py-4"
        >
          <AccordionHeader>
            <AccordionTrigger className="w-full flex flex-row items-center justify-between py-4">
              <span className="text-xl font-semibold">
                This is a super common question?
              </span>
              <span>icon</span>
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
            <AccordionTrigger className="w-full flex flex-row items-center justify-between py-4">
              <span className="text-xl font-semibold">
                This is a random QA?
              </span>
              <span>icon</span>
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
