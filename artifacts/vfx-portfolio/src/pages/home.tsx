import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Clapperboard, Film, Mail, Play, Sparkles, Wand2 } from "lucide-react";

const works = [
  {
    title: "Brand Film Burst",
    type: "2D Animation / Edit",
    year: "2024",
    tone: "Launch visuals with playful transitions, punchy timing, and kinetic typography.",
    gradient: "from-[#ff2f8e] via-[#ff6b2b] to-[#ffd38a]",
  },
  {
    title: "Music Video VFX",
    type: "Compositing / Grade",
    year: "2024",
    tone: "Rotoscope layers, glowing trails, atmosphere, and frame-by-frame polish.",
    gradient: "from-[#00d7ff] via-[#7a4cff] to-[#ff2f8e]",
  },
  {
    title: "Social Ad Pack",
    type: "Motion Graphics",
    year: "2023",
    tone: "Fast vertical edits for reels, product reveals, titles, and callouts.",
    gradient: "from-[#ffe6a8] via-[#ff8a00] to-[#ff006a]",
  },
  {
    title: "Character Loop",
    type: "Animation Design",
    year: "2023",
    tone: "Expressive loops built for campaigns, profile films, and explainer cuts.",
    gradient: "from-[#f8e2b0] via-[#00e5ff] to-[#ff00aa]",
  },
];

const capabilities = [
  ["01", "Animation Design", "Frame-by-frame inspired movement, character moments, logo animation, and expressive loops."],
  ["02", "Video Editing", "Story-led pacing, music sync, social cuts, commercial edits, and director-style selects."],
  ["03", "VFX & Compositing", "Rotoscope, clean-up, keying, glow passes, atmosphere, match move looks, and shot finishing."],
  ["04", "Motion Graphics", "Kinetic type, lower thirds, explainer graphics, brand systems, HUDs, and transitions."],
];

function Wing({ side }: { side: "left" | "right" }) {
  const flip = side === "right" ? "scale-x-[-1]" : "";
  return (
    <div className={`wing wing-${side} ${flip}`}>
      <span className="wing-panel panel-one" />
      <span className="wing-panel panel-two" />
      <span className="wing-panel panel-three" />
      <span className="wing-orbit orbit-one" />
      <span className="wing-orbit orbit-two" />
      <span className="wing-line line-one" />
      <span className="wing-line line-two" />
    </div>
  );
}

function Doodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 82" fill="none" aria-hidden="true">
      <motion.path
        d="M7 51C30 30 42 74 67 47C81 31 89 9 103 29C117 49 121 76 143 55C159 40 166 8 181 27C194 44 191 69 213 47"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <circle cx="83" cy="13" r="5" fill="currentColor" />
      <circle cx="171" cy="15" r="5" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const coverY = useTransform(scrollYProgress, [0, 0.35], [0, -160]);
  const coverScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);
  const scrollScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  const reelY = useTransform(scrollYProgress, [0.08, 0.45], [90, -70]);
  const reelRotate = useTransform(scrollYProgress, [0.08, 0.45], [-1.6, 1.4]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const floatReverseY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#111] text-[#fff7e8] selection:bg-[#00dcff] selection:text-black">
      <motion.div className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[#ff2f8e] via-[#fff0cf] to-[#00dcff]" style={{ scaleX: scrollScale }} />
      <motion.div className="pointer-events-none fixed left-[6vw] top-[22vh] z-0 hidden h-36 w-36 rounded-[42%] bg-[#ff2f8e]/25 blur-xl lg:block" style={{ y: floatY }} />
      <motion.div className="pointer-events-none fixed right-[7vw] top-[58vh] z-0 hidden h-44 w-44 rounded-full bg-[#00dcff]/20 blur-xl lg:block" style={{ y: floatReverseY }} />
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-5 mix-blend-difference md:px-10">
        <a href="#top" className="font-display text-xl font-black uppercase tracking-tight">
          Motion<span className="text-[#00dcff]">.VFX</span>
        </a>
        <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.28em] text-white md:flex">
          <a href="#showreel" className="transition hover:text-[#00dcff]">Showreel</a>
          <a href="#work" className="transition hover:text-[#00dcff]">Work</a>
          <a href="#about" className="transition hover:text-[#00dcff]">About</a>
          <a href="#contact" className="transition hover:text-[#00dcff]">Contact</a>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-28">
        <div className="grain" />
        <motion.div style={{ y: coverY, scale: coverScale }} className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center text-center">
          <motion.div
            className="mb-7 font-hand text-4xl text-[#fff7e8] md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            An Animation
          </motion.div>

          <div className="portfolio-lockup relative w-full">
            <Wing side="left" />
            <Wing side="right" />
            <motion.h1
              className="relative z-20 font-display text-[19vw] font-black leading-[0.73] tracking-[-0.08em] text-[#fff0cf] md:text-[10.7rem] lg:text-[13.5rem]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              Portfolio
            </motion.h1>
            <motion.div
              className="absolute left-1/2 top-[18%] z-30 -translate-x-1/2 font-display text-[15vw] font-black leading-none tracking-[-0.08em] text-[#00dcff] mix-blend-screen md:text-[8.8rem] lg:text-[11rem]"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              Portfo
            </motion.div>
          </div>

          <motion.div
            className="mt-8 flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <span className="font-hand text-4xl text-[#fff7e8] md:text-6xl">of Creative Editor</span>
            <p className="max-w-2xl text-balance text-lg font-semibold leading-relaxed text-white md:text-xl">
              An animation designer and video editor who turns raw ideas into energetic films, VFX moments, motion graphics, and scroll-stopping brand visuals.
            </p>
            <Doodle className="h-12 w-36 text-[#f7d39c]" />
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a href="#showreel" className="group inline-flex items-center gap-3 rounded-full bg-[#00dcff] px-7 py-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#fff0cf]">
                View showreel <Play className="h-4 w-4 fill-current transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#ff2f8e] hover:text-[#ff87be]">
                Hire for project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative -mt-10 overflow-hidden border-y border-white/10 bg-[#fff0cf] py-4 text-black">
        <div className="motion-marquee font-display text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
          <span>Animation</span><span>VFX</span><span>Editing</span><span>Motion Graphics</span><span>Color Grade</span><span>Compositing</span>
          <span>Animation</span><span>VFX</span><span>Editing</span><span>Motion Graphics</span><span>Color Grade</span><span>Compositing</span>
        </div>
      </section>

      <section id="showreel" className="relative px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#00dcff]">Main reel</p>
            <h2 className="font-display text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-8xl">
              First frame should feel hired.
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-relaxed text-white/70">
            Use this section for the client’s YouTube/Vimeo showreel. For now it works as a cinematic reel block with credits, categories, and a clear play action.
          </p>
        </div>

        <motion.div
          className="reel-card mx-auto mt-14 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-black"
          style={{ y: reelY, rotate: reelRotate }}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-video min-h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,#ff2f8e_0,transparent_26%),radial-gradient(circle_at_82%_70%,#00dcff_0,transparent_28%),linear-gradient(135deg,#160b0d,#111_48%,#2a081b)]" />
            <div className="motion-video-loop absolute inset-0">
              <span className="loop-shape loop-a" />
              <span className="loop-shape loop-b" />
              <span className="loop-shape loop-c" />
              <span className="loop-shape loop-d" />
              <span className="loop-frame loop-frame-one" />
              <span className="loop-frame loop-frame-two" />
              <span className="loop-scan" />
            </div>
            <div className="absolute inset-6 rounded-[1.5rem] border border-white/15" />
            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/35 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">Animation portfolio 2024</div>
            <div className="absolute bottom-8 left-8 right-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h3 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-8xl">Showreel</h3>
                <p className="mt-4 max-w-xl text-white/70">Editing, animation, compositing, title design, transitions, and color finishing.</p>
              </div>
              <button className="group flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#fff0cf] text-black transition hover:scale-105 hover:bg-[#00dcff]" aria-label="Play showreel">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="work" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 border-y border-white/10 py-8 md:flex-row md:items-center">
            <h2 className="font-display text-6xl font-black uppercase leading-none tracking-[-0.06em] md:text-9xl">Selected<br />Frames</h2>
            <p className="max-w-md text-lg leading-relaxed text-white/65">Main portfolio pieces can go here. Each card is made to feel like a Behance project preview: visual first, title second, service tags last.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {works.map((work, index) => (
              <motion.article
                key={work.title}
                className="project-card group overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717]"
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <div className={`relative min-h-[360px] overflow-hidden bg-gradient-to-br ${work.gradient}`}>
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay pattern" />
                  <div className="absolute -left-12 top-12 h-52 w-72 rotate-[-18deg] rounded-[45%] bg-[#111]/80 blur-[1px] transition duration-700 group-hover:rotate-[-8deg]" />
                  <div className="absolute right-8 top-8 font-hand text-6xl text-white/90">{String(index + 1).padStart(2, "0")}</div>
                  <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/20 bg-black/35 p-5 backdrop-blur-md">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#fff0cf]">{work.type} / {work.year}</p>
                    <h3 className="mt-3 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white">{work.title}</h3>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <p className="text-white/65">{work.tone}</p>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-[#00dcff] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-[#fff0cf] p-7 text-black md:p-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-hand text-5xl text-[#ff2f8e] md:text-7xl">About the artist</p>
            <h2 className="mt-6 font-display text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-8xl">Creative cuts with animated soul.</h2>
          </div>
          <div className="space-y-7 text-lg font-semibold leading-relaxed text-black/75">
            <p>
              This portfolio is made for an editor who does more than join clips. It presents them as a visual storyteller: someone who can shape rhythm, emotion, illustration, VFX, and branded motion into one polished final film.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-black p-5 text-[#fff0cf]"><strong className="block font-display text-4xl">48+</strong><span className="font-mono text-xs uppercase tracking-[0.2em]">Edits</span></div>
              <div className="rounded-3xl bg-[#ff2f8e] p-5 text-white"><strong className="block font-display text-4xl">12</strong><span className="font-mono text-xs uppercase tracking-[0.2em]">Brands</span></div>
              <div className="rounded-3xl bg-[#00dcff] p-5 text-black"><strong className="block font-display text-4xl">4K</strong><span className="font-mono text-xs uppercase tracking-[0.2em]">Delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-8">
            <h2 className="font-display text-6xl font-black uppercase leading-none tracking-[-0.06em] md:text-9xl">Process<br />& Services</h2>
            <Wand2 className="hidden h-16 w-16 text-[#ff2f8e] md:block" />
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {capabilities.map(([num, title, body]) => (
              <motion.div
                key={title}
                className="grid gap-5 py-8 md:grid-cols-[120px_0.8fr_1.2fr] md:items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 12 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <span className="font-hand text-5xl text-[#f7d39c]">{num}</span>
                <h3 className="font-display text-3xl font-black uppercase tracking-[-0.04em] md:text-5xl">{title}</h3>
                <p className="text-lg leading-relaxed text-white/65">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 pt-24 md:px-10">
        <div className="relative mx-auto overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] p-8 text-center md:p-16">
          <div className="absolute left-[-8%] top-[10%] h-64 w-64 rounded-full bg-[#ff2f8e] blur-[90px]" />
          <div className="absolute bottom-[-8%] right-[-8%] h-72 w-72 rounded-full bg-[#00dcff] blur-[95px]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <Sparkles className="mx-auto mb-7 h-10 w-10 text-[#fff0cf]" />
            <h2 className="font-display text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-9xl">Let’s animate your next idea.</h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">Replace this with the client’s real WhatsApp, email, Instagram, Vimeo, and Behance links. The portfolio is ready for real showreel and project content.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:hello@motionvfx.com" className="inline-flex items-center gap-3 rounded-full bg-[#fff0cf] px-8 py-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#00dcff]"><Mail className="h-4 w-4" /> hello@motionvfx.com</a>
              <a href="#showreel" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#ff2f8e]"><Clapperboard className="h-4 w-4" /> Watch reel</a>
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 py-8 font-mono text-xs uppercase tracking-[0.22em] text-white/45 md:flex-row">
          <span>Motion.VFX Portfolio 2024</span>
          <span>Behance / Vimeo / Instagram / WhatsApp</span>
        </footer>
      </section>
    </main>
  );
}
