import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const BannerSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1320px] items-start gap-[21px] px-[60px] py-10 relative bg-[#111d27] rounded-3xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="flex flex-col items-start gap-[21px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-[468px] mt-[-1.00px] font-desktop-h3-36px font-[number:var(--desktop-h3-36px-font-weight)] text-palettesbasicwhite text-[length:var(--desktop-h3-36px-font-size)] tracking-[var(--desktop-h3-36px-letter-spacing)] leading-[var(--desktop-h3-36px-line-height)] [font-style:var(--desktop-h3-36px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Chcete se i vy zbavit starostí s logistikou?
        </h2>

        <p className="relative w-[492px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-tokensseparator-colour text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Nechte si zpracovat nezávaznou nabídku. Rádi vám ukážeme náš sklad a
          vysvětlíme, jak funguje celý proces napojení. Zbavte se starostí s
          logistikou ještě dnes.
        </p>

        <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 py-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] transition-colors">
          <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
            Nezávazná poptávka
          </span>
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <img
        className="absolute top-[-409px] left-[373px] w-[1137px] h-[1293px] pointer-events-none"
        alt="Group"
        src="https://c.animaapp.com/mfwadh63sf4A0a/img/group-39927.png"
      />
    </section>
  );
};
