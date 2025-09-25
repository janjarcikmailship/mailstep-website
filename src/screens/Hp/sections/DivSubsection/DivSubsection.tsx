import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/desktop.svg",
    title: "Snadná integrace",
    description:
      "Díky vlastní unikátní technologii váš e-shop snadno napojíme na naše systémy.",
    delay: "200ms",
  },
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/expeditions.svg",
    title: "Nižší náklady na dopravu",
    description: "Dokážeme pro vás získat lepší ceny od dopravců.",
    delay: "400ms",
  },
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/globe-3-3-3-1-1.svg",
    title: "Prodej do zahraničí",
    description:
      "Zalistujte s námi zboží na marketplace a vyzkoušejte si prodej na zahraniční trhy.",
    delay: "600ms",
  },
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/component-1.svg",
    title: "Prostor pro vlastní růst",
    description: "Outsourcování logistiky vás zbaví zbytečných starostí.",
    delay: "800ms",
  },
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/component-1-1.svg",
    title: "Večer objednáno, zítra dodáno",
    description:
      "Všechny zásilky zadané do 19:30 jsou předány dopravci ještě týž den a doručeny následující den. To vám dává jedinečnou konkurenční výhodu.",
    delay: "1000ms",
  },
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/puzzle-1.svg",
    title: "Jednoduché rozšíření",
    description:
      "Váš e-shop napojíme na potřebné systémy a dodavatele služeb, ať už jde o e-shopové platformy, marketplaces, nebo agregátory dopravních řešení.",
    delay: "1200ms",
  },
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/component-1-2.svg",
    title: "Snížení komplexity a nákladů",
    description:
      "S Mailstepem nemáte fixní náklady, investice do IT nebo do vybavení skladu.",
    delay: "1400ms",
  },
  {
    icon: "https://c.animaapp.com/mfwadh63sf4A0a/img/products.svg",
    title: "Řešení vratek",
    description:
      "Postaráme se za vás i o řešení vratek. Celý proces bude profesionálně vedený a vy si s ním nebudete muset dělat starost.",
    delay: "1600ms",
  },
];

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 md:gap-20 w-full px-4">
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] max-w-[865px] text-center">
        <h2 className="text-2xl md:text-[length:var(--desktop-h2-44px-font-size)] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-tight md:leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#111d27]">
            Proč Mailstep? váš klíč k bezstarostné logistice a{" "}
          </span>
          <span className="text-[#e20714]">spokojenějším zákazníkům.</span>
        </h2>
      </header>

      <div className="flex flex-col w-full max-w-[1320px] items-start gap-10 md:gap-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full">
          {features.slice(0, 4).map((feature, index) => (
            <Card
              key={index}
              className="translate-y-[-1rem] animate-fade-in opacity-0 bg-transparent border-none shadow-none"
              style={
                { "--animation-delay": feature.delay } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col items-start gap-5 p-0">
                <div className="w-[61px] h-[61px] bg-[#f7f7f7] rounded-[18px] flex items-center justify-center">
                  <img
                    className="w-[30px] h-[30px]"
                    alt={feature.title}
                    src={feature.icon}
                  />
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <h3 className="text-lg md:text-[length:var(--desktop-h4-20px-font-size)] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-tight md:leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                    {feature.title}
                  </h3>

                  <p className="text-sm md:text-[length:var(--desktop-p3-14px-font-size)] font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#476788] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full">
          {features.slice(4, 8).map((feature, index) => (
            <Card
              key={index + 4}
              className="translate-y-[-1rem] animate-fade-in opacity-0 bg-transparent border-none shadow-none"
              style={
                { "--animation-delay": feature.delay } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col items-start gap-5 p-0">
                <div className="w-[61px] h-[61px] bg-[#f7f7f7] rounded-[18px] flex items-center justify-center">
                  <img
                    className="w-[30px] h-[30px]"
                    alt={feature.title}
                    src={feature.icon}
                  />
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <h3 className="font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                    {feature.title}
                  </h3>

                  <p className="font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#476788] text-[length:var(--desktop-p3-14px-font-size)] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] h-[50px] bg-[#e20714] hover:bg-[#c5060f] rounded-[100px] shadow-shadow-raised px-6 transition-colors">
        <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
          Víc o fulfillmentovém řešení
        </span>
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </Button>
    </section>
  );
};
