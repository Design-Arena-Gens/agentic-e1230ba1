"use client";

import { useMemo, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { RoutineDay, weekdayRoutine, weekendRoutine } from "@/lib/data/routine";

type TabOption = {
  id: "weekday" | "weekend";
  label: string;
  description: string;
  routine: RoutineDay[];
};

const tabs: TabOption[] = [
  {
    id: "weekday",
    label: "Weekday Rhythm",
    description: "Structure your workdays to sync with Ahmedabad's climate curve.",
    routine: weekdayRoutine,
  },
  {
    id: "weekend",
    label: "Weekend Reset",
    description: "Recharge with active recovery, hobbies, and family rituals.",
    routine: weekendRoutine,
  },
];

export function RoutineTimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const summary = useMemo(() => tabs[selectedIndex], [selectedIndex]);

  return (
    <section className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-slate-50 md:text-3xl">Anchor Your Day</h3>
          <p className="text-slate-300">Tap between weekday and weekend modes to keep your energy calibrated.</p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-slate-900/50 p-1 text-sm">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={clsx(
                "rounded-full px-4 py-2 transition-all",
                index === selectedIndex
                  ? "bg-brand-500 text-white shadow"
                  : "text-slate-300 hover:text-white"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm uppercase tracking-[0.35em] text-brand-200">{summary.label}</p>
      <p className="text-base text-slate-200 md:text-lg">{summary.description}</p>

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex as (index: number) => void}>
        <Tab.List className="hidden" aria-hidden="true">
          {tabs.map((tab) => (
            <Tab key={tab.id}>{tab.label}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={tab.id} className="mt-6 space-y-14">
              {tab.routine.map((section) => (
                <div key={section.name} className="space-y-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-white md:text-2xl">{section.name}</h4>
                      <p className="text-sm text-slate-300 md:text-base">{section.vibe}</p>
                    </div>
                  </div>
                  <ol className="space-y-4">
                    {section.blocks.map((block) => (
                      <li key={`${block.time}-${block.title}`} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-brand-400/60">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.3em] text-brand-200">{block.time}</div>
                            <h5 className="text-lg font-semibold text-white md:text-xl">{block.title}</h5>
                            <p className="text-sm text-slate-300 md:text-base">{block.description}</p>
                          </div>
                          <div className="mt-2 rounded-lg bg-brand-500/10 px-3 py-2 text-xs font-medium uppercase tracking-wide text-brand-200 md:mt-0">
                            {block.focus}
                          </div>
                        </div>
                        {block.location && (
                          <p className="mt-3 text-xs text-brand-200">Suggested spot: {block.location}</p>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
