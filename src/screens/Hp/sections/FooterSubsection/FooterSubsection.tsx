import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const navigationColumns = [
  {
    title: "Služby",
    links: [
      "Proč Mailstep",
      "Technologie",
      "Fulfillment pro eshopy",
      "B2B fulfillment",
      "Medzinárodní logistika",
      "Doplnkové služby",
    ],
  },
  {
    title: "Řešení na míru",
    links: [
      "Proč Mailstep",
      "Technologie",
      "Fulfillment pro eshopy",
      "B2B fulfillment",
      "Medzinárodní logistika",
      "Doplnkové služby",
    ],
  },
  {
    title: "Blog",
    links: [
      "Proč Mailstep",
      "Technologie",
      "Fulfillment pro eshopy",
      "B2B fulfillment",
      "Medzinárodní logistika",
      "Doplnkové služby",
    ],
  },
  {
    title: "Kontakt",
    links: ["Kontakty", "Kariéra", "Klientská zóna"],
  },
];

const socialIcons = [
  "https://c.animaapp.com/mfwadh63sf4A0a/img/social-icons.svg",
  "https://c.animaapp.com/mfwadh63sf4A0a/img/social-icons-4.svg",
  "https://c.animaapp.com/mfwadh63sf4A0a/img/social-icons-2.svg",
  "https://c.animaapp.com/mfwadh63sf4A0a/img/social-icons-3.svg",
  "https://c.animaapp.com/mfwadh63sf4A0a/img/social-icons-1.svg",
];

const legalLinks = ["Privacy policy", "Cookie settings"];

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full max-w-[1320px] items-start gap-[41px] relative bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="flex items-center gap-[380px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[300px] h-[146px] items-start gap-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <img
            className="relative w-[183px] h-[54px]"
            alt="Logo"
            src="https://c.animaapp.com/mfwadh63sf4A0a/img/logo-2.svg"
          />

          <div className="relative flex-1 self-stretch font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
            Boost productivity of your eshop with 100+ integrations
          </div>
        </div>

        <div className="relative w-[640px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-transparent text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <span className="text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            Send your shipments{" "}
          </span>

          <span className="text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            cheaper, faster, smarter!
          </span>
        </div>
      </div>

      <div className="flex items-end gap-[266px] relative self-stretch w-full flex-[0_0_auto]">
        <nav className="inline-flex items-start gap-10 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          {navigationColumns.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}`}
              className="flex flex-col w-[187px] items-start justify-center gap-5 relative"
            >
              <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                <div className="text-[#111d27] relative w-fit mt-[-1.00px] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)]">
                  {column.title}
                </div>
              </div>

              {column.links.map((link, linkIndex) => (
                <Button
                  key={`link-${columnIndex}-${linkIndex}`}
                  variant="ghost"
                  className="inline-flex items-center gap-[7px] relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
                >
                  <div className="text-[#476788] relative w-fit mt-[-1.00px] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)] hover:text-[#111d27] transition-colors">
                    {link}
                  </div>
                </Button>
              ))}
            </div>
          ))}
        </nav>

        <div className="flex flex-col w-[185px] h-[267px] items-start gap-[58px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[72.57px] h-[77px] object-cover"
              alt="Partner logo"
              src="https://c.animaapp.com/mfwadh63sf4A0a/img/image-9.png"
            />

            <div className="relative w-[82.88px] h-[76px] mr-[-0.45px] bg-[url(https://c.animaapp.com/mfwadh63sf4A0a/img/image-8.png)] bg-cover bg-[50%_50%]" />
          </div>

          <div className="flex items-end justify-center gap-[15px] relative flex-1 self-stretch w-full grow">
            {socialIcons.map((iconSrc, index) => (
              <Button
                key={`social-${index}`}
                variant="ghost"
                size="icon"
                className="relative w-[25px] h-[25px] p-0 hover:bg-transparent hover:scale-110 transition-transform"
              >
                <img
                  className="relative w-[25px] h-[25px]"
                  alt="Social media icon"
                  src={iconSrc}
                />
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Separator className="relative self-stretch w-full border-[#d4e0ed]" />

      <div className="flex w-full max-w-[1319px] items-center justify-between relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <Button
          variant="ghost"
          className="inline-flex items-center gap-1 relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
        >
          <div className="relative w-[39px] h-[39px] bg-[#f8f8f8] rounded-[19.5px]">
            <img
              className="absolute top-1.5 left-[7px] w-[26px] h-[26px]"
              alt="Czech republic flag"
              src="https://c.animaapp.com/mfwadh63sf4A0a/img/czech-republic.svg"
            />
          </div>

          <ChevronDownIcon className="relative w-4 h-4" />
        </Button>

        <nav className="inline-flex items-start justify-center gap-[30px] relative flex-[0_0_auto]">
          {legalLinks.map((link, index) => (
            <Button
              key={`legal-${index}`}
              variant="ghost"
              className="inline-flex items-center gap-[7px] relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
            >
              <div className="text-[#476788] relative w-fit mt-[-1.00px] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)] hover:text-[#111d27] transition-colors">
                {link}
              </div>
            </Button>
          ))}
        </nav>

        <div className="relative w-fit font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[#476788] text-[length:var(--desktop-b2-14px-font-size)] text-right tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)]">
          Copyright Mailstep 2025
        </div>
      </div>
    </footer>
  );
};
