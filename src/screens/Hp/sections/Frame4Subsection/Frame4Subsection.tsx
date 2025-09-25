import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cardData = [
  {
    id: 1,
    background: "bg-[#f9e6e5]",
    title: "Výhody fulfillmentu",
    description: "Available immediately, without taking on debt.",
    buttonText: "Nezávazná poptávka",
    buttonStyle: "bg-[#e20714] text-white shadow-shadow-raised",
    backgroundImage: {
      src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-39888.png",
      className: "absolute top-[-299px] left-[-303px] w-[1321px] h-[1263px]",
    },
  },
  {
    id: 2,
    background:
      "bg-[linear-gradient(180deg,rgba(228,227,237,1)_0%,rgba(183,186,199,1)_100%)]",
    title: "Doplnkový služby",
    description: "Available immediately, without taking on debt.",
    buttonText: "Jak to funguje",
    buttonStyle: "bg-[#111d27] text-white",
    foregroundImage: {
      src: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-6.png",
      className:
        "absolute top-[178px] left-[187px] w-[334px] h-[291px] object-cover",
    },
  },
];

export const Frame4Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[865px] mx-auto items-center justify-between gap-16 relative">
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] inline-flex flex-col items-center gap-4 relative">
        <Badge className="h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 bg-[#f9e6e5] rounded-[30px] text-tokensaccentcolor font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)] border-none hover:bg-[#f9e6e5]">
          E-commerce fulfillment
        </Badge>

        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] relative w-full max-w-[661px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#111d27]">Vaše zásilky, náš spolehlivý </span>
          <span className="text-[#e20714]">a rychlý servis</span>
        </h2>
      </header>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex flex-col lg:flex-row items-center gap-10 w-full">
        {cardData.map((card, index) => (
          <Card
            key={card.id}
            className={`${card.background} flex flex-col w-full lg:w-[527px] h-[444px] items-start gap-4 p-10 relative rounded-[18px] border-none overflow-hidden`}
          >
            <CardContent className="flex flex-col items-start relative w-full flex-[0_0_auto] p-0">
              <h3
                className="relative w-full mt-[-1.00px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]"
                style={{ color: card.id === 1 ? "#111d27" : "black" }}
              >
                {card.title}
              </h3>

              <p className="relative w-full font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
                {card.description}
              </p>
            </CardContent>

            <Button
              className={`${card.buttonStyle} inline-flex h-auto items-center justify-center relative rounded-[100px] transition-colors hover:opacity-90`}
            >
              <div className="inline-flex justify-center gap-1 px-6 py-3 items-center relative">
                <div className="inline-flex items-center justify-center gap-2 px-1 py-0 relative">
                  <span className="relative mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                    {card.buttonText}
                  </span>
                </div>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </Button>

            {card.backgroundImage && (
              <img
                className={card.backgroundImage.className}
                alt="Background decoration"
                src={card.backgroundImage.src}
              />
            )}

            {card.foregroundImage && (
              <img
                className={card.foregroundImage.className}
                alt="Service illustration"
                src={card.foregroundImage.src}
              />
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
