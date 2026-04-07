 "use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <main className="bg-black text-white">
      <section>
        <div className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('/Hero Section_ The Monolith Protocol.png')",
              backgroundColor: "#0a0a0a",
            }}
          />
          <div className="ambient-glow absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="animate-fade-up fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/15 bg-white/6 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md md:px-10 md:py-5 md:text-xs">
              <div className="flex items-center gap-4">
                <span className="text-xl font-black tracking-[0.1em]">FOCUSX</span>
                <span className="hidden text-white/45 md:inline">|</span>
                <span className="hidden text-white/50 md:inline">
                  A Product of Ansh
                </span>
              </div>

              <nav className="hidden items-center gap-10 text-white/85 md:flex">
                <a href="#" className="interactive border-b border-white pb-1 text-white">
                  Platform
                </a>
                <a href="#system-architecture" className="interactive hover:text-white">
                  Methodology
                </a>
                <a href="#the-origin" className="interactive hover:text-white">
                  Origin
                </a>
              </nav>

              <button
                onClick={() => setIsModalOpen(true)}
                className="interactive cursor-pointer bg-white px-5 py-3 text-[11px] font-extrabold tracking-[0.14em] text-black uppercase hover:bg-white/90 md:px-8 md:py-4"
              >
                Get Started
              </button>
            </header>

            <section className="flex flex-1 flex-col items-center justify-center px-5 pt-24 text-center md:px-10 md:pt-28">
              <p className="animate-fade-up delay-100 mb-2 text-[12px] font-semibold uppercase tracking-[0.5em] text-white/55 md:text-[14px]">
                Ansh Presents
              </p>
              <p className="animate-fade-up delay-200 mb-10 text-[14px] font-semibold uppercase tracking-[0.42em] text-white/80 md:text-[18px]">
                Initiating Sequence
              </p>

              <h1 className="animate-fade-up delay-300 max-w-[1180px] text-[52px] leading-[0.94] font-black uppercase tracking-tight md:text-[132px]">
                The Monolith
                <br />
                Protocol
              </h1>

              <p className="animate-fade-up delay-400 mt-8 text-[18px] font-semibold uppercase tracking-[0.08em] text-white/75 md:text-[46px] md:leading-none">
                Elite Discipline like the 0.1%.
              </p>

              <div className="animate-fade-up delay-400 mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="interactive min-w-[150px] cursor-pointer bg-white px-8 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-black hover:bg-white/90 md:min-w-[220px] md:py-4">
                  Enlist Now
                </button>
                <button className="interactive min-w-[150px] cursor-pointer bg-[#2f2f2f]/90 px-8 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white hover:bg-[#3a3a3a]/95 md:min-w-[220px] md:py-4">
                  Identify
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/15 bg-[#0b0b0b]">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[2px] w-full max-w-[1024px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="grid w-full grid-cols-1 gap-10 px-8 py-14 text-center sm:grid-cols-3 md:px-24 md:py-16">
          <div className="animate-fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Active Nodes
            </p>
            <p className="mt-2 text-[54px] leading-none font-black tracking-tight">
              12,842
            </p>
          </div>
          <div className="animate-fade-up delay-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              System Uptime
            </p>
            <p className="mt-2 text-[54px] leading-none font-black tracking-tight">
              99.99%
            </p>
          </div>
          <div className="animate-fade-up delay-200">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Average Focus
            </p>
            <p className="mt-2 text-[54px] leading-none font-black tracking-tight">
              04:12:00
            </p>
          </div>
        </div>
      </section>

      <section id="system-architecture" className="bg-[#060708] px-6 py-14 md:px-12 md:py-20">
        <div className="w-full">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            System Architecture
          </h2>
          <div className="mt-4 h-[6px] w-20 bg-white" />

          <div className="mt-12 grid grid-cols-1 overflow-hidden border border-white/10 md:grid-cols-3">
            <article className="interactive animate-fade-up bg-[#0c0d0e] p-10 md:min-h-[330px]">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-white/95"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
              </svg>
              <h3 className="mt-24 text-[34px] leading-none font-black uppercase tracking-tight">
                Hard Lock Mode
              </h3>
              <p className="mt-5 max-w-[340px] text-[19px] leading-[1.55] font-semibold uppercase tracking-[0.02em] text-white/65">
                Complete neural isolation. All secondary processes terminated
                until objective completion. No override permitted.
              </p>
            </article>

            <article className="interactive animate-fade-up delay-100 bg-[#111315] p-10 md:min-h-[330px]">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-white/95"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="2.5" />
                <path d="M7 15v-2" />
                <path d="M11 15V9" />
                <path d="M15 15v-4" />
                <path d="M19 15v-7" />
                <path d="M6.5 18.5h11" />
              </svg>
              <h3 className="mt-24 text-[34px] leading-none font-black uppercase tracking-tight">
                Deep Analytics
              </h3>
              <p className="mt-5 max-w-[360px] text-[19px] leading-[1.55] font-semibold uppercase tracking-[0.02em] text-white/65">
                High-fidelity behavioral tracking. Identify cognitive leaks and
                optimize daily output with mathematical precision.
              </p>
            </article>

            <article className="interactive animate-fade-up delay-200 bg-[#0c0d0e] p-10 md:min-h-[330px]">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-white/95"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" />
                <path d="M6 5H4a4 4 0 0 0 4 5" />
                <path d="M18 5h2a4 4 0 0 1-4 5" />
                <path d="M12 11v4" />
                <path d="M9 20h6" />
                <path d="M8 16h8" />
              </svg>
              <h3 className="mt-24 text-[34px] leading-none font-black uppercase tracking-tight">
                Achievement Tiers
              </h3>
              <p className="mt-5 max-w-[360px] text-[19px] leading-[1.55] font-semibold uppercase tracking-[0.02em] text-white/65">
                A hierarchy of discipline. Ascend through structural ranks by
                maintaining 100% adherence to defined protocols.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#070809] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <p className="text-7xl leading-none font-black text-white/25 md:text-8xl">
            "
          </p>
          <h2 className="mt-8 max-w-[1200px] text-[44px] leading-[1.06] font-black uppercase tracking-tight md:text-[74px]">
            "The Difference Between The Elite
            <br />
            And The Mediocre Is The Ability To
            <br />
            Endure The Void."
          </h2>
          <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.42em] text-white/55 md:text-[14px]">
            Directive 001
          </p>
        </div>
      </section>

      <section className="bg-[#070809] px-6 py-16 md:px-12 md:py-24">
        <div className="w-full bg-[#1f2227] px-6 py-20 text-center md:py-24">
          <h2 className="text-[56px] leading-none font-black uppercase tracking-tight md:text-[92px]">
            Enter The Void
          </h2>

          <div className="mx-auto mt-10 inline-flex items-center gap-4 bg-[#16191d] px-8 py-4">
            <span className="h-3 w-3 bg-white" />
            <span className="text-[16px] font-bold uppercase tracking-[0.12em] text-white/90 md:text-[22px]">
              Status: Standby
            </span>
          </div>

          <div className="mt-12">
            <button className="interactive min-w-[280px] cursor-pointer bg-white px-12 py-5 text-[20px] font-extrabold uppercase tracking-[0.34em] text-black hover:bg-white/90 md:min-w-[420px] md:text-[32px]">
              Initialize
            </button>
          </div>

          <div className="mx-auto mt-10 flex max-w-[560px] items-center gap-4 text-white/35">
            <span className="h-px flex-1 bg-white/20" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] md:text-[13px]">
              Connection Secure // RSA-4096
            </p>
            <span className="h-px flex-1 bg-white/20" />
          </div>
        </div>
      </section>

      <section id="the-origin" className="bg-[#070809] px-6 py-20 text-center md:py-28">
        <div className="mx-auto flex max-w-[980px] flex-col items-center">
          <h2 className="text-[54px] leading-none font-black uppercase tracking-tight md:text-[88px]">
            The Origin
          </h2>
          <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.42em] text-white/18 md:text-[16px]">
            The Story Started Here.
          </p>
          <a
            href="https://anshapps.in"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive mt-14 inline-flex min-w-[260px] cursor-pointer items-center justify-center border-2 border-white/65 bg-transparent px-10 py-4 text-[18px] font-extrabold uppercase tracking-[0.28em] text-white hover:border-white hover:bg-white/10 md:min-w-[520px] md:py-6 md:text-[30px]"
          >
            Visit Ansh
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070809] px-6 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 md:flex-row md:text-[11px]">
          <div className="flex items-center gap-3">
            <span className="text-[24px] font-black tracking-tight text-white">
              Focusx
            </span>
            <span className="text-white/25">|</span>
            <span>By Ansh</span>
          </div>

          <p className="text-center">
            © 2024 Focusx Made With Purpose.
          </p>

          <nav className="flex items-center gap-10">
            <a href="#" className="interactive border-b border-white/40 pb-1 text-white/70 hover:text-white">
              Privacy
            </a>
            <a href="#" className="interactive border-b border-white/40 pb-1 text-white/70 hover:text-white">
              Terms
            </a>
            <a href="#" className="interactive border-b border-white/40 pb-1 text-white/70 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </footer>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Focusx building phase notice"
        >
          <div
            className="animate-fade-up relative w-full max-w-[560px] border border-white/20 bg-[#121418]/90 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.6)] md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="interactive absolute top-3 right-3 cursor-pointer px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white"
              aria-label="Close popup"
            >
              Close
            </button>

            <p className="text-[34px] leading-none font-black uppercase tracking-[0.08em] md:text-[48px]">
              Focusx
            </p>
            <div className="mx-auto mt-5 h-px w-full max-w-[340px] bg-white/20" />
            <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.3em] text-white/65 md:text-[15px]">
              App is in building phase
            </p>
            <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.24em] text-white/80 md:text-[18px]">
              Made for 0.1% thinkers
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
