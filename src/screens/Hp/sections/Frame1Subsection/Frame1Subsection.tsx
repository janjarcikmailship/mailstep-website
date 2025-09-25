import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const Frame1Subsection = (): JSX.Element => {
  const categoryTabs = [
    { label: "E-commerce platforms", active: true },
    { label: "Integrations", active: false },
    { label: "Marketplaces", active: false },
    { label: "Cariers", active: false },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1320px] items-start gap-[110px] relative">
      {/* Header Section */}
      <div className="inline-flex items-start gap-10 relative w-full translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="relative w-[527px] mt-[-1.00px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-transparent text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            Připojte se bez námahy
            <br />
          </span>

          <span className="text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            – integrujeme se s vaším
            <br />
            e-shopem během chvíle
          </span>
        </div>

        <div className="relative w-[413px] mt-[-1.00px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
          Mailstep se hladce propojí s platformami jako Shoptet, Shopify,
          WooCommerce, Amazon, Packeta a desítkami dalších. Automatizujeme
          objednávky, sledování i vratky – bez nutnosti složitého vývoje.
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-20 relative self-stretch w-full">
        <div className="flex-col flex items-center gap-10 relative self-stretch w-full">
          {/* Category Tabs */}
          <div className="inline-flex items-center gap-[22px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            {categoryTabs.map((tab, index) => (
              <div key={index}>
                {tab.active ? (
                  <Badge
                    variant="default"
                    className="w-[220px] bg-[#111d27] hover:bg-[#111d27] text-white px-[26px] py-2.5 rounded-[100px] justify-center font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]"
                  >
                    {tab.label}
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="border-2 border-neutral-800 text-[#111d27] px-[26px] py-2.5 rounded-[100px] justify-center font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)] hover:bg-transparent cursor-pointer transition-colors"
                  >
                    {tab.label}
                  </Badge>
                )}
              </div>
            ))}
          </div>

          {/* Integration Images */}
          <img
            className="relative self-stretch w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
            alt="Frame"
            src="https://c.animaapp.com/mfwadh63sf4A0a/img/frame-64.svg"
          />

          <img
            className="relative self-stretch w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
            alt="Frame"
            src="https://c.animaapp.com/mfwadh63sf4A0a/img/frame-64.svg"
          />
        </div>

        {/* CTA Button */}
        <Button className="h-[50px] bg-[#e20714] hover:bg-[#c5060f] text-white rounded-[100px] shadow-shadow-raised px-6 font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] transition-colors">
          <span className="flex items-center gap-2">
            Ukázat všechny integrace
            <img
              className="w-4 h-4"
              alt="Arrow right"
              src="https://c.animaapp.com/mfwadh63sf4A0a/img/arrow-right-2.svg"
            />
          </span>
        </Button>
      </div>
    </section>
  );
};
