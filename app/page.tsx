import { Hero } from "./components/Hero";
import { SectionHeader } from "./components/SectionHeader";
import { RoutineTimeline } from "./components/RoutineTimeline";
import { DietPlanner } from "./components/DietPlanner";
import { InsightGrid } from "./components/InsightGrid";
import { ClimateMatrix } from "./components/ClimateMatrix";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:gap-20 md:px-10 md:py-16">
      <Hero />

      <section>
        <SectionHeader
          eyebrow="Routine Architecture"
          title="Design your day around Ahmedabad&apos;s pulse"
          description="Blend early-morning movement, midday resets, and evening wind-downs to stay resilient through dry heat and festival nights."
        />
        <RoutineTimeline />
      </section>

      <section>
        <SectionHeader
          eyebrow="Nutrition"
          title="Diet plan tuned to local ingredients"
          description="Strategise your hydration, macro balance, and portion control without giving up the flavours you love."
        />
        <DietPlanner />
      </section>

      <ClimateMatrix />
      <InsightGrid />

      <footer className="rounded-3xl border border-brand-400/30 bg-brand-500/10 p-8 text-center text-sm text-brand-100">
        <p className="text-base text-brand-50">
          Hold yourself accountable by tracking 3 dials daily: movement (steps or minutes), nourishment (plates of veg + protein), and recovery (hours of quality sleep). Repeat weekly reviews every Sunday evening.
        </p>
      </footer>
    </main>
  );
}
