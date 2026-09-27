import { JsonLd } from "@/components/json-ld";
import { YeagrMark, YeagrMarkFlat } from "@/components/logo";
import { PageEvent } from "@/components/page-event";
import { TrackedLink } from "@/components/tracked-link";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "YEAGR — The open network for travel",
  description:
    "YEAGR is building the open network for travel: a programmable layer connecting people, places, suppliers, merchants, developers and AI agents.",
  path: "/",
  keywords: [
    "open travel distribution",
    "travel infrastructure",
    "travel API",
    "travel commerce",
    "travel technology",
    "AI travel infrastructure",
    "travel interoperability",
    "travel developer platform",
  ],
});

const supply = ["Air", "Stay", "Rail", "Ferry", "Experiences", "Local"];
const demand = ["Travel apps", "Merchants", "Creators", "Developers", "AI agents", "Travellers"];

const principles = [
  {
    number: "01",
    title: "Open",
    body: "Build on the network without asking permission wherever security and commercial rules allow.",
  },
  {
    number: "02",
    title: "Interoperable",
    body: "Meet suppliers where they are. Translate fragmented systems into a common language.",
  },
  {
    number: "03",
    title: "Programmable",
    body: "Give developers one elegant interface instead of a maze of bespoke travel integrations.",
  },
  {
    number: "04",
    title: "Agent-native",
    body: "Treat software agents as first-class participants in discovery, comparison and commerce.",
  },
  {
    number: "05",
    title: "Supplier-first",
    body: "Give travel companies room to create richer products instead of forcing every idea into old boxes.",
  },
  {
    number: "06",
    title: "Human",
    body: "Start with why people travel: people, places, moments, intent and memory — not database fields.",
  },
];

const catalysts = [
  "Modern airline retailing",
  "API-first commerce",
  "AI agents",
  "Dynamic offers",
  "Direct distribution",
  "Lower software costs",
];

