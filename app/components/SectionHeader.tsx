import { ReactNode } from "react";
import clsx from "clsx";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <header
      className={clsx(
        "mb-8 space-y-2",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-brand-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{title}</h2>
      {description && <p className="text-base text-slate-300 md:text-lg">{description}</p>}
    </header>
  );
}
