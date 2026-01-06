import React from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
};

export default function Button({ children, href, variant = "primary" }: Props): JSX.Element {
  const base = "inline-flex items-center justify-center px-4 rounded-md font-medium whitespace-nowrap";
  const classes = variant === "primary" ? `${base} bg-[var(--primary)] text-[var(--primary-foreground)] h-10` : `${base} bg-white border border-slate-200 text-slate-900 h-10`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
