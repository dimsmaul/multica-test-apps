const FEATURES = [
  {
    emoji: "🚀",
    title: "Blazing Launch",
    desc: "Ship your idea in minutes, not months. Zero config, all vibes.",
  },
  {
    emoji: "🎨",
    title: "Bold by Default",
    desc: "Dark mode and orange sparks built in — no theme wrangling needed.",
  },
  {
    emoji: "🔥",
    title: "Actually Fun",
    desc: "Because landing pages don't have to be boring corporate wallpaper.",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 animate-float rounded-full bg-primary/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-40 right-0 h-96 w-96 animate-float-delayed rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 sm:px-16">
        <span className="text-xl font-black tracking-tight text-foreground">
          🔶 Blastoff
        </span>
        <a
          href="#get-started"
          className="rounded-full border border-card-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Get Started
        </a>
      </nav>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 py-20 text-center sm:px-16">
        <span className="mb-6 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          ✨ now with 100% more orange
        </span>

        <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-foreground sm:text-7xl">
          Build something{" "}
          <span className="text-primary">loud, bright</span> and fun.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-foreground/70 sm:text-xl">
          A tiny playground landing page — dark background, orange energy,
          zero seriousness required.
        </p>

        <div
          id="get-started"
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#"
            className="rounded-full bg-primary px-8 py-3 text-base font-bold text-primary-foreground shadow-[0_0_40px_-10px] shadow-primary transition-transform hover:scale-105"
          >
            Launch Now 🚀
          </a>
          <a
            href="#"
            className="rounded-full border border-card-border px-8 py-3 text-base font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            See it in action
          </a>
        </div>

        <section className="mt-24 grid w-full max-w-4xl gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-card-border bg-card p-6 text-left transition-transform hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/60">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="relative z-10 px-8 py-8 text-center text-sm text-foreground/40 sm:px-16">
        Made with 🧡 for the fun of it.
      </footer>
    </div>
  );
}
