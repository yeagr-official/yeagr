import Link from "next/link";
import type { SVGProps } from "react";

export function YeagrMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="yeagr-sLight" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.5" stopColor="#E4E8EE" />
          <stop offset="1" stopColor="#BFC6D1" />
        </linearGradient>
        <linearGradient id="yeagr-sDark" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#9BA1AD" />
          <stop offset="0.55" stopColor="#787F8C" />
          <stop offset="1" stopColor="#565D6B" />
        </linearGradient>
      </defs>
      <polygon points="50,8 40.6,37.06 50,50" fill="url(#yeagr-sLight)" />
      <polygon points="89.95,37.02 59.4,37.06 50,50" fill="url(#yeagr-sLight)" />
      <polygon points="74.69,83.97 65.22,54.94 50,50" fill="url(#yeagr-sLight)" />
      <polygon points="25.31,83.97 50,66 50,50" fill="url(#yeagr-sLight)" />
      <polygon points="10.05,37.02 34.78,54.94 50,50" fill="url(#yeagr-sLight)" />
      <polygon points="50,8 59.4,37.06 50,50" fill="url(#yeagr-sDark)" />
      <polygon points="89.95,37.02 65.22,54.94 50,50" fill="url(#yeagr-sDark)" />
      <polygon points="74.69,83.97 50,66 50,50" fill="url(#yeagr-sDark)" />
      <polygon points="25.31,83.97 34.78,54.94 50,50" fill="url(#yeagr-sDark)" />
      <polygon points="10.05,37.02 40.6,37.06 50,50" fill="url(#yeagr-sDark)" />
    </svg>
  );
}

export function YeagrMarkFlat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <polygon
        points="50,8 59.4,37.06 89.95,37.02 65.22,54.94 74.69,83.97 50,66 25.31,83.97 34.78,54.94 10.05,37.02 40.6,37.06"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="yeagr home"
    >
      <YeagrMark className="h-9 w-9 shrink-0 drop-shadow-sm transition group-hover:-translate-y-0.5" />
      <span className="font-display text-2xl font-bold text-runway">
        yeagr
      </span>
    </Link>
  );
}
