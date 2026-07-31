"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        {labels.map((label, i) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2"
            style={{ width: `${100 / totalSteps}%` }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                i < currentStep
                  ? "bg-emerald text-white"
                  : i === currentStep
                    ? "bg-navy text-white ring-4 ring-navy/20"
                    : "bg-slate-200 text-slate-400"
              }`}
            >
              {i < currentStep ? "✓" : i + 1}
            </div>
            <span
              className={`text-[8px] font-black uppercase tracking-widest hidden sm:block ${
                i <= currentStep ? "text-navy" : "text-slate-300"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
