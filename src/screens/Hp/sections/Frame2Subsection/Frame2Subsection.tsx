import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialData = [
  {
    id: 1,
    logo: "https://c.animaapp.com/mfwadh63sf4A0a/img/vif-black-2.png",
    testimonial:
      "Logistika je nejdůležitější součást každého eshopu, díky které můžete růst a škálovat váš businessu. Pro běžného smrtelníka jde o absolutní španělskou vesnici. Díky Mailstep jsem všechny tyto starosti delegoval profesionálům, což mi umožnilo soustředit se na rozvoj firmy a produktů.",
    authorName: "Jakub Lorenc",
    authorTitle: "CEO",
    authorImage:
      "https://c.animaapp.com/mfwadh63sf4A0a/img/young-man-working-warehouse-with-boxes-1.png",
    showNavigation: false,
  },
  {
    id: 2,
    logo: "https://c.animaapp.com/mfwadh63sf4A0a/img/vif-black-2.png",
    testimonial:
      "Logistika je nejdůležitější součást každého eshopu, díky které můžete růst a škálovat váš businessu. Pro běžného smrtelníka jde o absolutní španělskou vesnici. Díky Mailstep jsem všechny tyto starosti delegoval profesionálům, což mi umožnilo soustředit se na rozvoj firmy a produktů.",
    authorName: "Jakub Lorenc",
    authorTitle: "CEO",
    authorImage:
      "https://c.animaapp.com/mfwadh63sf4A0a/img/young-man-working-warehouse-with-boxes-1-2.png",
    showNavigation: true,
  },
  {
    id: 3,
    logo: "https://c.animaapp.com/mfwadh63sf4A0a/img/vif-black-2.png",
    testimonial:
      "Logistika je nejdůležitější součást každého eshopu, díky které můžete růst a škálovat váš businessu. Pro běžného smrtelníka jde o absolutní španělskou vesnici. Díky Mailstep jsem všechny tyto starosti delegoval profesionálům, což mi umožnilo soustředit se na rozvoj firmy a produktů.",
    authorName: "Jakub Lorenc",
    authorTitle: "CEO",
    authorImage:
      "https://c.animaapp.com/mfwadh63sf4A0a/img/young-man-working-warehouse-with-boxes-1-2.png",
    showNavigation: false,
  },
];

export const Frame2Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-20 relative">
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full max-w-[865px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
        <span className="text-[#111d27]">
          Jsme spolehlivý logistický partner, který svým klientům{" "}
        </span>
        <span className="text-[#db2b19]">zajišťuje fulfillment</span>
      </header>

      <div className="flex items-center gap-10 w-full">
        {testimonialData.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${200 + index * 200}ms] flex-1 bg-[#f8f8f8] border-none rounded-[18px] relative`}
          >
            <CardContent className="flex flex-col items-center gap-[85px] px-[90px] py-[50px]">
              <div className="flex flex-col items-center gap-[55px] w-full">
                <div className="flex flex-col items-center gap-[35px] w-full">
                  <div className="flex flex-col items-center gap-[39px] w-full">
                    <img
                      className="w-[95px] h-[42px] object-cover"
                      alt="VIF logo"
                      src={testimonial.logo}
                    />

                    <p className="font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] text-center tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[100px]">
                  <div className="flex items-center gap-7">
                    <div className="relative w-[74px] h-[85px]">
                      <div className="absolute top-[15px] left-0.5 w-[70px] h-[70px] bg-white rounded-[35px]" />
                      <Avatar className="absolute top-0 left-0 w-[74px] h-[82px]">
                        <AvatarImage
                          src={testimonial.authorImage}
                          alt={testimonial.authorName}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          {testimonial.authorName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                      <div className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#e20714] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                        {testimonial.authorName}
                      </div>

                      <div className="font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[#111d27] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)]">
                        {testimonial.authorTitle}
                      </div>
                    </div>
                  </div>

                  <Button className="h-[50px] bg-[#e20714] hover:bg-[#c41e0f] rounded-[100px] shadow-shadow-raised px-6 py-0 gap-1 transition-colors">
                    <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                      Case study
                    </span>
                    <img
                      className="w-4 h-4"
                      alt="Arrow right"
                      src="https://c.animaapp.com/mfwadh63sf4A0a/img/arrow-right-2-3.svg"
                    />
                  </Button>
                </div>
              </div>
            </CardContent>

            {testimonial.showNavigation && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 -translate-y-1/2 -left-[62px] w-[116px] h-[116px] p-0 hover:bg-transparent"
                >
                  <img
                    className="w-[116px] h-[116px]"
                    alt="Previous testimonial"
                    src="https://c.animaapp.com/mfwadh63sf4A0a/img/button-arrow-1.svg"
                  />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 -translate-y-1/2 -right-[5px] w-[116px] h-[116px] p-0 hover:bg-transparent"
                >
                  <img
                    className="w-[116px] h-[116px]"
                    alt="Next testimonial"
                    src="https://c.animaapp.com/mfwadh63sf4A0a/img/button-arrow.svg"
                  />
                </Button>
              </>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
