import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFormSubsection = (): JSX.Element => {
  const contactFeatures = [
    {
      text: "Zodpovíme všechny vaše dotazy",
      className:
        "font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)]",
    },
    {
      text: "+420 777 415",
      className:
        "font-desktop-h3-36px font-[number:var(--desktop-h3-36px-font-weight)] text-[#e20714] text-[length:var(--desktop-h3-36px-font-size)] tracking-[var(--desktop-h3-36px-letter-spacing)] leading-[var(--desktop-h3-36px-line-height)]",
    },
    {
      text: "poptavky@mailstep.cz",
      className:
        "font-desktop-h3-36px font-[number:var(--desktop-h3-36px-font-weight)] text-[#e20714] text-[length:var(--desktop-h3-36px-font-size)] tracking-[var(--desktop-h3-36px-letter-spacing)] leading-[var(--desktop-h3-36px-line-height)]",
    },
  ];

  const formFields = [
    {
      id: "company",
      label: "Název společnosti",
      type: "input",
      width: "w-[300px]",
      height: "h-20",
    },
    {
      id: "domain",
      label: "Doména e-shopu",
      type: "input",
      width: "w-[300px]",
      height: "h-20",
    },
    {
      id: "name",
      label: "Jméno a příjmení",
      type: "input",
      width: "w-[300px]",
      height: "h-20",
      defaultValue: "Antonín Macháček",
      hasError: true,
    },
    {
      id: "email",
      label: "E-mail",
      type: "input",
      width: "w-[300px]",
      height: "h-20",
    },
    {
      id: "phone",
      label: "Tel. číslo",
      type: "input",
      width: "flex-1",
      height: "h-20",
    },
    {
      id: "orders",
      label: "Počet objednávek za mesíc",
      type: "select",
      width: "flex-1",
      height: "h-12",
    },
  ];

  return (
    <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex items-start gap-[153px] px-[152px] py-[110px] relative bg-[#f7f7f7] rounded-[26px] overflow-hidden">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex flex-col w-[527px] items-start gap-10 relative">
        <h2 className="relative w-[478px] mt-[-1.00px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          Už žádné starosti
          <br />s logistikou
        </h2>

        <div className="flex flex-col items-start gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
          {contactFeatures.map((feature, index) => (
            <div
              key={index}
              className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]"
            >
              <CheckCircleIcon className="relative w-6 h-6 text-green-500" />
              <div
                className={`relative w-fit mt-[-1.00px] whitespace-nowrap [font-style:var(--desktop-p2-18px-font-style)] ${feature.className}`}
              >
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex flex-col w-[640px] items-start gap-10 relative">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[300px] h-20 items-start gap-1 relative">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Název společnosti
              </Label>
              <Input className="flex-1 grow h-auto bg-white rounded-lg border border-solid border-[#476788]" />
            </div>

            <div className="flex flex-col w-[300px] h-20 items-start gap-1 relative">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Doména e-shopu
              </Label>
              <Input className="flex-1 grow h-auto bg-white rounded-lg border border-solid border-[#476788]" />
            </div>
          </div>

          <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="w-[300px] flex flex-col items-start gap-1 relative">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Jméno a příjmení
              </Label>
              <div className="relative w-full">
                <Input
                  defaultValue="Antonín Macháček"
                  className="h-12 bg-white rounded-lg border border-solid border-[#476788] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]"
                />
                <div className="absolute w-[calc(100%_+_8px)] h-[calc(100%_+_8px)] -top-1 -left-1 rounded-xl border-2 border-solid border-[#db2b19] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col w-[300px] h-20 items-start gap-1 relative">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                E-mail
              </Label>
              <Input className="flex-1 grow h-auto bg-white rounded-lg border border-solid border-[#476788]" />
            </div>
          </div>

          <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="h-20 flex-1 grow flex flex-col items-start gap-1 relative">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Tel. číslo
              </Label>
              <Input className="flex-1 grow h-auto bg-white rounded-lg border border-solid border-[#476788]" />
            </div>

            <div className="flex-1 grow flex flex-col items-start gap-1 relative">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Počet objednávek za mesíc
              </Label>
              <Select>
                <SelectTrigger className="h-12 bg-white rounded-lg border border-solid border-[#476788]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-100">51-100</SelectItem>
                  <SelectItem value="100+">100+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-[640px] h-36 flex flex-col items-start gap-1 relative">
            <div className="flex items-baseline gap-1">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Řeknete nám více o své firmě
              </Label>
              <span className="font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[#476788] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)]">
                (Nepovinné)
              </span>
            </div>
            <Textarea className="flex-1 grow bg-white rounded-lg border border-solid border-[#476788] resize-none" />
          </div>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] flex w-[449px] items-center gap-3 relative flex-[0_0_auto]">
          <Checkbox className="w-6 h-6" />
          <p className="relative flex-1 mt-[-1.00px] font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-black text-[length:var(--desktop-p3-14px-font-size)] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
            Odoslaním formuláře souhlasíte se zpracováním osobních údajú
          </p>
        </div>

        <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 transition-colors">
          <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
            Odeslat
          </span>
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <img
        className="absolute top-[232px] left-0 w-[951px] h-[588px]"
        alt="Group"
        src="https://c.animaapp.com/mfwadh63sf4A0a/img/group-39933.png"
      />
    </section>
  );
};
