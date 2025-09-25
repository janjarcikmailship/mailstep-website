import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

const featuredArticle = {
  category: "Články",
  categoryColor: "bg-[#f9e6e5]",
  categoryTextColor: "text-[#e20714]",
  title: "Jak vybrat správné fulfillment řešení pro váš e-shop v roce 2024",
  excerpt: "Kompletní průvodce výběrem fulfillment partnera, který vám pomůže škálovat váš byznys bez starostí s logistikou.",
  image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
  readTime: "8 min čtení",
  date: "15. ledna 2024"
};

const articles = [
  {
    id: 1,
    category: "Případové studie",
    categoryColor: "bg-[#d0d4e7]",
    categoryTextColor: "text-[#111d27]",
    title: "Jak VIF zvýšil prodeje o 300% díky Mailstep fulfillmentu",
    excerpt: "Příběh úspěšné spolupráce s kosmetickou značkou VIF a jejich cesta k mezinárodní expanzi.",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readTime: "5 min čtení",
    date: "12. ledna 2024"
  },
  {
    id: 2,
    category: "Novinky",
    categoryColor: "bg-[#abd9ff]",
    categoryTextColor: "text-[#00359f]",
    title: "Nové sklady v Německu a Polsku - rozšiřujeme naše služby",
    excerpt: "Otevíráme nová logistická centra pro rychlejší doručení po celé Evropě.",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readTime: "3 min čtení",
    date: "10. ledna 2024"
  },
  {
    id: 3,
    category: "Články",
    categoryColor: "bg-[#f9e6e5]",
    categoryTextColor: "text-[#e20714]",
    title: "5 trendů v e-commerce logistice, které budou dominovat v 2024",
    excerpt: "Objevte nejnovější trendy v oblasti fulfillmentu a připravte se na budoucnost.",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readTime: "6 min čtení",
    date: "8. ledna 2024"
  },
  {
    id: 4,
    category: "Články",
    categoryColor: "bg-[#f9e6e5]",
    categoryTextColor: "text-[#e20714]",
    title: "Jak optimalizovat náklady na dopravu v e-commerce",
    excerpt: "Praktické tipy pro snížení nákladů na dopravu a zvýšení marží vašeho e-shopu.",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readTime: "7 min čtení",
    date: "5. ledna 2024"
  },
  {
    id: 5,
    category: "Případové studie",
    categoryColor: "bg-[#d0d4e7]",
    categoryTextColor: "text-[#111d27]",
    title: "Mezinárodní expanze fashion e-shopu s Mailstep",
    excerpt: "Jak jsme pomohli módní značce expandovat do 10 evropských zemí během 6 měsíců.",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readTime: "4 min čtení",
    date: "3. ledna 2024"
  },
  {
    id: 6,
    category: "Novinky",
    categoryColor: "bg-[#abd9ff]",
    categoryTextColor: "text-[#00359f]",
    title: "Nová integrace s Shopify Plus - ještě jednodušší napojení",
    excerpt: "Představujeme vylepšenou integraci s Shopify Plus pro enterprise klienty.",
    image: "https://c.animaapp.com/mfwadh63sf4A0a/img/image-3.png",
    readTime: "2 min čtení",
    date: "1. ledna 2024"
  }
];

const categories = ["Všechny", "Články", "Případové studie", "Novinky"];

export const Blog = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex justify-center min-h-screen">
      <div className="flex w-full max-w-[1700px] relative flex-col items-center gap-16 md:gap-[110px] py-20">
        
        {/* Header Section */}
        <section className="flex flex-col items-center gap-8 w-full max-w-[865px] px-4">
          <Badge className="h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 bg-[#f9e6e5] hover:bg-[#f9e6e5] rounded-[30px] text-[#e20714] font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)]">
            Blog
          </Badge>
          
          <h1 className="text-2xl md:text-[length:var(--desktop-h1-56px-font-size)] font-desktop-h1-56px font-[number:var(--desktop-h1-56px-font-weight)] tracking-[var(--desktop-h1-56px-letter-spacing)] leading-tight md:leading-[var(--desktop-h1-56px-line-height)] [font-style:var(--desktop-h1-56px-font-style)] text-center">
            <span className="text-[#111d27]">Buďte v centru našeho </span>
            <span className="text-[#e20714]">know-how</span>
          </h1>
          
          <p className="text-base md:text-[length:var(--desktop-p1-22px-font-size)] font-desktop-p1-22px font-[number:var(--desktop-p1-22px-font-weight)] text-[#476788] tracking-[var(--desktop-p1-22px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p1-22px-line-height)] [font-style:var(--desktop-p1-22px-font-style)] text-center">
            Objevte nejdůležitější články, případové studie a e-booky pro váš byznys.
          </p>
        </section>

        {/* Categories Filter */}
        <section className="flex flex-wrap justify-center gap-4 w-full px-4">
          {categories.map((category, index) => (
            <Badge
              key={index}
              className={`px-6 py-2 rounded-[100px] cursor-pointer transition-colors ${
                index === 0 
                  ? "bg-[#111d27] text-white hover:bg-[#111d27]" 
                  : "bg-transparent border-2 border-[#111d27] text-[#111d27] hover:bg-[#111d27] hover:text-white"
              }`}
            >
              {category}
            </Badge>
          ))}
        </section>

        {/* Featured Article */}
        <section className="w-full max-w-[1320px] px-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col lg:flex-row gap-8 p-0">
              <div className="flex-1">
                <img
                  className="w-full h-64 lg:h-80 rounded-[18px] object-cover"
                  alt="Featured article"
                  src={featuredArticle.image}
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-center gap-6">
                <Badge className={`${featuredArticle.categoryColor} ${featuredArticle.categoryTextColor} w-fit px-3 py-1 rounded-[20px] text-sm`}>
                  {featuredArticle.category}
                </Badge>
                
                <h2 className="text-xl md:text-[length:var(--desktop-h2-44px-font-size)] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-tight md:leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-base md:text-[length:var(--desktop-p2-18px-font-size)] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-[#476788]">
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  
                  <Button className="bg-[#e20714] hover:bg-[#c20612] text-white px-6 py-2 rounded-[100px]">
                    Číst článek
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Articles Grid */}
        <section className="w-full max-w-[1320px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="bg-transparent border-none shadow-none group cursor-pointer">
                <CardContent className="flex flex-col gap-4 p-0">
                  <div className="relative overflow-hidden rounded-[18px]">
                    <img
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      alt="Article thumbnail"
                      src={article.image}
                    />
                  </div>
                  
                  <Badge className={`${article.categoryColor} ${article.categoryTextColor} w-fit px-3 py-1 rounded-[20px] text-xs`}>
                    {article.category}
                  </Badge>
                  
                  <h3 className="text-lg md:text-[length:var(--desktop-h4-20px-font-size)] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-tight md:leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)] group-hover:text-[#e20714] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm md:text-[length:var(--desktop-p3-14px-font-size)] font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#476788] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 text-xs text-[#476788]">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[#e20714] group-hover:gap-2 transition-all">
                      <span className="text-sm font-semibold">Číst více</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <section className="flex justify-center w-full px-4">
          <Button className="h-12 md:h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-8 transition-colors">
            <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-sm md:text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
              Načíst další články
            </span>
          </Button>
        </section>
      </div>
    </div>
  );
};
