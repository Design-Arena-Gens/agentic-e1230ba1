import { hydrationGoals, environmentTips, microHabits } from "@/lib/data/routine";

export function InsightGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <article className="rounded-3xl border border-brand-400/30 bg-brand-500/10 p-6 shadow-card">
        <h3 className="text-lg font-semibold text-white">Hydration Blueprint</h3>
        <p className="mt-2 text-sm text-brand-100">
          Aim for {hydrationGoals.targetLitres} litres daily; increase to 3.5L during May heatwaves.
        </p>
        <ul className="mt-4 space-y-3 text-sm text-brand-50">
          {hydrationGoals.boosters.map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-brand-300" aria-hidden />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">Environment Sync</h3>
        <p className="mt-2 text-sm text-slate-300">Micro-adjustments against heat, dust, and humidity swings.</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-200">
          {environmentTips.map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-brand-400" aria-hidden />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold text-white">Micro Habits</h3>
        <p className="mt-2 text-sm text-slate-300">Small anchors that keep momentum steady.</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-200">
          {microHabits.map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-brand-300" aria-hidden />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
