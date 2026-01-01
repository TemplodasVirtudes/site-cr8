import * as React from "react"
import { cn } from "@/lib/utils"

type SilverRuleProps = React.HTMLAttributes<HTMLDivElement> & {
  accentWidthClassName?: string
  accentStrength?: "subtle" | "normal"
}

export function SilverRule({
  className,
  accentWidthClassName = "w-44",
  accentStrength = "subtle",
  ...props
}: SilverRuleProps) {
  const accent =
    accentStrength === "subtle"
      ? "via-white/60 blur-[0.2px]"
      : "via-white/80 blur-[0.35px]"

  return (
    <div className={cn("relative h-4 w-full", className)} aria-hidden="true" {...props}>
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-slate-200/25 to-transparent" />

      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[3px] rounded-full",
          accentWidthClassName,
          "bg-gradient-to-r from-transparent",
          accent,
          "to-transparent",
        )}
      />
    </div>
  )
}
