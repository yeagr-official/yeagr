import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070A0F] text-cloud">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="[&_span:last-child]:text-cloud">
              <Logo />
            </div>
            <p className="mt-4 max-w-lg text-sm leading-6 text-cloud/52">
              YEAGR is building the open network for travel — connecting people,
              places, suppliers, merchants, developers and AI agents through a
              common programmable layer.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href="/#network" className="text-cloud/52 transition hover:text-brass">
              Network
            </Link>
            <Link href="/#manifesto" className="text-cloud/52 transition hover:text-brass">
              Manifesto
            </Link>
            <Link href="/routes" className="text-cloud/52 transition hover:text-brass">
              Travel data
            </Link>
            <a
              href="https://github.com/yeagr-official/yeagr"
              target="_blank"
              rel="noreferrer"
              className="text-cloud/52 transition hover:text-brass"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@yeagr.com"
              className="text-cloud/52 transition hover:text-brass"
            >
              hello@yeagr.com
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-cloud/28 sm:flex-row sm:items-center sm:justify-between">
          <span>Open travel starts here.</span>
          <span>YEAGR / BREAK THE BARRIER</span>
        </div>
      </div>
    </footer>
  );
}
