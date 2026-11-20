import { useEffect, useRef, useState } from "react";
import {
  Ear,
  Scan,
  MessageSquare,
  HeartHandshake,
  BarChart2,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import walkImage from "@/assets/renu-walk-stock.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Step {
  number: string;
  title: string;
  detail: string;
  description: string;
  Icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Listen",
    detail: "Your health story comes first.",
    description:
      "We begin by hearing your full history — your concerns, symptoms, and goals. Every visit starts with listening, not assumptions.",
    Icon: Ear,
  },
  {
    number: "02",
    title: "Examine",
    detail: "A thorough, compassionate exam.",
    description:
      "A comprehensive examination tailored to your needs — from routine wellness checks to specialized gynecological or obstetrical assessments.",
    Icon: Scan,
  },
  {
    number: "03",
    title: "Discuss",
    detail: "Clear answers in plain language.",
    description:
      "We walk through our findings clearly, explain your options honestly, and answer every question before recommending next steps.",
    Icon: MessageSquare,
  },
  {
    number: "04",
    title: "Plan",
    detail: "A care plan built around you.",
    description:
      "Your goals, lifestyle, and preferences shape your personalized care plan — whether that's pregnancy care, gynecological treatment, or preventive wellness.",
    Icon: HeartHandshake,
  },
  {
    number: "05",
    title: "Treat",
    detail: "Expert, compassionate treatment.",
    description:
      "From routine care to minimally invasive surgery, we deliver the highest quality treatment with the same physician who knows your history.",
    Icon: BarChart2,
  },
  {
    number: "06",
    title: "Follow Up",
    detail: "Continued care at every life stage.",
    description:
      "Women's health evolves. We stay with you through every chapter — adjusting your care as your needs change and your life grows.",
    Icon: RefreshCw,
  },
];

