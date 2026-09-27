import Link from "next/link";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/#network", label: "Network" },
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/routes", label: "Travel data" },
  { href: "https://github.com/yeagr-official/yeagr", label: "GitHub", external: true },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090D14]/92 text-cloud backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="[&_span:last-child]:text-cloud">
          <Logo />
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm px-3 py-2 text-sm font-medium text-cloud/58 transition hover:bg-cloud/5 hover:text-cloud"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-2 text-sm font-medium text-cloud/58 transition hover:bg-cloud/5 hover:text-cloud"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <a
          href="mailto:hello@yeagr.com?subject=YEAGR%20%E2%80%94%20Open%20travel%20network"
          className="rounded-sm border border-[#D29B55]/50 bg-[#D29B55] px-4 py-2 text-sm font-semibold text-[#090D14] transition hover:bg-[#E2B574]"
        >
          Build with us
        </a>
      </div>
    </header>
  );
}
