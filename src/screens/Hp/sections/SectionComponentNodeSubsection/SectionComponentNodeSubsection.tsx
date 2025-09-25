import { ArrowRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const accordionItems = [
  {
    id: "item-1",
    title: "Malé a střední e-shopy",
    content: null,
    isActive: false,
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/company.svg",
  },
  {
    id: "item-2",
    title: "Kosmetika, zdraví, potraviny",
    content:
      "We use our own unique technology to connect your e-store to our systems.",
    isActive: true,
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/icons.svg",
  },
  {
    id: "item-3",
    title: "Zahraniční e-shopy",
    content: null,
    isActive: false,
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/company.svg",
  },
  {
    id: "item-4",
    title: "Rychle rostoucí značky",
    content: null,
    isActive: false,
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/company.svg",
  },
];

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-20 px-0 py-[110px] relative bg-[#f7f7f7] rounded-[26px] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="relative w-full max-w-[865px] mt-[-1.00px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-transparent text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <span className="text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
          Proč Mailstep? váš klíč k bezstarostné logistice a{" "}
        </span>

        <span className="text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
          spokojenějším zákazníkům.
        </span>
      </div>

      <div className="inline-flex items-start gap-10 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col w-[527px] items-start gap-20 relative">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-2"
            className="w-full"
          >
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#d4e0ed]"
              >
                <AccordionTrigger className="flex items-center justify-between gap-4 py-[25px] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      className="w-[33px] h-[33px]"
                      alt="Icon"
                      src={item.icon}
                    />
                    <div
                      className={`flex-1 text-left font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)] ${item.isActive ? "text-[#e20714]" : "text-[#111d27]"}`}
                    >
                      {item.title}
                    </div>
                  </div>
                </AccordionTrigger>
                {item.content && (
                  <AccordionContent className="pb-[25px]">
                    <div className="font-desktop-p4-14px-SB font-[number:var(--desktop-p4-14px-SB-font-weight)] text-[#476788] text-[length:var(--desktop-p4-14px-SB-font-size)] tracking-[var(--desktop-p4-14px-SB-letter-spacing)] leading-[var(--desktop-p4-14px-SB-line-height)] [font-style:var(--desktop-p4-14px-SB-font-style)]">
                      {item.content}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          <Button className="inline-flex h-[50px] items-center justify-center bg-[#e20714] hover:bg-[#c5060f] rounded-[100px] shadow-shadow-raised px-6 py-0 gap-1 transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="inline-flex items-center justify-center gap-2 px-1 py-0">
              <div className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                Ukázat všechny řešení na míru
              </div>
            </div>
            <ArrowRightIcon className="w-4 h-4 text-white" />
          </Button>
        </div>

        <img
          className="w-[527px] h-[527px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          alt="Rectangle"
          src="https://c.animaapp.com/mfwadh63sf4A0a/img/rectangle-158.svg"
        />
      </div>
    </section>
  );
};
