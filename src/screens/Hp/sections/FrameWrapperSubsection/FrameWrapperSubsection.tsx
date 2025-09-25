import React from "react";

export const FrameWrapperSubsection = (): JSX.Element => {
  const statisticsData = [
    {
      value: "99%",
      description: "Přesnost Doručení",
    },
    {
      value: "30 +",
      description: "Let Skušeností",
    },
    {
      value: "6",
      description: "Zákaznický Servis V 6 Jazycích",
    },
    {
      value: "99%",
      description: "Přesnost Doručení",
    },
    {
      value: "99%",
      description: "Přesnost Doručení",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1094px] mx-auto items-center gap-20 relative">
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] relative w-full max-w-[865px] [font-family:'Manrope',Helvetica] font-normal text-transparent text-[44px] text-center leading-[44px]">
        <span className="font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] text-[length:var(--desktop-h2-44px-font-size)]">
          Vaše zboží v bezpečí, vaši zákazníci nadšení –{" "}
        </span>

        <span className="font-[number:var(--desktop-h2-44px-font-weight)] text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] text-[length:var(--desktop-h2-44px-font-size)]">
          o zbytek se postaráme my
        </span>
      </header>

      <div className="flex items-start gap-10 relative w-full">
        {statisticsData.map((stat, index) => (
          <div
            key={index}
            className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${400 + index * 100}ms] flex-1 min-w-0 flex flex-col items-start gap-2.5 relative`}
          >
            <div className="relative w-full font-desktop-h1-56px font-[number:var(--desktop-h1-56px-font-weight)] text-[#111d27] text-[length:var(--desktop-h1-56px-font-size)] tracking-[var(--desktop-h1-56px-letter-spacing)] leading-[var(--desktop-h1-56px-line-height)] [font-style:var(--desktop-h1-56px-font-style)]">
              {stat.value}
            </div>

            <div className="relative w-full font-desktop-l2-16px font-[number:var(--desktop-l2-16px-font-weight)] text-[#476788] text-[length:var(--desktop-l2-16px-font-size)] tracking-[var(--desktop-l2-16px-letter-spacing)] leading-[var(--desktop-l2-16px-line-height)] [font-style:var(--desktop-l2-16px-font-style)]">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
