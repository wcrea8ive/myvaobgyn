import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Facebook, Instagram, MapPin, Menu, Phone, Twitter, X } from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CareJourney } from "@/components/CareJourney";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import backImage from "@/assets/renu-stock-back.jpg";
import stretchImage from "@/assets/renu-stock-neck.jpg";
import jointImage from "@/assets/renu-stock-joint.jpg";
import nerveImage from "@/assets/renu-stock-nerve.jpg";
import sportsImage from "@/assets/renu-stock-sports.jpg";
import surgeryImage from "@/assets/renu-stock-surgery.jpg";
import walkImage from "@/assets/renu-walk-stock.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pain Management in Orange County, CA | ReNu Pain & Wellness" },
      { name: "description", content: "Explore patient-centered pain management in Orange County, CA. ReNu Pain & Wellness starts with a thoughtful evaluation and a clearer care plan." },
      { property: "og:title", content: "ReNu Pain & Wellness | Orange County Pain Care" },
      { property: "og:description", content: "A patient-first approach to pain care in Orange County, California, with clarity before treatment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const symptomsCol1 = [
  "Neck Pain, Headaches & Migraine Treatment",
  "Back Pain Treatment",
  "Sciatica Treatment",
  "Carpal Tunnel Syndrome Treatment",
  "Fibromyalgia Treatment",
  "Allergy Treatment",
  "Knee Pain Treatment",
  "Hip Pain Treatment",
  "Shoulder Pain Treatment",
  "Spinal Stenosis Treatment",
  "Herniated Disc Treatment",
];
const symptomsCol2 = [
  "Peripheral Neuropathy",
  "Joint Pain: Hip Pain/SI Joint Paint",
  "Plantar Fasciitis Treatment",
  "TMJ Treatment",
  "Whiplash Treatment",
  "Arthritis Treatment",
  "Trigger Point Injections",
  "Work Injury Treatment",
  "Pinched Nerve Treatment",
  "Degenerative Disc Disease Treatment",
  "Scoliosis Treatment",
];
const treatmentsCol1 = [
  "Medical Services",
  "Physical Therapy",
  "Chiropractic Care",
  "Acupuncture",
  "Spinal Decompression Therapy",
];
const treatmentsCol2 = [
  "Hormone Replacement Therapy in Orange County | OC Wellness Physicians Medical Group",
  "Laser Therapy",
  "Accident & Injury Care",
  "Immunotherapy & Allergies",
  "Sports Medicine & Sports-Related Injuries",
  "Diagnostic Testing",
  "BOTOX Treatment for Headaches",
  "IV Drip Therapy",
];

const conditions = [
  { name: "Back & spine pain", detail: "When pain keeps you from moving comfortably.", image: backImage, alt: "Clinician pressing gently on a seated woman's lower back during an exam", shape: "rounded-t-[7rem] rounded-br-[7rem] rounded-bl-[1rem]" },
  { name: "Neck pain & headaches", detail: "When tension and discomfort disrupt your day.", image: stretchImage, alt: "Clinician in scrubs examining a woman's neck and shoulders", shape: "rounded-tl-[7rem] rounded-tr-[1rem] rounded-b-[7rem]" },
  { name: "Joint & arthritis pain", detail: "When everyday movement feels harder than it should.", image: jointImage, alt: "Person on a sofa clasping a painful knee with both hands", shape: "rounded-t-[7rem] rounded-br-[1rem] rounded-bl-[7rem]" },
  { name: "Nerve pain & sciatica", detail: "When pain travels, tingles, or radiates down a leg.", image: nerveImage, alt: "Man balancing while stretching his leg on an outdoor court", shape: "rounded-tl-[7rem] rounded-tr-[7rem] rounded-br-[1rem]" },
  { name: "Sports & accident injuries", detail: "When recovery from activity or injury stalls.", image: sportsImage, alt: "Clinician assessing a young man's shoulder in a bright clinic room", shape: "rounded-tl-[1rem] rounded-tr-[7rem] rounded-bl-[7rem]" },
  { name: "Pain after surgery", detail: "When healing leaves discomfort behind.", image: surgeryImage, alt: "Older man wincing as he lifts his arm", shape: "rounded-t-[7rem] rounded-b-[7rem] rounded-br-[1rem]" },
];

