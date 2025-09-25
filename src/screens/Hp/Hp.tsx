import React from "react";
import { BannerSubsection } from "./sections/BannerSubsection/BannerSubsection";
import { ContactFormSubsection } from "./sections/ContactFormSubsection/ContactFormSubsection";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection/FooterSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection/Frame3Subsection";
import { Frame4Subsection } from "./sections/Frame4Subsection/Frame4Subsection";
import { Frame5Subsection } from "./sections/Frame5Subsection/Frame5Subsection";
import { Frame6Subsection } from "./sections/Frame6Subsection/Frame6Subsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const pressLogos = [
  {
    className: "absolute top-2.5 left-0 w-28 h-9",
    alt: "Group",
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-9-1.png",
  },
  {
    className: "absolute w-full h-[41.28%] top-[29.32%] left-0",
    alt: "Vector",
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/vector.svg",
  },
  {
    className: "absolute top-3.5 left-0 w-28 h-7",
    alt: "Group",
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-6-1.png",
  },
  {
    className: "absolute w-[100.00%] h-[44.65%] top-[27.68%] left-0",
    alt: "Group",
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-1.png",
  },
  {
    className: "absolute top-[19px] left-0.5 w-[108px] h-8",
    alt: "Group",
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-17-1.png",
  },
  {
    className: "absolute top-2.5 left-0 w-28 h-[37px]",
    alt: "Group",
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-5-1.png",
  },
  {
    className: "absolute top-3.5 -left-2 w-[129px] h-[27px]",
    alt: "Group",
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-7-1.png",
  },
];

export const Hp = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full flex justify-center"
      data-model-id="2336:8735"
    >
      <div className="flex w-full max-w-[1700px] relative flex-col items-center gap-16 md:gap-[110px]">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full">
          <FrameSubsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full flex justify-center">
          <FrameWrapperSubsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full flex justify-center">
          <DivWrapperSubsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full">
          <DivSubsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] w-full">
          <SectionComponentNodeSubsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] w-full">
          <Frame1Subsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] w-full">
          <BannerSubsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] w-full">
          <Frame2Subsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms] w-full">
          <Frame3Subsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] w-full">
          <Frame4Subsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms] w-full">
          <Frame5Subsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms] w-full flex justify-center">
          <Frame6Subsection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms] w-full">
          <ContactFormSubsection />
        </div>

        <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2600ms] flex flex-col w-[1320px] items-start gap-6 relative flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] font-desktop-l2-16px font-[number:var(--desktop-l2-16px-font-weight)] text-gray-900 text-[length:var(--desktop-l2-16px-font-size)] text-center tracking-[var(--desktop-l2-16px-letter-spacing)] leading-[var(--desktop-l2-16px-line-height)] [font-style:var(--desktop-l2-16px-font-style)]">
            Napsali O Nás
          </h2>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            {pressLogos.map((logo, index) => (
              <div key={index} className="relative w-28 h-14">
                <img className={logo.className} alt={logo.alt} src={logo.src} />
              </div>
            ))}
          </div>
        </section>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2800ms] w-full">
          <FooterSubsection />
        </div>
      </div>
    </div>
  );
};