export function CareJourney() {
  const [active, setActive] = useState(0);
  const [panelKey, setPanelKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const el = sectionRef.current;
        if (!el) return;
        const { top, height } = el.getBoundingClientRect();
        const isMd = window.innerWidth >= 768;
        // Progress is derived from the section's midpoint position in the viewport:
        // 0 when the midpoint enters at the bottom edge, 1 when it exits the top edge.
        const midpoint = top + height / 2;
        const progress = isMd
          ? 1 - midpoint / window.innerHeight
          : (window.innerHeight * 0.65 - top) / (height * 0.8);
        const idx = Math.min(Math.floor(Math.max(0, Math.min(1, progress)) * 6), 5);
        setActive((prev) => {
          if (prev !== idx) setPanelKey((k) => k + 1);
          return idx;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleClick = (idx: number) => {
    setActive(idx);
    setPanelKey((k) => k + 1);
  };

  // active is always 0–5, STEPS has 6 entries
  const step = STEPS[active] as Step;

  return (
    <section
      id="process"
      ref={sectionRef}
      className="care-journey-section scroll-mt-20"
    >
      <div className="care-journey-sticky pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Section heading */}
          <div className="mb-12">
            <p className="mb-5 text-xs font-semibold uppercase text-kicker">Virginia OB/GYN care pathway</p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl text-[#B51307]">
              Your health, every step<br />of the way.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              From your first visit to ongoing care, we are with you at every stage of your women's health journey — with the same trusted team by your side.
            </p>
          </div>

          {/* Circles */}
          <ol
            className="relative mb-10 grid grid-cols-3 gap-y-8 md:flex md:items-start md:gap-y-0"
            aria-label="Care pathway steps"
          >
            {STEPS.map((s, i) => {
              const isActive = active === i;
              const isReached = active > i;
              const nudge = i % 2 === 1;
              const hideConnectorMobile = i === 3;

              // Curved SVG connector path.
              // viewBox "0 0 100 100", preserveAspectRatio="none":
              //   x=0 → prev circle center, x=100 → curr circle center (via left:-50%, width:100%)
              //   y is in px (100px SVG height; circle center y=60; nudge=20px)
              // Circles use a solid opaque background so they mask the connector behind them.
              const prevNudge = i > 0 && (i - 1) % 2 === 1;
              const cY1 = 60 + (prevNudge ? 20 : 0) - (nudge ? 20 : 0);
              const cCtrl = cY1 <= 60 ? cY1 - 22 : cY1 + 22;
              const connPath = `M 0,${cY1} Q 50,${cCtrl} 100,60`;

              return (
                <li
                  key={s.number}
                  className={`relative flex flex-col items-center md:flex-1 ${nudge ? "md:mt-5" : ""}`}
                >
                  {/* Curved SVG connector — rendered before button so z-0 sits under z-10/z-20 circles */}
                  {i > 0 && (
                    <svg
                      aria-hidden
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className={[
                        "absolute top-0 z-0 pointer-events-none overflow-visible",
                        hideConnectorMobile ? "hidden md:block" : "block",
                      ].join(" ")}
                      style={{ left: "-50%", width: "100%", height: "100px" }}
                    >
                      <path
                        d={connPath}
                        fill="none"
                        strokeWidth={1.5}
                        vectorEffect="non-scaling-stroke"
                        style={{
                          stroke: isReached || isActive
                            ? "color-mix(in srgb, #B51307 50%, transparent)"
                            : "var(--color-border)",
                          transition: "stroke 600ms ease-in-out",
                        }}
                      />
                    </svg>
                  )}

                  {/* Circle button — z-10 normally, z-20 when active, always above z-0 connectors */}
                  <HoverCard openDelay={120} closeDelay={80}>
                    <HoverCardTrigger asChild>
                      <button
                        onClick={() => handleClick(i)}
                        aria-pressed={isActive}
                        aria-controls="care-panel"
                        aria-label={`${s.number}. ${s.title}`}
                        className={[
                          `care-circle relative ${isActive ? "z-20" : "z-10"} flex h-[120px] w-[120px] items-center justify-center rounded-full border-2`,
                          "transition-all duration-500 ease-in-out lg:h-[140px] lg:w-[140px]",
                          isActive
                            ? "scale-[1.06] border-[#B51307] bg-[#B51307] text-white shadow-lg shadow-[#B51307]/25"
                            : isReached
                              ? "border-[#B51307]/40 bg-[#B51307]/20 text-[#B51307] hover:-translate-y-1"
                              : "border-border bg-background text-muted-foreground hover:-translate-y-1 hover:border-[#B51307]/30 hover:bg-muted",
                        ].join(" ")}
                      >
                        <s.Icon className="size-8 lg:size-9" strokeWidth={1.5} />

                        {/* Active ring: static border + pulsing ripple */}
                        {isActive && (
                          <>
                            <span
                              aria-hidden
                              className="care-ring-arrive pointer-events-none absolute inset-0 rounded-full border-2 border-[#B51307]/25"
                              style={{ margin: "-10px" }}
                            />
                            <span
                              aria-hidden
                              className="care-ring-pulse pointer-events-none absolute inset-0 rounded-full border-2 border-[#B51307]/40"
                              style={{ margin: "-10px" }}
                            />
                          </>
                        )}
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent side="top" sideOffset={10} className="w-56">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-kicker">
                        {s.number} · {s.title}
                      </p>
                      <p className="text-sm font-medium leading-5">{s.detail}</p>
                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{s.description}</p>
                    </HoverCardContent>
                  </HoverCard>

                  {/* Label */}
                  <span
                    className={[
                      "mt-[22px] text-xs font-semibold uppercase tracking-wide transition-colors duration-300",
                      isActive ? "text-[#B51307]" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {s.title}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Divider */}
          <hr className="mb-8 border-border" />

          {/* Detail panel */}
          <div
            id="care-panel"
            key={panelKey}
            className="care-panel-enter grid gap-8 md:grid-cols-[1fr_auto] md:gap-16"
            style={{ minHeight: "220px" }}
          >
            <div>
<h3 className="font-display text-2xl leading-snug md:text-3xl">{step.detail}</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
                {step.description}
              </p>
              <a
                href="#evaluation"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B51307] transition-opacity hover:opacity-75"
              >
                Request an appointment <ArrowUpRight className="size-4" />
              </a>
            </div>
            <img
              src={walkImage}
              alt="A couple walking outdoors after successful pain treatment"
              className="hidden aspect-[4/3] w-[280px] shrink-0 rounded-lg object-cover object-[center_30%] md:block lg:w-[340px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
