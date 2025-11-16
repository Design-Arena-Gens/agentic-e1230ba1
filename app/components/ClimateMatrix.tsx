import { climateWindows } from "@/lib/data/climate";

export function ClimateMatrix() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
      <header className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-brand-200">Seasonal Sync</p>
        <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Adjust for Ahmedabad&apos;s four wellness windows</h3>
        <p className="mt-2 text-sm text-slate-300 md:text-base">
          Slide your focus as the climate shifts through the year to stay aligned with circadian and metabolic cues.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {climateWindows.map((window) => (
          <article
            key={window.label}
            className="rounded-2xl border border-white/5 bg-slate-900/80 p-5 transition hover:border-brand-400/60"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">{window.label}</h4>
                <p className="text-xs uppercase tracking-[0.25em] text-brand-200">{window.months}</p>
              </div>
              <span className="rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-200">
                Avg {window.avgHigh}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {window.strategies.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-brand-400" aria-hidden />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
