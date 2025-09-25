import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const Frame3Subsection = (): JSX.Element => {
  const deliveryOptions = [
    {
      badge: "D+1",
      description: "Doručení nasledujíci den",
      isActive: true,
    },
    {
      badge: "D+2",
      description: "Doručení nasledujíci den",
      isActive: false,
    },
  ];

  const warehouseLocations = [
    {
      top: "top-[74.79%]",
      left: "left-[32.80%]",
      iconSrc: "https://c.animaapp.com/mfwadh63sf4A0a/img/warehouse.svg",
      iconSize: "w-[52.17%] h-[52.17%]",
    },
    {
      top: "top-[54.29%]",
      left: "left-[38.25%]",
      iconSrc: "https://c.animaapp.com/mfwadh63sf4A0a/img/warehouse-1.svg",
      iconSize: "w-[46.56%] h-[46.56%]",
    },
    {
      top: "top-[80.67%]",
      left: "left-[49.16%]",
      iconSrc: "https://c.animaapp.com/mfwadh63sf4A0a/img/warehouse-1.svg",
      iconSize: "w-[46.56%] h-[46.56%]",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[865px] items-center gap-20 relative">
      <header className="flex flex-col items-center gap-4 relative self-stretch w-full translate-y-[-1rem] animate-fade-in opacity-0">
        <Badge className="h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 bg-[#f9e6e5] rounded-[30px] text-[#e20714] font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)] hover:bg-[#f9e6e5]">
          Global Scale
        </Badge>

        <h2 className="relative self-stretch font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <span className="text-[#111d27]">
            Logistické centrum pro růst vašeho byznysu
          </span>
          <span className="text-[#e20714]"> v centru Europy</span>
        </h2>
      </header>

      <div className="inline-flex flex-col items-center gap-[30px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="inline-flex items-start gap-[60px] relative flex-wrap justify-center">
          {deliveryOptions.map((option, index) => (
            <div
              key={option.badge}
              className="flex w-[313px] h-[35px] items-center gap-4 relative"
            >
              <Badge
                className={`h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 rounded-[30px] font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)] ${
                  option.isActive
                    ? "bg-[#e20714] text-white hover:bg-[#e20714]"
                    : "bg-[#b7bac7] text-[#111d27] hover:bg-[#b7bac7]"
                }`}
              >
                {option.badge}
              </Badge>

              <p className="relative w-fit mt-[-0.50px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] whitespace-nowrap [font-style:var(--desktop-p2-18px-font-style)]">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-[638px] h-[530.92px] bg-[url(https://c.animaapp.com/mfwadh63sf4A0a/img/g1.png)] bg-[100%_100%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          {warehouseLocations.map((location, index) => (
            <div
              key={index}
              className={`absolute w-[6.43%] h-[7.73%] ${location.top} ${location.left} bg-white rounded-[20.52px] shadow-[0px_3.57px_24.54px_#00000029] translate-y-[-1rem] animate-fade-in opacity-0`}
              style={{ "--animation-delay": `${800 + index * 200}ms` }}
            >
              <img
                className={`${location.iconSize} absolute top-[23.91%] left-[23.92%]`}
                alt="Warehouse"
                src={location.iconSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