function NetworkVisual() {
  return (
    <div className="yeagr-network-stage" aria-hidden="true">
      <div className="yeagr-orbit yeagr-orbit-one" />
      <div className="yeagr-orbit yeagr-orbit-two" />
      <div className="yeagr-orbit yeagr-orbit-three" />

      <svg className="yeagr-network-lines" viewBox="0 0 800 800" fill="none">
        <defs>
          <linearGradient id="lineGradient" x1="80" y1="80" x2="720" y2="720">
            <stop stopColor="#D29B55" stopOpacity="0.05" />
            <stop offset="0.5" stopColor="#D29B55" stopOpacity="0.85" />
            <stop offset="1" stopColor="#F1EEE6" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop stopColor="#F0C98B" />
            <stop offset="1" stopColor="#D29B55" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path className="network-path p1" d="M92 206C230 240 278 333 400 400" stroke="url(#lineGradient)" />
        <path className="network-path p2" d="M106 544C238 520 282 463 400 400" stroke="url(#lineGradient)" />
        <path className="network-path p3" d="M196 102C274 230 312 322 400 400" stroke="url(#lineGradient)" />
        <path className="network-path p4" d="M400 400C526 332 592 230 708 194" stroke="url(#lineGradient)" />
        <path className="network-path p5" d="M400 400C514 466 580 532 704 574" stroke="url(#lineGradient)" />
        <path className="network-path p6" d="M400 400C484 302 506 154 558 88" stroke="url(#lineGradient)" />
        <path className="network-path p7" d="M108 354C252 350 292 368 400 400" stroke="url(#lineGradient)" />
        <path className="network-path p8" d="M400 400C532 398 626 348 724 350" stroke="url(#lineGradient)" />
        <circle className="network-pulse pulse-1" cx="92" cy="206" r="42" fill="url(#nodeGlow)" />
        <circle className="network-pulse pulse-2" cx="708" cy="194" r="42" fill="url(#nodeGlow)" />
        <circle className="network-pulse pulse-3" cx="704" cy="574" r="42" fill="url(#nodeGlow)" />
      </svg>

      <div className="network-node node-a"><span>AIR</span><b>DUB</b></div>
      <div className="network-node node-b"><span>STAY</span><b>TYO</b></div>
      <div className="network-node node-c"><span>RAIL</span><b>EU</b></div>
      <div className="network-node node-d"><span>AGENT</span><b>AI</b></div>
      <div className="network-node node-e"><span>LOCAL</span><b>LIVE</b></div>
      <div className="network-node node-f"><span>SELLER</span><b>API</b></div>

      <div className="yeagr-core">
        <YeagrMark className="h-12 w-12" />
        <span>OPEN NETWORK</span>
      </div>

      <div className="network-signal signal-a" />
      <div className="network-signal signal-b" />
      <div className="network-signal signal-c" />
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return <p className="yeagr-kicker">{children}</p>;
}

export default function Home() {
  return (
    <main className="bg-[#090D14] text-[#F4F1E9]">
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }])]} />
      <PageEvent eventName="homepage_viewed" properties={{ page_type: "open_network_home" }} />

      <section className="yeagr-hero">
        <div className="yeagr-hero-grid" />
        <div className="yeagr-hero-glow" />
        <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:px-12 xl:px-16">
          <div className="relative z-10">
            <div className="yeagr-status">
              <span className="yeagr-status-dot" />
              OPEN TRAVEL / SYSTEM 01
            </div>
            <h1 className="mt-8 max-w-5xl font-display text-[clamp(3.6rem,8vw,8.6rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[#F4F1E9]">
              Travel broke
              <br />
              the sound barrier.
              <span className="mt-3 block text-[#D29B55]">Distribution hasn&apos;t.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#F4F1E9]/68 sm:text-xl">
              YEAGR is building the open network for travel — one programmable
              layer connecting people, places, suppliers, merchants, developers
              and AI agents.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#network" className="yeagr-button yeagr-button-primary">
                Explore the network
                <span aria-hidden="true">↘</span>
              </a>
              <a href="#build" className="yeagr-button yeagr-button-secondary">
                Build with us
              </a>
              <TrackedLink
                href="/routes"
                eventName="cta_clicked"
                eventProperties={{
                  cta: "explore_existing_product",
                  surface: "open_network_hero",
                  destination: "/routes",
                }}
                className="yeagr-text-link"
              >
                Explore live travel data →
              </TrackedLink>
            </div>
            <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-white/10 pt-6">
              <div>
                <span className="yeagr-mini-label">SUPPLY</span>
                <strong className="yeagr-mini-value">Connect once.</strong>
              </div>
              <div>
                <span className="yeagr-mini-label">BUILDERS</span>
                <strong className="yeagr-mini-value">Access broadly.</strong>
              </div>
              <div>
                <span className="yeagr-mini-label">TRAVEL</span>
                <strong className="yeagr-mini-value">Create freely.</strong>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[720px]">
            <NetworkVisual />
          </div>
        </div>
        <div className="yeagr-scroll-cue">
          <span>SCROLL TO BREAK THE BARRIER</span>
          <i />
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0D121B]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28 xl:px-16">
          <div>
            <SectionTag>01 / THE BARRIER</SectionTag>
            <h2 className="yeagr-section-title mt-5">
              Travel is connected.
              <br />
              Its infrastructure isn&apos;t.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-3xl text-xl leading-9 text-white/72 sm:text-2xl">
              Thousands of travel companies operate across different systems,
              protocols and commercial structures. Every new connection can mean
              another integration, another dependency and another barrier to an
              idea reaching a traveller.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-white/10 bg-white/10 md:grid-cols-3">
              {["AIR", "HOTEL", "RAIL", "FERRY", "EXPERIENCES", "LOCAL"].map((item, index) => (
                <div key={item} className="fragment-card">
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  <small>DIFFERENT SYSTEM</small>
                </div>
              ))}
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-[#D29B55]">
              Fragmentation is not a law of nature. It is an architecture choice.
            </p>
          </div>
        </div>
      </section>

      <section id="network" className="yeagr-section">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionTag>02 / THE YEAGR NETWORK</SectionTag>
          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="yeagr-section-title max-w-4xl">
              One network.
              <br />
              A world of travel.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/58">
              Suppliers keep the systems that work for them. Builders get a
              common way to discover and interact with travel. YEAGR handles the
              complexity between both sides.
            </p>
          </div>

          <div className="mt-16 grid gap-3 lg:grid-cols-[1fr_0.88fr_1fr]">
            <div className="network-column">
              <div className="network-column-head">
                <span>SUPPLY</span>
                <small>THE WORLD&apos;S TRAVEL PRODUCTS</small>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {supply.map((item) => (
                  <div key={item} className="network-chip">
                    <span className="network-chip-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="network-core-card">
              <div className="network-core-top">
                <YeagrMark className="h-10 w-10" />
                <span>YEAGR</span>
              </div>
              <div className="mt-9 space-y-3">
                {[
                  "Open travel graph",
                  "Canonical offers",
                  "Capabilities",
                  "Discovery",
                  "Identity",
                  "Interoperability",
                ].map((item) => (
                  <div key={item} className="core-row">
                    <span>{item}</span>
                    <b>OPEN</b>
                  </div>
                ))}
              </div>
              <div className="mt-9 border-t border-[#D29B55]/25 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#D29B55]">
                Abstract fragmentation. Don&apos;t recreate it.
              </div>
            </div>

            <div className="network-column">
              <div className="network-column-head">
                <span>DEMAND</span>
                <small>EVERY WAY TRAVEL CAN BE SOLD</small>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {demand.map((item) => (
                  <div key={item} className="network-chip">
                    <span className="network-chip-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-2">
            <p className="text-2xl font-medium tracking-[-0.03em] text-white">
              Build once → connect to the ecosystem.
            </p>
            <p className="text-2xl font-medium tracking-[-0.03em] text-[#D29B55] md:text-right">
              Connect once → access the world of travel.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#F0EDE5] text-[#111823]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-28 xl:px-16">
          <div>
            <SectionTag>03 / PROGRAMMABLE TRAVEL</SectionTag>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              Travel should be as easy to build with as payments.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#111823]/66">
              Developers shouldn&apos;t need to understand every protocol under
              global travel. YEAGR&apos;s ambition is one elegant interface over
              many kinds of supply.
            </p>
          </div>

          <div className="code-window">
            <div className="code-window-head">
              <div className="flex gap-1.5">
                <i />
                <i />
                <i />
              </div>
              <span>yeagr / offers / search</span>
              <small>API</small>
            </div>
            <pre>
              <code>{`const offers = await yeagr.search({
  from: "DUB",
  intent: "warm, creative, affordable",
  dates: "flexible",
  duration: "3 weeks"
});

return offers.best();`}</code>
            </pre>
            <div className="code-result">
              <span>200</span>
              <div>
                <strong>12 live possibilities</strong>
                <small>air + stay + rail + local experiences</small>
              </div>
              <b>← ONE INTERFACE</b>
            </div>
          </div>
        </div>
      </section>

      <section className="yeagr-section">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-12 xl:px-16">
          <div>
            <SectionTag>04 / FROM INVENTORY TO INTENT</SectionTag>
            <h2 className="yeagr-section-title mt-5 max-w-3xl">
              People don&apos;t dream in fare classes.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/58">
              Traditional travel search begins after the traveller already knows
              the answer. YEAGR can connect the messy, human beginning of a trip
              to structured live supply.
            </p>
          </div>
          <div className="intent-panel">
            <div className="intent-old">
              <span>OLD WORLD INPUT</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["FROM", "TO", "DATE", "PAX"].map((item) => (
                  <div key={item}>
                    <small>{item}</small>
                    <b>—</b>
                  </div>
                ))}
              </div>
            </div>
            <div className="intent-line" />
            <div className="intent-new">
              <span>HUMAN INTENT</span>
              <blockquote>
                “I want somewhere warm for three weeks where I can work, swim,
                eat well and meet interesting people.”
              </blockquote>
            </div>
            <div className="intent-flow">
              {["PERSON", "INTENT", "PLACES", "LIVE SUPPLY", "TRIP"].map((item, index) => (
                <div key={item}>
                  <span>{item}</span>
                  {index < 4 ? <b>→</b> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0D121B]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionTag>05 / THE TRAVEL GRAPH</SectionTag>
              <h2 className="yeagr-section-title mt-5">
                Travel is a graph,
                <br />
                not a search box.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/58">
                People, places, suppliers, trips, relationships, experiences
                and memories already connect. YEAGR gives those relationships a
                common structure.
              </p>
            </div>
            <div className="travel-graph">
              <div className="graph-core">
                <YeagrMarkFlat className="h-9 w-9" />
                <span>TRAVEL GRAPH</span>
              </div>
              {[
                ["PEOPLE", "graph-people"],
                ["PLACES", "graph-places"],
                ["TRIPS", "graph-trips"],
                ["MEMORIES", "graph-memories"],
                ["SUPPLIERS", "graph-suppliers"],
                ["EXPERIENCES", "graph-experiences"],
                ["INTERESTS", "graph-interests"],
                ["RELATIONSHIPS", "graph-relationships"],
              ].map(([label, className]) => (
                <div key={label} className={`graph-node ${className}`}>
                  {label}
                </div>
              ))}
              <svg viewBox="0 0 900 470" className="graph-lines" aria-hidden="true">
                <path d="M450 235L120 96M450 235L250 62M450 235L695 70M450 235L795 155M450 235L770 360M450 235L604 410M450 235L270 405M450 235L95 315" />
                <path className="graph-secondary" d="M120 96L250 62M250 62L695 70M695 70L795 155M795 155L770 360M770 360L604 410M604 410L270 405M270 405L95 315M95 315L120 96" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="yeagr-section">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionTag>06 / OPEN BY DESIGN</SectionTag>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="yeagr-section-title max-w-4xl">Open infrastructure creates bigger markets.</h2>
            <p className="max-w-xl text-lg leading-8 text-white/58 lg:justify-self-end">
              YEAGR should not replace one gatekeeper with another. The network
              becomes more useful when more people can create on top of it.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.number} className="principle-card">
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agent-section">
        <div className="agent-grid" />
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-28 xl:px-16">
          <div>
            <SectionTag>07 / AGENT-NATIVE</SectionTag>
            <h2 className="yeagr-section-title mt-5 max-w-4xl">
              The next travel customer may be software.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
              AI agents will research, compare and assemble trips on behalf of
              people. They need reliable, structured and permissioned access to
              real travel supply.
            </p>
          </div>
          <div className="agent-flow">
            {[
              ["01", "TRAVELLER", "I want somewhere extraordinary."],
              ["02", "AI AGENT", "Understands intent and constraints."],
              ["03", "YEAGR", "Discovers structured global supply."],
              ["04", "ECOSYSTEM", "Air + stay + rail + experience."],
            ].map(([number, title, body], index) => (
              <div className="agent-step" key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
                {index < 3 ? <b>↓</b> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#F0EDE5] text-[#111823]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <SectionTag>08 / THE NETWORK EFFECT</SectionTag>
          <div className="mt-5 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <h2 className="font-display text-[clamp(3rem,6vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Every connection makes the network more useful.
            </h2>
            <div>
              <p className="max-w-2xl text-xl leading-9 text-[#111823]/66">
                The value isn&apos;t another booking interface. The value is the
                network underneath it.
              </p>
              <div className="network-loop mt-10">
                {["MORE SUPPLIERS", "MORE SUPPLY", "MORE BUILDERS", "MORE DEMAND"].map((item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                    <b>→</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="yeagr-section">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 xl:px-16">
          <div>
            <SectionTag>09 / WHY NOW</SectionTag>
            <h2 className="yeagr-section-title mt-5">
              Travel infrastructure is reaching an inflection point.
            </h2>
          </div>
          <div className="why-grid">
            {catalysts.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="manifesto" className="manifesto-section">
        <div className="manifesto-rift" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40 xl:px-16">
          <SectionTag>10 / THE MANIFESTO</SectionTag>
          <div className="mt-14 space-y-3">
            <p>TRAVEL SHOULD BE OPEN.</p>
            <p>TRAVEL SHOULD BE PROGRAMMABLE.</p>
            <p>SUPPLIERS SHOULD BE ABLE TO CREATE.</p>
            <p>DEVELOPERS SHOULD BE ABLE TO BUILD.</p>
            <p>TRAVELLERS SHOULD HAVE MORE CHOICE.</p>
            <p className="manifesto-muted">THE FUTURE SHOULD NOT REQUIRE PERMISSION FROM THE PAST.</p>
          </div>
          <div className="mt-20 border-t border-[#D29B55]/35 pt-10">
            <h2>BREAK THE BARRIER.</h2>
            <div className="mt-8 flex items-center gap-4">
              <YeagrMark className="h-12 w-12" />
              <span className="font-display text-3xl font-semibold tracking-[-0.04em]">YEAGR</span>
            </div>
          </div>
        </div>
      </section>

      <section id="build" className="build-section">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:px-12 lg:py-32 xl:px-16">
          <div>
            <SectionTag>11 / BUILD THE NETWORK</SectionTag>
            <h2 className="mt-5 max-w-5xl font-display text-[clamp(3.2rem,7vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              This needs to be built.
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/62">
              We&apos;re looking for engineers, travel technologists, suppliers,
              AI builders, potential co-founders and investors who believe travel
              infrastructure can be radically more open.
            </p>
          </div>
          <div className="build-card">
            <div className="build-card-label">OPEN CALL</div>
            <div className="space-y-3">
              {["ENGINEERS", "TRAVEL TECHNOLOGISTS", "SUPPLIERS", "AI BUILDERS", "CO-FOUNDERS", "INVESTORS"].map((item) => (
                <div className="build-role" key={item}>
                  <span>{item}</span>
                  <i />
                </div>
              ))}
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a
                href="https://github.com/yeagr-official/yeagr"
                target="_blank"
                rel="noreferrer"
                className="yeagr-button yeagr-button-primary justify-center"
              >
                Build on GitHub ↗
              </a>
              <a
                href="mailto:hello@yeagr.com?subject=YEAGR%20%E2%80%94%20Open%20travel%20network"
                className="yeagr-button yeagr-button-secondary justify-center"
              >
                Start a conversation
              </a>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.18em] text-white/38">
              Open travel starts with people willing to build it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
