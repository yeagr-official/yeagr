type ScoreBarProps = {
  score: number;
  label?: string;
  inverse?: boolean;
};

export function ScoreBar({ score, label = "Yeagr score", inverse = false }: ScoreBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className={inverse ? "text-xs font-medium text-cloud/64" : "text-xs font-medium text-runway/58"}>
          {label}
        </span>
        <span className={inverse ? "font-mono text-sm font-semibold text-signal" : "font-mono text-sm font-semibold text-runway"}>
          {score}
        </span>
      </div>
      <div className={inverse ? "h-2 rounded-full bg-cloud/12" : "h-2 rounded-full bg-runway/10"}>
        <div
          className="h-2 rounded-full bg-gradient-to-r from-jetstream to-signal"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
