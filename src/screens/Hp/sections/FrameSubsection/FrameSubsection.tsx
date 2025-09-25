import { ArrowRightIcon, ChevronDownIcon, PlayIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Služby", hasDropdown: true, href: "#" },
  { label: "Řešení na míru", hasDropdown: true, href: "#" },
  { label: "Jak to funguje", hasDropdown: false, isActive: true, href: "#" },
  { label: "Reference", hasDropdown: false, href: "/reference" },
  { label: "Blog", hasDropdown: false, href: "/blog" },
  { label: "Kontakt", hasDropdown: false, href: "/kontakt" },
];

const companyLogos = [
  {
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-9.png",
    alt: "Group",
    className: "top-2.5 left-0 w-28 h-9",
  },
  {
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/vector.svg",
    alt: "Vector",
    className: "w-full h-[41.28%] top-[29.32%] left-0",
  },
  {
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-6.png",
    alt: "Group",
    className: "top-3.5 left-0 w-28 h-7",
  },
  {
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group.png",
    alt: "Group",
    className: "w-[100.00%] h-[44.65%] top-[27.68%] left-0",
  },
  {
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-17.png",
    alt: "Group",
    className: "top-[19px] left-0.5 w-[108px] h-8",
  },
  {
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-5.png",
    alt: "Group",
    className: "top-2.5 left-0 w-28 h-[37px]",
  },
  {
    src: "https://c.animaapp.com/mfwadh63sf4A0a/img/group-7.png",
    alt: "Group",
    className: "top-3.5 -left-2 w-[129px] h-[27px]",
  },
];

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center relative w-full">
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex items-center justify-between px-4 md:px-[190px] py-[9px] relative w-full bg-white border-b [border-bottom-style:solid] border-[#d4e0ed]">
        <div className="inline-flex items-center gap-4 md:gap-10 relative">
          <Link to="/">
            <img
              className="relative w-20 h-6 md:w-28 md:h-[33px]"
              alt="Logo"
              src="https://c.animaapp.com/mfwadh63sf4A0a/img/logo-2-1.svg"
            />
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="inline-flex items-center gap-[30px] relative">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.hasDropdown ? (
                    <NavigationMenuTrigger className="inline-flex items-center gap-[7px] relative bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 h-auto font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)] text-[#476788]">
                      <span className="mt-[-1.00px] whitespace-nowrap">
                        {item.label}
                      </span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </NavigationMenuTrigger>
                  ) : (
                    <Link
                      to={item.href}
                      className={`inline-flex items-center gap-[7px] relative ${item.isActive ? "text-tokensaccentcolor" : "text-[#476788]"} mt-[-1.00px] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)] hover:text-tokensaccentcolor transition-colors`}
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-6 relative">
          <button className="hidden md:inline-flex items-center gap-[7px] relative ml-[-40.50px] text-[#476788] mt-[-1.00px] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)]">
            Přihlášení
          </button>

          <Button className="inline-flex h-10 md:h-[50px] items-center justify-center relative mt-[-1.00px] mb-[-1.00px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised">
            <div className="inline-flex justify-center gap-1 px-3 md:px-6 py-0 rounded-xl items-center relative">
              <div className="inline-flex items-center justify-center gap-2 px-1 py-0 relative">
                <span className="relative mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-sm md:text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                  <span className="hidden md:inline">Nezávazná poptávka</span>
                  <span className="md:hidden">Poptávka</span>
                </span>
              </div>
            </div>
          </Button>

          <div className="items-center gap-1 inline-flex relative">
            <div className="relative w-8 h-8 md:w-[39px] md:h-[39px] bg-[#f8f8f8] rounded-full">
              <img
                className="absolute top-1 left-1 md:top-1.5 md:left-[7px] w-6 h-6 md:w-[26px] md:h-[26px]"
                alt="Czech republic"
                src="https://c.animaapp.com/mfwadh63sf4A0a/img/czech-republic.svg"
              />
            </div>
            <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </header>

      <main className="flex flex-col w-full items-start gap-8 md:gap-[46px] px-4 md:px-[167px] py-10 md:py-20 relative rounded-[0px_0px_26px_26px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,248,248,1)_100%)]">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[154px] relative w-full">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex flex-col items-start gap-6 md:gap-11 relative flex-1">
            <div className="flex flex-col items-start gap-4 md:gap-5 relative w-full">
              <Badge className="h-7 md:h-[31px] items-center justify-center gap-2.5 px-3 md:px-[15px] py-0 bg-[#f9e6e5] hover:bg-[#f9e6e5] rounded-[30px] text-[#e20714] text-sm md:text-[length:var(--desktop-l1-18px-font-size)] font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)]">
                E-commerce fulfillment
              </Badge>

              <h1 className="relative text-2xl md:text-[length:var(--desktop-h1-56px-font-size)] font-desktop-h1-56px font-[number:var(--desktop-h1-56px-font-weight)] tracking-[var(--desktop-h1-56px-letter-spacing)] leading-tight md:leading-[var(--desktop-h1-56px-line-height)] [font-style:var(--desktop-h1-56px-font-style)]">
                <span className="text-[#111d27]">Kompletní </span>
                <span className="text-[#e20714]">fulfillment</span>
                <span className="text-[#111d27]">
                  {" "}
                  bez starostí, přímo ve středu Evropy.
                </span>
              </h1>

              <p className="relative text-base md:text-[length:var(--desktop-p1-22px-font-size)] font-desktop-p1-22px font-[number:var(--desktop-p1-22px-font-weight)] text-[#476788] tracking-[var(--desktop-p1-22px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p1-22px-line-height)] [font-style:var(--desktop-p1-22px-font-style)]">
                Postaráme se o vše od skladu po poslední míli. Vy se můžete
                soustředit na růst své značky.
              </p>
            </div>

            <div className="flex flex-col md:inline-flex md:flex-row items-stretch md:items-center gap-3 md:gap-2.5 relative w-full md:w-auto">
              <Button className="inline-flex h-12 md:h-[50px] items-center justify-center relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised">
                <div className="inline-flex justify-center gap-1 px-4 md:px-6 py-0 rounded-xl items-center relative">
                  <div className="inline-flex items-center justify-center gap-2 px-1 py-0 relative">
                    <span className="relative mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-sm md:text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                      Nezávazná poptávka
                    </span>
                  </div>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Button>

              <Button className="inline-flex h-12 items-center justify-center relative bg-[#111d27] hover:bg-[#0f1a23] rounded-[100px]">
                <div className="inline-flex justify-center gap-1 px-4 md:px-6 py-0 rounded-xl items-center relative">
                  <div className="inline-flex items-center justify-center gap-2 px-1 py-0 relative">
                    <span className="relative mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-sm md:text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                      Jak to funguje
                    </span>
                  </div>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Button>
            </div>
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] relative w-full md:w-[640px] h-48 md:h-[359px] bg-[url(https://c.animaapp.com/mfwadh63sf4A0a/img/image-4.svg)] bg-cover bg-[50%_50%] rounded-lg">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-[107px] md:h-[107px] flex items-center justify-center">
              <PlayIcon className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
            </button>
          </div>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex flex-col items-start gap-4 md:gap-6 relative w-full">
          <p className="relative mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-gray-900 text-sm md:text-base text-center tracking-[0] leading-5 md:leading-4 w-full">
            <span className="font-[number:var(--desktop-l2-16px-font-weight)] text-[#061c3d] leading-[var(--desktop-l2-16px-line-height)] font-desktop-l2-16px [font-style:var(--desktop-l2-16px-font-style)] tracking-[var(--desktop-l2-16px-letter-spacing)] text-[length:var(--desktop-l2-16px-font-size)]">
              Více Než
            </span>
            <span className="font-[number:var(--desktop-l2-16px-font-weight)] text-[#db2b19] leading-[var(--desktop-l2-16px-line-height)] font-desktop-l2-16px [font-style:var(--desktop-l2-16px-font-style)] tracking-[var(--desktop-l2-16px-letter-spacing)] text-[length:var(--desktop-l2-16px-font-size)]">
              &nbsp;&nbsp;500+{" "}
            </span>
            <span className="font-[number:var(--desktop-l2-16px-font-weight)] text-[#061c3d] leading-[var(--desktop-l2-16px-line-height)] font-desktop-l2-16px [font-style:var(--desktop-l2-16px-font-style)] tracking-[var(--desktop-l2-16px-letter-spacing)] text-[length:var(--desktop-l2-16px-font-size)]">
              Evropských Společností Nám Důvěřuje
            </span>
          </p>

          <div className="grid grid-cols-4 md:flex md:items-center md:justify-between gap-4 md:gap-0 relative w-full">
            {companyLogos.map((logo, index) => (
              <div key={index} className="relative w-16 h-10 md:w-28 md:h-14 flex items-center justify-center">
                <img
                  className="max-w-full h-full object-contain"
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};
