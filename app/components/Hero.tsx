import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80 p-10 shadow-card">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl" aria-hidden />
      <div className="relative grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/50 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
            Ahmedabad Wellness Playbook
          </span>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Sync your routine with the city&apos;s heat, rhythm, and flavour.
          </h1>
          <p className="max-w-xl text-base text-slate-300 md:text-lg">
            A curated lifestyle operating system mixing local wisdom, modern sports science, and the city&apos;s vibrant food
            culture. Built to keep you energised through 42°C summers and festival-packed evenings.
          </p>
          <div className="flex flex-col gap-4 text-sm text-brand-100 md:flex-row md:items-center">
            <div className="rounded-2xl border border-brand-400/40 bg-brand-500/10 px-5 py-3">
              <p className="font-semibold uppercase tracking-[0.3em]">Designed for</p>
              <p className="mt-1 text-lg text-white">Urban professionals, age 25–45</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
              <p className="font-semibold uppercase tracking-[0.3em]">Season Focus</p>
              <p className="mt-1 text-lg text-white">Pre-monsoon heatwave to winter breeze</p>
            </div>
          </div>
        </div>
        <div className="relative hidden h-full w-full overflow-hidden rounded-3xl border border-white/5 bg-slate-900/70 md:block">
          <Image
            src="/images/sabarmati-routine.svg"
            alt="Sabarmati riverfront sunrise with runners"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/30 to-slate-950/90" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
            <p className="font-semibold text-white">Climate Check</p>
            <p>Peak UV between 12–3 PM • Heat index +6°C • Sunset 6:58 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
