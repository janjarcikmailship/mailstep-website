import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const articleData = [
  {
    id: 1,
    category: "Články",
    categoryColor: "bg-[#f9e6e5]",
    categoryTextColor: "text-[#e20714]",
    title: "Spolupráce Puravia a Mailstepu: Když značka roste...",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readMoreText: "Read now",
    arrowIcon: "https://c.animaapp.com/mfwadh63sf4A0a/img/arrow-right-2-3.svg",
  },
  {
    id: 2,
    category: "Případové studie",
    categoryColor: "bg-[#d0d4e7]",
    categoryTextColor: "text-[#111d27]",
    title: "Spolupráce Puravia a Mailstepu: Když značka roste...",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readMoreText: "Read now",
    arrowIcon: "https://c.animaapp.com/mfwadh63sf4A0a/img/arrow-right-2-3.svg",
  },
  {
    id: 3,
    category: "Novinky",
    categoryColor: "bg-[#abd9ff]",
    categoryTextColor: "text-[#00359f]",
    title: "Spolupráce Puravia a Mailstepu: Když značka roste...",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readMoreText: "Read now",
    arrowIcon: "https://c.animaapp.com/mfwadh63sf4A0a/img/arrow-right-2-3.svg",
  },
];

const featuredArticle = {
  category: "Články",
  categoryColor: "bg-[#f9e6e5]",
  categoryTextColor: "text-[#e20714]",
  title: "Spolupráce Puravia a Mailstepu: Když značka a rozvíjí se tak ....",
  image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
  readMoreText: "Read now",
  arrowIcon: "https://c.animaapp.com/mfwadh63sf4A0a/img/arrow-right-2.svg",
};

export const Frame5Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-20 px-[260px] py-[110px] bg-[#f7f7f7] rounded-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <header className="inline-flex items-start gap-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="w-[478px] mt-[-1.00px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-transparent text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            Buďte v centru
            <br />
          </span>
          <span className="text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            našeho know how
          </span>
        </h2>

        <p className="w-[413px] mt-[-1.00px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
          Objevte nejdůležitější články, případové studie a<br />
          e-booky pro váš byznys.
        </p>
      </header>

      <div className="flex flex-col items-center gap-20 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex items-start gap-[43px] w-full">
          <Card className="flex flex-col w-[526px] h-[353px] items-start justify-center gap-[18px] bg-transparent border-none shadow-none">
            <CardContent className="flex-1 w-full p-0">
              <img
                className="w-[526px] h-[197px] rounded-[18px] object-cover"
                alt="Featured article image"
                src={featuredArticle.image}
              />
            </CardContent>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="items-start gap-[7px] flex-[0_0_auto] inline-flex">
                <Badge
                  className={`inline-flex items-center justify-center gap-[6.61px] px-[9.91px] py-0 ${featuredArticle.categoryColor} rounded-[19.82px] border-none hover:${featuredArticle.categoryColor}`}
                >
                  <span
                    className={`w-fit mt-[-0.66px] font-desktop-p5-12-px font-[number:var(--desktop-p5-12-px-font-weight)] ${featuredArticle.categoryTextColor} text-[length:var(--desktop-p5-12-px-font-size)] tracking-[var(--desktop-p5-12-px-letter-spacing)] leading-[var(--desktop-p5-12-px-line-height)] whitespace-nowrap [font-style:var(--desktop-p5-12-px-font-style)]`}
                  >
                    {featuredArticle.category}
                  </span>
                </Badge>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <h3 className="w-full mt-[-1.00px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                  {featuredArticle.title}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1 cursor-pointer group">
                <div className="inline-flex items-center justify-center gap-2 pl-0 pr-1 py-0">
                  <span className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#e20714] text-base text-center tracking-[0] leading-7 whitespace-nowrap group-hover:underline">
                    {featuredArticle.readMoreText}
                  </span>
                </div>
                <img
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  alt="Arrow right"
                  src={featuredArticle.arrowIcon}
                />
              </div>
            </div>
          </Card>

          <div className="flex flex-col w-[526px] items-start gap-6">
            {articleData.map((article, index) => (
              <Card
                key={article.id}
                className="flex items-start gap-[18px] w-full bg-transparent border-none shadow-none"
              >
                <CardContent className="w-[93.75px] h-[90px] p-0">
                  <img
                    className="w-[94px] h-[90px] rounded-[18px] object-cover"
                    alt="Article thumbnail"
                    src={article.image}
                  />
                </CardContent>

                <div className="flex flex-col items-start gap-2.5 flex-1 grow">
                  <div className="items-start gap-[7px] flex-[0_0_auto] inline-flex">
                    <Badge
                      className={`inline-flex items-center justify-center gap-[6.61px] px-[9.91px] py-0 ${article.categoryColor} rounded-[19.82px] border-none hover:${article.categoryColor}`}
                    >
                      <span
                        className={`w-fit mt-[-0.66px] font-desktop-p5-12-px font-[number:var(--desktop-p5-12-px-font-weight)] ${article.categoryTextColor} text-[length:var(--desktop-p5-12-px-font-size)] tracking-[var(--desktop-p5-12-px-letter-spacing)] leading-[var(--desktop-p5-12-px-line-height)] whitespace-nowrap [font-style:var(--desktop-p5-12-px-font-style)]`}
                      >
                        {article.category}
                      </span>
                    </Badge>
                  </div>

                  <h3 className="w-full h-[70px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                    {article.title}
                  </h3>

                  <div className="inline-flex items-center gap-1 cursor-pointer group">
                    <div className="inline-flex items-center justify-center gap-2 pl-0 pr-1 py-0">
                      <span className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#e20714] text-base text-center tracking-[0] leading-7 whitespace-nowrap group-hover:underline">
                        {article.readMoreText}
                      </span>
                    </div>
                    <img
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      alt="Arrow right"
                      src={article.arrowIcon}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Button className="inline-flex h-[50px] items-center justify-center mb-[-1.00px] bg-[#e20714] rounded-[100px] shadow-shadow-raised hover:bg-[#c5060f] transition-colors h-auto">
          <div className="inline-flex justify-center gap-1 px-6 py-0 rounded-xl items-center">
            <div className="inline-flex items-center justify-center gap-2 px-1 py-0">
              <span className="w-fit mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                Prohlédnout si vše
              </span>
            </div>
            <ArrowRightIcon className="w-4 h-4 text-white" />
          </div>
        </Button>
      </div>
    </section>
  );
};
