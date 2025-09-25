import React from "react";
import { ArrowRightIcon, CheckCircleIcon, PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Telefon",
    value: "+420 777 415 000",
    description: "Pondělí - Pátek, 8:00 - 18:00"
  },
  {
    icon: MailIcon,
    title: "E-mail",
    value: "poptavky@mailstep.cz",
    description: "Odpovídáme do 24 hodin"
  },
  {
    icon: MapPinIcon,
    title: "Adresa",
    value: "Mailstep s.r.o.",
    description: "Průmyslová 123, 150 00 Praha 5"
  }
];

const features = [
  "Zodpovíme všechny vaše dotazy",
  "Nezávazná konzultace zdarma",
  "Individuální cenová nabídka",
  "Rychlá implementace do 14 dnů"
];

const offices = [
  {
    city: "Praha",
    address: "Průmyslová 123, 150 00 Praha 5",
    phone: "+420 777 415 000",
    email: "praha@mailstep.cz",
    isMain: true
  },
  {
    city: "Brno",
    address: "Logistická 456, 602 00 Brno",
    phone: "+420 777 415 001",
    email: "brno@mailstep.cz",
    isMain: false
  },
  {
    city: "Bratislava",
    address: "Skladová 789, 821 04 Bratislava",
    phone: "+421 777 415 002",
    email: "bratislava@mailstep.sk",
    isMain: false
  }
];

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex justify-center min-h-screen">
      <div className="flex w-full max-w-[1700px] relative flex-col items-center gap-16 md:gap-[110px] py-20">
        
        {/* Header Section */}
        <section className="flex flex-col items-center gap-8 w-full max-w-[865px] px-4">
          <Badge className="h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 bg-[#f9e6e5] hover:bg-[#f9e6e5] rounded-[30px] text-[#e20714] font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)]">
            Kontakt
          </Badge>
          
          <h1 className="text-2xl md:text-[length:var(--desktop-h1-56px-font-size)] font-desktop-h1-56px font-[number:var(--desktop-h1-56px-font-weight)] tracking-[var(--desktop-h1-56px-letter-spacing)] leading-tight md:leading-[var(--desktop-h1-56px-line-height)] [font-style:var(--desktop-h1-56px-font-style)] text-center">
            <span className="text-[#111d27]">Už žádné starosti </span>
            <span className="text-[#e20714]">s logistikou</span>
          </h1>
          
          <p className="text-base md:text-[length:var(--desktop-p1-22px-font-size)] font-desktop-p1-22px font-[number:var(--desktop-p1-22px-font-weight)] text-[#476788] tracking-[var(--desktop-p1-22px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p1-22px-line-height)] [font-style:var(--desktop-p1-22px-font-style)] text-center">
            Kontaktujte nás a získejte nezávaznou nabídku na míru vašemu e-shopu.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1094px] px-4">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-[#f8f8f8] border-none rounded-[18px] p-6 text-center">
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <div className="w-16 h-16 bg-[#e20714] rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                    {info.title}
                  </h3>
                  
                  <div className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#e20714] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                    {info.value}
                  </div>
                  
                  <div className="font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#476788] text-[length:var(--desktop-p3-14px-font-size)] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
                    {info.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Main Contact Form Section */}
        <section className="flex flex-col lg:flex-row items-start gap-16 w-full max-w-[1320px] px-4 py-16 bg-[#f7f7f7] rounded-[26px]">
          
          {/* Left Side - Benefits */}
          <div className="flex flex-col w-full lg:w-[527px] gap-10">
            <div className="space-y-6">
              <h2 className="text-xl md:text-[length:var(--desktop-h2-44px-font-size)] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-tight md:leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
                Proč nás kontaktovat?
              </h2>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="font-desktop-h3-36px font-[number:var(--desktop-h3-36px-font-weight)] text-[#e20714] text-[length:var(--desktop-h3-36px-font-size)] tracking-[var(--desktop-h3-36px-letter-spacing)] leading-[var(--desktop-h3-36px-line-height)] [font-style:var(--desktop-h3-36px-font-style)]">
                +420 777 415 000
              </div>
              <div className="font-desktop-h3-36px font-[number:var(--desktop-h3-36px-font-weight)] text-[#e20714] text-[length:var(--desktop-h3-36px-font-size)] tracking-[var(--desktop-h3-36px-letter-spacing)] leading-[var(--desktop-h3-36px-line-height)] [font-style:var(--desktop-h3-36px-font-style)]">
                poptavky@mailstep.cz
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col w-full lg:w-[640px] gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)]">
                  Název společnosti
                </Label>
                <Input className="h-12 bg-white rounded-lg border border-[#476788]" />
              </div>
              
              <div className="space-y-2">
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)]">
                  Doména e-shopu
                </Label>
                <Input className="h-12 bg-white rounded-lg border border-[#476788]" />
              </div>
              
              <div className="space-y-2">
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)]">
                  Jméno a příjmení
                </Label>
                <Input className="h-12 bg-white rounded-lg border border-[#476788]" />
              </div>
              
              <div className="space-y-2">
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)]">
                  E-mail
                </Label>
                <Input type="email" className="h-12 bg-white rounded-lg border border-[#476788]" />
              </div>
              
              <div className="space-y-2">
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)]">
                  Tel. číslo
                </Label>
                <Input type="tel" className="h-12 bg-white rounded-lg border border-[#476788]" />
              </div>
              
              <div className="space-y-2">
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)]">
                  Počet objednávek za měsíc
                </Label>
                <Select>
                  <SelectTrigger className="h-12 bg-white rounded-lg border border-[#476788]">
                    <SelectValue placeholder="Vyberte počet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-50">1-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)]">
                Řeknete nám více o své firmě <span className="text-[#476788] font-normal">(Nepovinné)</span>
              </Label>
              <Textarea className="min-h-32 bg-white rounded-lg border border-[#476788] resize-none" placeholder="Popište nám váš e-shop, produkty a očekávání..." />
            </div>
            
            <div className="flex items-start gap-3">
              <Checkbox className="w-5 h-5 mt-1" />
              <p className="text-sm font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#111d27] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-relaxed">
                Odesláním formuláře souhlasíte se zpracováním osobních údajů podle našich <a href="#" className="text-[#e20714] underline">zásad ochrany osobních údajů</a>.
              </p>
            </div>
            
            <Button className="h-12 md:h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-8 transition-colors w-fit">
              <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-sm md:text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Odeslat poptávku
              </span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Offices Section */}
        <section className="w-full max-w-[1320px] px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-[length:var(--desktop-h2-44px-font-size)] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-tight md:leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] mb-4">
              <span className="text-[#111d27]">Naše </span>
              <span className="text-[#e20714]">pobočky</span>
            </h2>
            <p className="text-base md:text-[length:var(--desktop-p2-18px-font-size)] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-relaxed md:leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
              Navštivte nás v jedné z našich poboček nebo si domluvte online schůzku.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`${office.isMain ? 'bg-[#111d27] text-white' : 'bg-[#f8f8f8]'} border-none rounded-[18px] p-6`}>
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)] ${office.isMain ? 'text-white' : 'text-[#111d27]'}`}>
                      {office.city}
                    </h3>
                    {office.isMain && (
                      <Badge className="bg-[#e20714] text-white text-xs px-2 py-1 rounded-full">
                        Hlavní
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${office.isMain ? 'text-white' : 'text-[#476788]'}`} />
                      <span className={`text-sm ${office.isMain ? 'text-white' : 'text-[#476788]'}`}>
                        {office.address}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <PhoneIcon className={`w-5 h-5 flex-shrink-0 ${office.isMain ? 'text-white' : 'text-[#476788]'}`} />
                      <span className={`text-sm ${office.isMain ? 'text-white' : 'text-[#476788]'}`}>
                        {office.phone}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MailIcon className={`w-5 h-5 flex-shrink-0 ${office.isMain ? 'text-white' : 'text-[#476788]'}`} />
                      <span className={`text-sm ${office.isMain ? 'text-white' : 'text-[#476788]'}`}>
                        {office.email}
                      </span>
                    </div>
                  </div>
                  
                  <Button className={`w-full mt-4 ${office.isMain ? 'bg-[#e20714] hover:bg-[#c20612] text-white' : 'bg-[#111d27] hover:bg-[#0f1a23] text-white'} rounded-[100px] transition-colors`}>
                    Kontaktovat pobočku
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