const heroSlides = [
  { src: "/myvaobgyn-office.png", alt: "MyVA OB/GYN office", text: "Keeping women healthy at every life stage" },
  { src: "/dr ayoub operating room 2.png", alt: "Dr. Ayoub in the operating room", text: "Dr. Jack Ayoub is board-certified obstetrician-gynecologist" },
];

function HeroSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSelectedIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-card max-h-[80vh]">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className="transition-opacity duration-1000"
          style={{ opacity: i === selectedIndex ? 1 : 0, position: i === 0 ? "relative" : "absolute", inset: 0 }}
        >
          <img src={slide.src} alt={slide.alt} width={1536} height={1024} fetchPriority={i === 0 ? "high" : "auto"} className="w-full h-auto block ken-burns" />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-6 pb-8 pt-32 lg:px-10 pointer-events-none">
        <div className="mx-auto max-w-7xl mb-[10px]">
          <h2
            className="leading-[1.2] text-white text-[53px] whitespace-nowrap font-light italic text-center w-full"
            style={{ fontFamily: "Baskerville, 'Baskerville Old Face', 'Book Antiqua', Palatino, serif" }}
          >{heroSlides[selectedIndex].text}</h2>
          {selectedIndex === 0 && (
            <div className="mt-5 pointer-events-auto">
              <a href="#schedule" className="inline-flex h-11 items-center rounded-full bg-[#B51307] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90">Request An Appointment</a>
            </div>
          )}
          {selectedIndex === 1 && (
            <p className="mt-3 text-center text-[22px] text-white/90 whitespace-nowrap" style={{ fontFamily: "var(--font-sans)" }}>specializing in women's health, pregnancy care and minimally invasive treatments.</p>
          )}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`h-2 rounded-full transition-all ${selectedIndex === i ? "w-6 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="bg-[#3A7DC9]">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-end gap-6 px-6 lg:px-10">
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 text-[11px] text-white/90 transition-colors hover:text-white">
              <svg className="size-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              Patient Portal
            </a>
            <a href="#" className="flex items-center gap-1.5 text-[11px] text-white/90 transition-colors hover:text-white">
              <svg className="size-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
              Mobile App
            </a>
            <a href="#" className="flex items-center gap-1.5 text-[11px] text-white/90 transition-colors hover:text-white">
              <svg className="size-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
              Pay My Bill
            </a>
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="text-[10px] italic text-white/70">Proudly Part Of</span>
            <img src="/privia-logo.png" alt="Privia Health" className="h-4 w-auto" />
          </div>
        </div>
      </div>
      <div className="bg-[#B51307]">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs text-white/90">
            <MapPin className="size-3.5 shrink-0" />
            <span>1234 E 17th St, Santa Ana, CA 92701</span>
            <span className="text-white/40">|</span>
            <span>Same Day Appointments Available!</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+17145550123" className="flex items-center gap-1.5 text-xs text-white/90 transition-colors hover:text-white">
              <Phone className="size-3.5 shrink-0" />
              <span>(714) 555-0123</span>
            </a>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="text-white/80 transition-colors hover:text-white"><Facebook className="size-3.5" /></a>
              <a href="#" aria-label="Instagram" className="text-white/80 transition-colors hover:text-white"><Instagram className="size-3.5" /></a>
              <a href="#" aria-label="Twitter" className="text-white/80 transition-colors hover:text-white"><Twitter className="size-3.5" /></a>
            </div>
          </div>
        </div>
      </div>
      <header className="relative z-30 border-b border-border bg-card">
        <div className="mx-auto grid h-28 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 lg:flex lg:justify-between lg:px-10">
          <a href="#top" onClick={closeMenu} className="flex min-w-0 items-center gap-3" aria-label="ReNu Pain & Wellness home">
            <img src="/myvaobgyn-logo-red.png" alt="MyVA OB/GYN" width={154} height={74} className="h-[74px] w-[154px] shrink-0" />
          </a>
          <NavigationMenu className="hidden lg:flex" aria-label="Main navigation">
            <NavigationMenuList className="flex-nowrap gap-0">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className="inline-flex h-9 items-center whitespace-nowrap px-3 text-xs font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">About VA OBGYN</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className="inline-flex h-9 items-center whitespace-nowrap px-3 text-xs font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">Gynecological Services</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className="inline-flex h-9 items-center whitespace-nowrap px-3 text-xs font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">Obstetrical Care</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className="inline-flex h-9 items-center whitespace-nowrap px-3 text-xs font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">Surgical Services</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className="inline-flex h-9 items-center whitespace-nowrap px-3 text-xs font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">New Patients</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className="inline-flex h-9 items-center whitespace-nowrap px-3 text-xs font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">Policy Update</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden lg:block"><Button asChild variant="sage" size="lg" className="h-11 rounded-full px-6 text-xs uppercase"><a href="#schedule">Schedule an evaluation <ArrowUpRight /></a></Button></div>
          <Button variant="subtle" size="icon" className="shrink-0 rounded-full lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col border-t border-border bg-background px-6 py-5 text-sm lg:hidden" aria-label="Mobile navigation">
            <a onClick={closeMenu} className="py-3 font-medium" href="#">About Us</a>
            <a onClick={closeMenu} className="py-3 font-medium" href="#">Gynecological Services</a>
            <a onClick={closeMenu} className="py-3 font-medium" href="#">Obstetrical Care</a>
            <a onClick={closeMenu} className="py-3 font-medium" href="#">Surgical Services</a>
            <a onClick={closeMenu} className="py-3 font-medium" href="#">New Patients</a>
            <a onClick={closeMenu} className="py-3 font-medium" href="#">Policy Update</a>
            <a onClick={closeMenu} className="py-3 font-medium text-primary" href="#schedule">Schedule an evaluation <ArrowUpRight className="inline size-4" /></a>
          </nav>
        )}
      </header>

      <main id="top">
        <HeroSlider />

        <section className="border-b border-border px-6 py-[70px] lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-start md:gap-16">
            <div className="w-full max-w-[500px] shrink-0">
              <h2 className="font-display text-4xl font-medium md:text-5xl">Welcome to<br />Virginia Obstetrics<br />&amp; Gynecology,<br /><span className="text-2xl md:text-3xl font-normal mt-[20px] mb-[10px] block">Loudoun County's premier<br />OBGYN practice.</span></h2>
              <div className="mt-5 flex items-center gap-4">
                <img src="/Polished Top Doctor Gold Seal.png" alt="Polished Top Doctor Gold Seal" className="h-[164px] w-auto" />
                <img src="/Silver Top Doctor Medical Medallion.png" alt="Silver Top Doctor Medical Medallion" className="h-[164px] w-auto" />
              </div>
            </div>
            <div className="space-y-4 md:ml-[10px]">
              <p className="text-base leading-7 text-muted-foreground">We are a Loudoun OBGYN practice specializing in the latest in women's healthcare. Our OBGYN incorporates the most recent advances in women's health, while ensuring your care is individually optimized and tailored to your needs.</p>
              <p className="text-base leading-7 text-muted-foreground">Our gynecology services focus on preventative healthcare throughout a woman's lifetime – from puberty to pregnancy to menopause.</p>
              <p className="text-base leading-7 text-muted-foreground">Dr. Ayoub, nominated the 1st chairman of the OB/GYN department, does surgery and delivers at StoneSprings Hospital. Dr. Ayoub has managed around 5,000 pregnancies in his career, making him extremely knowledgeable about prenatal, delivery and pregnancy care. Dr. Ayoub especially enjoys taking care of high-risk pregnancies. Although his practice has one of the lowest c/s rates last year, 17% according to Privia, cesarean sections and surgeries remain his most sought out expertise.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#F7F7DE] px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[500px_1fr] md:gap-16 lg:gap-24">
            <div className="relative"><img src="/proc-mommy.jpg 1.png" alt="Pregnant mother" width={1400} height={933} loading="lazy" className="aspect-[5/4] w-full rounded-lg object-cover object-top" /><p className="mt-4 text-xs text-muted-foreground">Listening. Understanding. Moving forward together.</p></div>
            <div><p className="mb-5 text-xs font-semibold uppercase text-kicker">Women's health services Leesburg VA</p><h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">Comprehensive care for your growing family!</h2><p className="mt-6 text-base leading-8 text-muted-foreground">We are excited for the opportunity to care for you during your pregnancy. As always, we at Virginia Obstetrics &amp; Gynecology believe that women should always receive the highest quality gynecological and obstetrical care. In our office, we provide comprehensive care for your growing family! We offer In-house ultrasounds, 3D/4D ultrasound packages, Fetal monitoring, Genetic testing, and Cord blood banking. Read more about our OB services.</p></div>
          </div>
        </section>

        <section id="conditions" className="scroll-mt-20 bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 max-w-2xl"><p className="mb-5 text-xs font-semibold uppercase text-kicker">Who we help</p><h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl whitespace-nowrap">Whatever pain looks like for you.</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Pain can show up in different ways. Start with what you're experiencing — we'll help you understand the next step.</p></div>
            <div className="grid gap-x-12 md:grid-cols-2">
              {conditions.map((item) => <a key={item.name} href="#evaluation" className="group grid min-w-0 grid-cols-[88px_minmax(0,1fr)_20px] items-center gap-4 border-t border-border py-6 sm:grid-cols-[112px_minmax(0,1fr)_20px] sm:gap-5">
                <img src={item.image} alt={item.alt} width={912} height={1104} loading="lazy" className="aspect-square w-full rounded-md object-cover transition-opacity group-hover:opacity-85" />
                <div><h3 className="font-display text-lg leading-snug sm:text-xl">{item.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p></div>
                <ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
              </a>)}
            </div>
          </div>
        </section>

        <CareJourney />

        <section id="evaluation" className="scroll-mt-20 border-y border-border bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="mb-5 text-xs font-semibold uppercase text-kicker">Your first visit</p><h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">The Pain Clarity Evaluation.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">A first visit with one clear purpose: understanding the likely source of your pain and helping you make an informed decision.</p></div><Button asChild variant="hero" size="lg" className="h-12 w-fit shrink-0 rounded-full px-6"><a href="#schedule">Plan your first visit <ArrowUpRight /></a></Button></div>
            <p className="mb-5 text-xs font-semibold uppercase text-kicker">What you can expect to leave with</p>
            <div>{[
              ["01", "A clearer understanding", "An explanation of the likely source of your pain."],
              ["02", "Options that make sense", "Appropriate next steps explained in plain language, without pressure."],
              ["03", "A recommended direction", "A care roadmap, in writing when appropriate."],
            ].map(([number, title, description]) => <div key={number} className="grid gap-3 border-t border-border py-7 sm:grid-cols-[48px_1fr] sm:gap-6 md:grid-cols-[48px_1fr_1fr] md:items-center"><span className="font-display text-lg text-primary">{number}</span><h3 className="font-display text-xl md:text-2xl">{title}</h3><p className="text-sm leading-7 text-muted-foreground sm:col-start-2 md:col-start-auto">{description}</p></div>)}</div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16 lg:gap-24 lg:px-10">
            <img src={walkImage} alt="A cheerful older couple walking together on a sunny Orange County street" width={1400} height={933} loading="lazy" className="aspect-[5/4] w-full rounded-lg object-cover object-[center_30%]" />
            <div><p className="mb-5 text-xs font-semibold uppercase text-kicker">Rooted in everyday life · Orange County, CA</p><h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">Your life here.<br />Your next chapter.</h2><p className="mt-6 text-base leading-8 text-muted-foreground">A walk by the coast. Time with family. A more comfortable workday. What matters to you shapes the conversation about your care.</p><p className="mt-4 text-base leading-8 text-muted-foreground">ReNu Pain & Wellness brings a patient-centered perspective to pain management in Orange County, California — with clarity and guidance before treatment decisions.</p><a href="#schedule" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-primary">Take the next step <ArrowRight className="size-4" /></a></div>
          </div>
        </section>

        <section id="schedule" className="scroll-mt-20 border-t border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="mb-5 text-xs font-semibold uppercase text-kicker">Your next step</p><h2 className="max-w-3xl font-display text-3xl leading-tight md:text-4xl lg:text-5xl">Let's begin with understanding.</h2><div className="mt-8 flex flex-col justify-between gap-8 border-t border-border pt-7 md:flex-row"><p className="max-w-xl text-base leading-7 text-muted-foreground">Appointment booking and insurance details will be available here when confirmed by ReNu.</p><div className="max-w-sm"><span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-kicker"><span className="size-2 rounded-full bg-primary" />Coming soon</span><p className="text-sm leading-6 text-muted-foreground">Online scheduling for the Pain Clarity Evaluation.</p></div></div></div>
        </section>
      </main>
      <footer className="border-t border-border bg-card"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 sm:flex-row sm:items-end lg:px-10"><div><a href="#top" className="inline-block"><img src="/myvaobgyn-logo-red.png" alt="MyVA OB/GYN" width={133} height={64} className="h-16 w-[133px]" /></a></div><p className="text-xs text-muted-foreground">Orange County, CA · Understand your pain. Find the right way forward.</p></div></footer>
    </div>
  );
}
