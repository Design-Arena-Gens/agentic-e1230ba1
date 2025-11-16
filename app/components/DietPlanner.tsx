"use client";

import { useState } from "react";
import clsx from "clsx";
import { DietPlan, weekdayDiet, weekendDiet } from "@/lib/data/routine";

type DietDayType = "weekday" | "weekend";

const plans: Record<DietDayType, DietPlan> = {
  weekday: weekdayDiet,
  weekend: weekendDiet,
};

export function DietPlanner() {
  const [dayType, setDayType] = useState<DietDayType>("weekday");
  const plan = plans[dayType];

  return (
    <section className="space-y-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80 p-8 shadow-card">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-slate-50 md:text-3xl">Eat for the Ahmedabad Climate</h3>
          <p className="text-slate-300">
            Cooling ingredients, smart hydration, and portion control aligned with local produce.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-slate-900/70 p-1 text-sm">
          {(["weekday", "weekend"] as DietDayType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setDayType(type)}
              className={clsx(
                "rounded-full px-4 py-2 transition",
                type === dayType ? "bg-brand-500 text-white shadow" : "text-slate-300 hover:text-white"
              )}
            >
              {type === "weekday" ? "Workday Plate" : "Weekend Treat"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {plan.meals.map((meal) => (
          <article
            key={`${plan.dayType}-${meal.time}`}
            className="h-full rounded-2xl border border-white/5 bg-slate-900/70 p-5 transition hover:border-brand-400/60"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-200">{meal.time}</p>
                <h4 className="mt-2 text-lg font-semibold text-white">{meal.name}</h4>
              </div>
              {meal.hydration && (
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-200">
                  {meal.hydration}
                </span>
              )}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {meal.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-brand-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <footer className="rounded-2xl border border-brand-400/30 bg-brand-500/10 p-5 text-sm text-brand-100">
        <p>
          Tip: Batch prep millets and chutneys on Sundays, freeze portioned dal, and keep a spice box with ajwain,
          jeera, and fennel for quick digestive support.
        </p>
      </footer>
    </section>
  );
}
