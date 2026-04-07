export default function Home() {
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
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/15 bg-white/6 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md md:px-10 md:py-5 md:text-xs">
              <div className="flex items-center gap-4">
                <span className="text-xl font-black tracking-[0.1em]">FOCUSX</span>
                <span className="hidden text-white/45 md:inline">|</span>
                <span className="hidden text-white/50 md:inline">
                  A Product of Ansh
                </span>
              </div>

              <nav className="hidden items-center gap-10 text-white/85 md:flex">
                <a href="#" className="border-b border-white pb-1 text-white">
                  Platform
                </a>
                <a href="#" className="hover:text-white">
                  Methodology
                </a>
                <a href="#" className="hover:text-white">
                  Security
                </a>
              </nav>

              <button className="bg-white px-5 py-3 text-[11px] font-extrabold tracking-[0.14em] text-black uppercase md:px-8 md:py-4">
                Get Started
              </button>
            </header>

            <section className="flex flex-1 flex-col items-center justify-center px-5 pt-24 text-center md:px-10 md:pt-28">
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.5em] text-white/55 md:text-[14px]">
                Ansh Presents
              </p>
              <p className="mb-10 text-[14px] font-semibold uppercase tracking-[0.42em] text-white/80 md:text-[18px]">
                Initiating Sequence
              </p>

              <h1 className="max-w-[1180px] text-[52px] leading-[0.94] font-black uppercase tracking-tight md:text-[132px]">
                The Monolith
                <br />
                Protocol
              </h1>

              <p className="mt-8 text-[18px] font-semibold uppercase tracking-[0.08em] text-white/75 md:text-[46px] md:leading-none">
                Elite Discipline for the 01%.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="min-w-[150px] bg-white px-8 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-black md:min-w-[220px] md:py-4">
                  Enlist Now
                </button>
                <button className="min-w-[150px] bg-[#2f2f2f]/90 px-8 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white md:min-w-[220px] md:py-4">
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
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Active Nodes
            </p>
            <p className="mt-2 text-[54px] leading-none font-black tracking-tight">
              12,842
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              System Uptime
            </p>
            <p className="mt-2 text-[54px] leading-none font-black tracking-tight">
              99.99%
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Average Focus
            </p>
            <p className="mt-2 text-[54px] leading-none font-black tracking-tight">
              04:12:00
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#060708] px-6 py-14 md:px-12 md:py-20">
        <div className="w-full">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            System Architecture
          </h2>
          <div className="mt-4 h-[6px] w-20 bg-white" />

          <div className="mt-12 grid grid-cols-1 overflow-hidden border border-white/10 md:grid-cols-3">
            <article className="bg-[#0c0d0e] p-10 md:min-h-[330px]">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Zm-7-2a2 2 0 1 1 4 0v2h-4V6Z" />
              </svg>
              <h3 className="mt-24 text-[34px] leading-none font-black uppercase tracking-tight">
                Hard Lock Mode
              </h3>
              <p className="mt-5 max-w-[340px] text-[19px] leading-[1.55] font-semibold uppercase tracking-[0.02em] text-white/65">
                Complete neural isolation. All secondary processes terminated
                until objective completion. No override permitted.
              </p>
            </article>

            <article className="bg-[#111315] p-10 md:min-h-[330px]">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2 3v8h12V8H6Zm2 6h2v-3H8v3Zm3 0h2V9h-2v5Zm3 0h2v-2h-2v2Z" />
              </svg>
              <h3 className="mt-24 text-[34px] leading-none font-black uppercase tracking-tight">
                Deep Analytics
              </h3>
              <p className="mt-5 max-w-[360px] text-[19px] leading-[1.55] font-semibold uppercase tracking-[0.02em] text-white/65">
                High-fidelity behavioral tracking. Identify cognitive leaks and
                optimize daily output with mathematical precision.
              </p>
            </article>

            <article className="bg-[#0c0d0e] p-10 md:min-h-[330px]">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 3h10v2h-1v4a4 4 0 0 1-3 3.87V16h3v2H8v-2h3v-3.13A4 4 0 0 1 8 9V5H7V3Zm3 2v4a2 2 0 1 0 4 0V5h-4Zm-4 1h2v3a4.98 4.98 0 0 1-.76 2.65A5.98 5.98 0 0 1 4 14V12a4 4 0 0 0 2-3V6Zm12 0h2v3a4 4 0 0 0 2 3v2a5.98 5.98 0 0 1-3.24-2.35A4.98 4.98 0 0 1 18 9V6Z" />
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
            <button className="min-w-[280px] bg-white px-12 py-5 text-[20px] font-extrabold uppercase tracking-[0.34em] text-black md:min-w-[420px] md:text-[32px]">
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

      <section className="bg-[#070809] px-6 py-20 text-center md:py-28">
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
            className="mt-14 inline-flex min-w-[260px] cursor-pointer items-center justify-center border-2 border-white/65 bg-transparent px-10 py-4 text-[18px] font-extrabold uppercase tracking-[0.28em] text-white md:min-w-[520px] md:py-6 md:text-[30px]"
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
            <a href="#" className="border-b border-white/40 pb-1 text-white/70">
              Privacy
            </a>
            <a href="#" className="border-b border-white/40 pb-1 text-white/70">
              Terms
            </a>
            <a href="#" className="border-b border-white/40 pb-1 text-white/70">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
