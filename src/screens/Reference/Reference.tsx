import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

const testimonials = [
  {
    id: 1,
    logo: "https://c.animaapp.com/mfwadh63sf4A0a/img/vif-black-2.png",
    testimonial: "Logistika je nejdůležitější součást každého eshopu, díky které můžete růst a škálovat váš businessu. Pro běžného smrtelníka jde o absolutní španělskou vesnici. Díky Mailstep jsem všechny tyto starosti delegoval profesionálům, což mi umožnilo soustředit se na rozvoj firmy a produktů.",
    authorName: "Jakub Lorenc",
    authorTitle: "CEO",
    authorImage: "https://c.animaapp.com/mfwadh63sf4A0a/img/young-man-working-warehouse-with-boxes-1.png",
    category: "E-commerce",
    results: "300% růst prodeje",
    industry: "Kosmetika"
  },
  {
    id: 2,
    logo: "https://c.animaapp.com/mfwadh63sf4A0a/img/vif-black-2.png",
    testimonial: "Díky Mailstep jsme dokázali expandovat do 15 evropských zemí během 6 měsíců. Jejich logistické řešení nám umožnilo soustředit se na marketing a vývoj produktů.",
    authorName: "Marie Svobodová",
    authorTitle: "Founder",
    authorImage: "https://c.animaapp.com/mfwadh63sf4A0a/img/young-man-working-warehouse-with-boxes-1-2.png",
    category: "B2B",
    results: "15 nových trhů",
    industry: "Elektronika"
  },
  {
    id: 3,
    logo: "https://c.animaapp.com/mfwadh63sf4A0a/img/vif-black-2.png",
    testimonial: "Rychlost doručení se zlepšila o 40% a spokojenost zákazníků vzrostla na 98%. Mailstep je skutečně spolehlivý partner.",
    authorName: "Tomáš Novák",
    authorTitle: "Operations Manager",
    authorImage: "https://c.animaapp.com/mfwadh63sf4A0a/img/young-man-working-warehouse-with-boxes-1.png",
    category: "E-commerce",
    results: "98% spokojenost",
    industry: "Fashion"
  }
];

const stats = [
  { value: "500+", label: "Spokojených klientů" },
  { value: "15", label: "Zemí pokrytí" },
  { value: "99.8%", label: "Úspěšnost doručení" },
  { value: "24/7", label: "Zákaznická podpora" }
];

export const Reference = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex justify-center min-h-screen">
      <div className="flex w-full max-w-[1700px] relative flex-col items-center gap-16 md:gap-[110px] py-20">
        
        {/* Header Section */}
        <section className="flex flex-col items-center gap-8 w-full max-w-[865px] px-4">
          <Badge className="h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 bg-[#f9e6e5] hover:bg-[#f9e6e5] rounded-[30px] text-[#e20714] font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)]">
            Reference
          </Badge>
          
          <h1 className="text-2xl md:text-[length:var(--desktop-h1-56px-font-size)] font-desktop-h1-56px font-[number:var(--desktop-h1-56px-font-weight)] tracking-[var(--desktop-h1-56px-letter-spacing)] leading-tight md:leading-[var(--desktop-h1-56px-line-height)] [font-style:var(--desktop-h1-56px-font-style)] text-center">
            <span className="text-[#111d27]">Příběhy našich </span>
            <span className="text-[#e20714]">úspěšných klientů</span>
          </h1>
          
          <p className="text-base md:text-[length:var(--desktop-p1-22px-font-size)] font-desktop-p1-22px font-[number:var(--desktop-p1-22px-font-weight)] text-[#476788] tracking-[var(--desktop-p1-22px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p1-22px-line-height)] [font-style:var(--desktop-p1-22px-font-style)] text-center">
            Objevte, jak jsme pomohli stovkám e-shopů dosáhnout jejich cílů díky našemu fulfillment řešení.
          </p>
        </section>

        {/* Stats Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-[1094px] px-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center">
              <div className="text-3xl md:text-[length:var(--desktop-h1-56px-font-size)] font-desktop-h1-56px font-[number:var(--desktop-h1-56px-font-weight)] text-[#111d27] tracking-[var(--desktop-h1-56px-letter-spacing)] leading-[var(--desktop-h1-56px-line-height)] [font-style:var(--desktop-h1-56px-font-style)]">
                {stat.value}
              </div>
              <div className="text-sm md:text-[length:var(--desktop-l2-16px-font-size)] font-desktop-l2-16px font-[number:var(--desktop-l2-16px-font-weight)] text-[#476788] tracking-[var(--desktop-l2-16px-letter-spacing)] leading-[var(--desktop-l2-16px-line-height)] [font-style:var(--desktop-l2-16px-font-style)]">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="flex flex-col items-center gap-12 w-full px-4">
          <h2 className="text-xl md:text-[length:var(--desktop-h2-44px-font-size)] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-tight md:leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] text-center">
            Co říkají naši klienti
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1320px]">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-[#f8f8f8] border-none rounded-[18px] p-6">
                <CardContent className="flex flex-col gap-6 p-0">
                  <div className="flex items-center justify-between">
                    <img className="w-20 h-8 object-contain" alt="Company logo" src={testimonial.logo} />
                    <Badge className="bg-[#e20714] text-white text-xs px-2 py-1 rounded-full">
                      {testimonial.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm md:text-[length:var(--desktop-p2-18px-font-size)] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full object-cover" alt={testimonial.authorName} src={testimonial.authorImage} />
                    <div>
                      <div className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#e20714] text-sm">
                        {testimonial.authorName}
                      </div>
                      <div className="font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[#111d27] text-xs">
                        {testimonial.authorTitle}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-[#d4e0ed]">
                    <div className="text-xs text-[#476788]">
                      <div className="font-semibold text-[#111d27]">{testimonial.results}</div>
                      <div>{testimonial.industry}</div>
                    </div>
                    <Button className="bg-[#e20714] hover:bg-[#c20612] text-white text-xs px-4 py-2 rounded-full">
                      Celá studie
                      <ArrowRightIcon className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center gap-8 w-full max-w-[865px] px-4 py-16 bg-[#f7f7f7] rounded-[26px]">
          <h2 className="text-xl md:text-[length:var(--desktop-h2-44px-font-size)] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-tight md:leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] text-center">
            <span className="text-[#111d27]">Chcete být </span>
            <span className="text-[#e20714]">další úspěšnou referencí?</span>
          </h2>
          
          <p className="text-base md:text-[length:var(--desktop-p2-18px-font-size)] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)] text-center">
            Připojte se k našim spokojeným klientům a začněte růst bez starostí s logistikou.
          </p>
          
          <Button className="h-12 md:h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 transition-colors">
            <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-sm md:text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
              Nezávazná poptávka
            </span>
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </div>
    </div>
  );
};
