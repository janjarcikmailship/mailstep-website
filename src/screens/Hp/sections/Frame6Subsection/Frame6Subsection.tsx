import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const Frame6Subsection = (): JSX.Element => {
  const faqItems = [
    {
      id: "item-1",
      question: "Malé a střední e-shopy",
      answer:
        "Napojíme se na Váš e-shop a vyřešíme veškerou logistiku od přijetí objednávky po doručení zboží Vašim zákazníkům. Postaráme se o skladování zboží, vyřízení objednávek, pickování, balení, dopravu, i vyřizování vratek.",
      defaultOpen: false,
    },
    {
      id: "item-2",
      question: "Malé a střední e-shopy",
      answer:
        "Napojíme se na Váš e-shop a vyřešíme veškerou logistiku od přijetí objednávky po doručení zboží Vašim zákazníkům. Postaráme se o skladování zboží, vyřízení objednávek, pickování, balení, dopravu, i vyřizování vratek.",
      defaultOpen: true,
    },
    {
      id: "item-3",
      question: "Malé a střední e-shopy",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-4",
      question: "Malé a střední e-shopy",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-5",
      question: "Malé a střední e-shopy",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[865px] mx-auto items-start gap-20 relative">
      <header className="flex-col flex items-center gap-10 relative self-stretch w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <h2 className="relative self-stretch mt-[-1.00px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-transparent text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#061c3d] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)]">
            Pomáháme vám se rozhodnout – přehled
          </span>

          <span className="text-[#db2b19] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)]">
            &nbsp;
          </span>

          <span className="text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)]">
            otázek a odpovědí
          </span>
        </h2>

        <p className="relative self-stretch font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] text-center tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
          Zodpovídáme nejčastější otázky, které dostáváme od našich firemních
          klientů.
        </p>
      </header>

      <div className="flex flex-col items-center gap-20 relative self-stretch w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-2"
          className="flex flex-col items-start gap-0 relative self-stretch w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="flex flex-col items-start gap-[25px] relative self-stretch w-full border-b border-[#d4e0ed] last:border-b-0"
            >
              <AccordionTrigger className="flex items-center justify-between gap-4 relative self-stretch w-full py-[25px] px-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                <span className="relative flex-1 mt-[-1.00px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)] text-left">
                  {item.question}
                </span>
                <ChevronDownIcon className="h-6 w-6 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>

              {item.answer && (
                <AccordionContent className="pb-[25px] pt-0">
                  <p className="relative font-desktop-p4-14px-SB font-[number:var(--desktop-p4-14px-SB-font-weight)] text-[#476788] text-[length:var(--desktop-p4-14px-SB-font-size)] tracking-[var(--desktop-p4-14px-SB-letter-spacing)] leading-[var(--desktop-p4-14px-SB-line-height)] [font-style:var(--desktop-p4-14px-SB-font-style)]">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <Button className="inline-flex h-[50px] items-center justify-center relative mb-[-1.00px] bg-[#e20714] rounded-[100px] shadow-shadow-raised hover:bg-[#c91e0f] transition-colors px-6 py-0 gap-1 h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="inline-flex items-center justify-center gap-2 px-1 py-0 relative">
            <span className="relative w-fit mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
              Chci ce dezvedet víc
            </span>
          </div>

          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};
