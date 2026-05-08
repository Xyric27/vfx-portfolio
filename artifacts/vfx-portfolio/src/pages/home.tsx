import { AnimatePresence, motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronDown, Clapperboard, ExternalLink, Film, FolderOpen, Globe, Instagram, Mail, MessageCircle, Play, Quote, Sparkles, Stamp, Wand2, Youtube, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CLIENT_PORTAL_URL = "https://xyric27.github.io/cutstudio-pro";
const WHATSAPP_URL = "https://wa.me/919034879858";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/meeeet_27/",
  behance: "https://www.behance.net/meetsharma14",
  youtube: "https://youtube.com/@meeeet_27",
  vimeo: "https://vimeo.com/meeeet27",
};

const statsTicker = ["48+ Projects Delivered", "12 Brand Clients", "3+ Years Experience", "100% Delivery Rate"];

// ✅ WORKS ARRAY - CLEAN SYNTAX!
const works = [
  {
    title: "Brand Film Burst",
    type: "2D Animation / Edit",
    year: "2024",
    tone: "Launch visuals with playful transitions, punchy timing, and kinetic typography.",
    gradient: "from-[#ff2f8e] via-[#ff6b2b] to-[#ffd38a]",
    embedUrl: "https://jumpshare.com/embed/RAEhsNiIiof866uriT9g"
  },
  {
    title: "Music Video VFX",
    type: "Compositing / Grade",
    year: "2024",
    tone: "Rotoscope layers, glowing trails, atmosphere, and frame-by-frame polish.",
    gradient: "from-[#00d7ff] via-[#7a4cff] to-[#ff2f8e]",
    embedUrl: "https://jumpshare.com/embed/RAEhsNiIiof866uriT9g"
  },
  {
    title: "Social Ad Pack",
    type: "Motion Graphics",
    year: "2023",
    tone: "Fast vertical edits for reels, product reveals, titles, and callouts.",
    gradient: "from-[#ffe6a8] via-[#ff8a00] to-[#ff006a]",
    embedUrl: "https://jumpshare.com/embed/RAEhsNiIiof866uriT9g"
  },
  {
    title: "Character Loop",
    type: "Animation Design",
    year: "2023",
    tone: "Expressive loops built for campaigns, profile films, and explainer cuts.",
    gradient: "from-[#f8e2b0] via-[#00e5ff] to-[#ff00aa]",
    embedUrl: "https://jumpshare.com/embed/RAEhsNiIiof866uriT9g"
  }
];

// ... rest of the code remains same (clients, capabilities, tools, etc.)

const clients = [
  { 
    name: "Dev Agarwal", 
    role: "Content Creator", 
    stats: "38 projects", 
    avatar: "from-[#ff2f8e] via-[#ff7a1a] to-[#fff0cf]", 
    initials: "DA", 
    videoUrl: "https://jumpshare.com/embed/RAEhsNiIiof866uriT9g",
    projects: ["Neon Intro", "Lyric Visualizer", "Stage Promo"] 
  },
  { 
    name: "Priya Mathur", 
    role: "Brand Director", 
    stats: "24 projects", 
    avatar: "from-[#00dcff] via-[#7a4cff] to-[#ff2f8e]", 
    initials: "PM", 
    videoUrl: "https://jumpshare.com/embed/RAEhsNiIiof866uriT9g",
    projects: ["Brand Film", "Social Pack", "Explainer"] 
  },
  { 
    name: "Kunal Desai", 
    role: "Tech Founder", 
    stats: "15 projects", 
    avatar: "from-[#ffe6a8] via-[#ff8a00] to-[#ff006a]", 
    initials: "KD", 
    videoUrl: "https://jumpshare.com/embed/RAEhsNiIiof866uriT9g",
    projects: ["Tech Demo", "Tutorial Series", "Product Launch"] 
  }
];

const capabilities = [
  ["01", "Animation Design", "Frame-by-frame inspired movement, character moments, logo animation."],
  ["02", "Video Editing", "Story-led pacing, music sync, social cuts, commercial edits."],
  ["03", "VFX & Compositing", "Rotoscope, clean-up, keying, glow passes, atmosphere."],
  ["04", "Motion Graphics", "Kinetic type, lower thirds, explainer graphics, brand systems."]
];

const tools = [
  { name: "After Effects", icon: "Ae", color: "#9999FF", level: 97 },
  { name: "Premiere Pro", icon: "Pr", color: "#9999FF", level: 94 },
  { name: "Photoshop", icon: "Ps", color: "#31A8FF", level: 91 },
  { name: "Illustrator", icon: "Ai", color: "#FF9A00", level: 85 }
];

const expertiseCards = [
  { num: "01", title: "Storytelling Through Motion", body: "Every edit has a heartbeat — a rhythm that decides how the viewer feels.", accent: "#00dcff", tag: "Pacing & Feel" },
  { num: "02", title: "VFX That Blend, Not Break", body: "Rotoscope, colour grade, glow passes, clean-up, compositing that looks native.", accent: "#ff2f8e", tag: "Visual Effects" },
  { num: "03", title: "Brand-First Motion Graphics", body: "Titles, lower thirds, kinetic type, HUDs — all built on-brand while premium.", accent: "#ff7a1a", tag: "Motion Design" },
  { num: "04", title: "Social-Ready Delivery", body: "Every format at 4K with proper captions and platform-optimised cuts.", accent: "#f7d39c", tag: "Multi-Format" }
];

const processSteps = [
  { num: "01", title: "Brief", body: "Share your idea, references, deadline, and vibe.", color: "#00dcff", emoji: "📋" },
  { num: "02", title: "Concept", body: "Meet maps out structure, style frames, and timeline.", color: "#ff2f8e", emoji: "🎨" },
  { num: "03", title: "Build", body: "Animation, editing, VFX, sound sync — built in stages.", color: "#ff7a1a", emoji: "⚙️" },
  { num: "04", title: "Deliver", body: "Final export + project files if requested.", color: "#f7d39c", emoji: "🚀" }
];

const faqs = [
  ["How long does a project take?", "Quick edits: 3–5 days. Full production: 7–10 days."],
  ["How many revisions?", "Standard: 2 rounds. Premium: 4+ rounds."],
  ["What format?", "MP4 (H.264) by default. Also ProRes, MOV available."],
  ["Project files?", "Included in premium packages."],
  ["How to share footage?", "Client Portal, WeTransfer, Google Drive, Frame.io/JumpShare."],
  ["Not happy?", "Revision rounds exist for this purpose."],
  ["International?", "Yes! PayPal, Wise, Razorpay accepted."]
];

const testimonials = [
  { name: "Aarav Shah", role: "Music Label — Aarav Studios", quote: "Delivered 7 projects, every single one better than briefed.", color: "#00dcff", initials: "AS", rating: 5 },
  { name: "Priya Mathur", role: "Founder — Nova Skin", quote: "2M views in 48 hours. Made brand look premium.", color: "#ff2f8e", initials: "PM", rating: 5 },
  { name: "Kunal Desai", role: "Tech Creator — Flux Motion", quote: "Best performing video after 18 months.", color: "#ff7a1a", initials: "KD", rating: 5 },
  { name: "Sneha Pillai", role: "Brand Manager — Vibe Co.", quote: "Turnaround in 4 days, zero revisions needed.", color: "#f7d39c", initials: "SP", rating: 5 }
];

const stats = [
  { value: 48, suffix: "+", label: "Projects Delivered", color: "#fff0cf" },
  { value: 12, suffix: "", label: "Brand Clients", color: "#ff2f8e" },
  { value: 5, suffix: "+", label: "Years Experience", color: "#00dcff" },
  { value: 100, suffix: "%", label: "Delivery Rate", color: "#ff7a1a" }
];

const funnyTaglines = [
  "Coffee → Frames → Render → Repeat ☕",
  "Still rendering... pls hold 🙏",
  "My PC fans go BRRRRR 💨",
  "Frame 1 of 9,999,999",
  "VFX artist by day, render slave by night 😭",
  "I speak fluent timeline 🎞️",
  "Motion graphics and mild panic 🔥",
  "Ctrl+Z is my love language"
];

const heroStickers = [
  { emoji: "⚡", cx: "12%", cy: "22%", delay: 0, rot: -18 },
  { emoji: "🎞️", cx: "88%", cy: "18%", delay: 0.3, rot: 12 },
  { emoji: "✨", cx: "7%", cy: "74%", delay: 0.6, rot: 8 },
  { emoji: "🎨", cx: "92%", cy: "68%", delay: 0.9, rot: -22 },
  { emoji: "🔥", cx: "50%", cy: "8%", delay: 1.1, rot: 5 }
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const fps = 60;
    const steps = (duration / 1000) * fps;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); } else setCount(Math.floor(start));
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 0); return () => clearTimeout(t); }, [onDone]);
  return (
    <motion.div className="gif-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <img src="/intro.gif" alt="intro" className="gif-intro" draggable={false} />
    </motion.div>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map(([q, a], i) => (
        <motion.div key={i} initial={false}>
          <button className="flex w-full items-center justify-between gap-6 py-7 text-left" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-display text-lg font-black uppercase tracking-[-0.03em] text-white md:text-xl">{q}</span>
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
              <ChevronDown className="h-6 w-6 text-[#00dcff]" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32 }} className="overflow-hidden">
                <p className="pb-7 text-base leading-relaxed text-white/60">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

function Wing({ side, mouseX, mouseY }: { side: "left" | "right"; mouseX: number; mouseY: number }) {
  const flip = side === "right" ? "scale-x(-1)" : "";
  const dx = side === "left" ? -mouseX * 18 : mouseX * 18;
  const dy = -mouseY * 12;
  return (
    <motion.div className={`wing wing-${side} ${flip}`} animate={{ x: dx, y: dy }} transition={{ type: "spring", stiffness: 60, damping: 18 }}>
      <span className="wing-panel panel-one" /><span className="wing-panel panel-two" /><span className="wing-panel panel-three" />
      <span className="wing-orbit orbit-one" /><span className="wing-orbit orbit-two" />
      <span className="wing-line line-one" /><span className="wing-line line-two" />
    </motion.div>
  );
}

function Doodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 82" fill="none" aria-hidden="true">
      <motion.path d="M7 51C30 30 42 74 67 47C81 31 89 9 103 29C117 49 121 76 143 55C159 40 166 8 181 27C194 44 191 69 213 47" stroke="currentColor" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
      <circle cx="83" cy="13" r="5" fill="currentColor" /><circle cx="171" cy="15" r="5" fill="currentColor" />
    </svg>
  );
}

function AnimatedHand() {
  return (<div className="animated-hand" aria-label="Animated hand"><span className="hand-palm" /><span className="hand-finger finger-one" /><span className="hand-finger finger-two" /><span className="hand-finger finger-three" /><span className="hand-thumb" /></div>);
}

function ConfettiBurst({ x, y, active }: { x: number; y: number; active: boolean }) {
  const colors = ["#ff2f8e", "#00dcff", "#fff0cf", "#ff7a1a", "#7a4cff", "#fff"];
  return (
    <AnimatePresence>
      {active && (
        <div className="pointer-events-none fixed inset-0 z-[999]" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * 360;
            const dist = 80 + Math.random() * 100;
            return (<motion.span key={i} className="confetti-piece" style={{ left: x, top: y, background: colors[i % 6], rotate: angle, width: 8 + (i % 4) * 3, height: 8 + (i % 3) * 2, borderRadius: i % 2 === 0 ? "50%" : "2px" }} initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: Math.cos(angle * Math.PI / 180) * dist, y: Math.sin(angle * Math.PI / 180) * dist - 60, opacity: 0, scale: 0.4, rotate: angle + 360 }} exit={{}} transition={{ duration: 0.7 + Math.random() * 0.3 }} />);
          })}
        </div>
      )}
    </AnimatePresence>
  );
}

function HiredStamp({ show }: { show: boolean }) {
  return (<AnimatePresence>{show && (<motion.div className="hired-stamp" initial={{ scale: 3.5, rotate: -24, opacity: 0 }} animate={{ scale: 1, rotate: -18, opacity: 1 }} exit={{ scale: 0.6, opacity: 0, y: 40 }} transition={{ type: "spring", stiffness: 500 }}>HIRED!</motion.div>)}</AnimatePresence>);
}

// ✅ WORK CARD - IFRAME VERSION
function WorkCard({ work, index }: { work: typeof works[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="project-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717]"
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -14, rotate: index % 2 === 0 ? -1.2 : 1.2, scale: 1.015 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container with 16:9 aspect ratio */}
      <div 
        className={`relative overflow-hidden bg-gradient-to-br ${work.gradient}`}
        style={{ paddingBottom: "56.25%" }}
      >
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay pattern" />
          <div className="absolute -left-12 top-12 h-52 w-72 rotate-[-18deg] rounded-[45%] bg-[#111]/80 blur-[1px]" />
          
          {/* Play Button (visible when not hovering) */}
          {!isHovered && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-7 w-7 fill-current text-white ml-1" />
              </motion.div>
              <p className="font-mono text-xs text-white/60 mt-2">Hover to preview</p>
            </div>
          )}

          {/* Iframe (visible on hover) */}
          {isHovered && (
            <iframe
              src={work.embedUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title={work.title}
              loading="lazy"
            />
          )}

          {/* Dark overlay on hover */}
          {isHovered && <div className="absolute inset-0 bg-black/30 pointer-events-none z-[5]" />}

          {/* Number Badge */}
          <div className="absolute right-4 top-4 font-hand text-4xl md:text-5xl text-white/90 z-20">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Info Card */}
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/40 p-4 backdrop-blur-md z-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#fff0cf]">{work.type} / {work.year}</p>
            <h3 className="mt-1 font-display text-lg md:text-2xl font-black uppercase leading-none tracking-[-0.04em] text-white">{work.title}</h3>
          </div>
        </div>

        {/* Card Footer - MOVED OUTSIDE absolute container */}
        <div className="flex items-start justify-between gap-4 p-4 md:p-6 relative z-20">
          <p className="text-xs md:text-sm text-white/65">{work.tone}</p>
          <ArrowUpRight className="h-5 w-5 md:h-6 shrink-0 text-[#00dcff]" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const coverY = useTransform(scrollYProgress, [0, 0.35], [0, -160]);
  const coverScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);
  const scrollBarScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  const reelY = useTransform(scrollYProgress, [0.45, 0.65], [100, -100]);
  const reelRotate = useTransform(scrollYProgress, [0.45, 0.65], [8, -4]);

  const [taglineIndex, setTaglineIndex] = useState(0);
  const [mouseNorm, setMouseNorm] = useState({ x: 0, y: 0 });
  const [stampVisible, setStampVisible] = useState(false);
  const [confetti, setConfetti] = useState<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const stampTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const confettiTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { const id = setInterval(() => setTaglineIndex((i) => (i + 1) % funnyTaglines.length), 2800); return () => clearInterval(id); }, []);
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => { setMouseNorm({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 }); };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleStamp = () => { setStampVisible(true); if (stampTimeout.current) clearTimeout(stampTimeout.current); stampTimeout.current = setTimeout(() => setStampVisible(false), 1800); };
  const handleConfetti = (e: React.MouseEvent) => { const rect = (e.currentTarget as HTMLElement).getBoundingClientRect(); setConfetti({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, active: true }); if (confettiTimeout.current) clearTimeout(confettiTimeout.current); confettiTimeout.current = setTimeout(() => setConfetti((c) => ({ ...c, active: false })), 1200); };

  return (
    <main className="min-h-screen overflow-hidden bg-[#111] text-[#fff7e8] selection:bg-[#00dcff] selection:text-black">
      <AnimatePresence>{!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}</AnimatePresence>
      <ConfettiBurst x={confetti.x} y={confetti.y} active={confetti.active} />
      <HiredStamp show={stampVisible} />

      <motion.div className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[#ff2f8e] via-[#fff0cf] to-[#00dcff]" style={{ scaleX: scrollBarScale }} />

      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-4 backdrop-blur-md bg-black/40 border-b border-white/5 md:px-10">
        <a href="#top" className="font-display text-lg font-black uppercase tracking-tight text-[#fff7e8]">Motion<span className="text-[#00dcff]">.VFX</span></a>
        <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.28em] text-white/70 md:flex">
          <a href="#expertise" className="transition hover:text-[#00dcff]">Skills</a><a href="#tools" className="transition hover:text-[#00dcff]">Tools</a><a href="#clients" className="transition hover:text-[#00dcff]">Clients</a><a href="#work" className="transition hover:text-[#00dcff]">Work</a><a href="#contact" className="transition hover:text-[#00dcff]">Contact</a>
        </div>
        <a href={CLIENT_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#00dcff] px-5 py-2.5 font-mono text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#fff0cf] hover:scale-105"><FolderOpen className="h-3.5 w-3.5" /> Client Portal</a>
      </nav>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 md:py-28">
        <div className="grain" />
        {heroStickers.map((s) => (
          <motion.span key={s.emoji} className="hero-sticker" style={{ left: s.cx, top: s.cy, rotate: s.rot }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + s.delay, type: "spring", stiffness: 280, damping: 16 }} whileHover={{ scale: 1.5 }}>{s.emoji}</motion.span>
        ))}
        <motion.div style={{ y: coverY, scale: coverScale }} className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center text-center">
          <motion.div className="hero-script mb-4 font-hand text-3xl text-[#fff7e8] md:text-5xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>An Animation</motion.div>
          <div className="portfolio-lockup relative w-full">
            <Wing side="left" mouseX={mouseNorm.x} mouseY={mouseNorm.y} /><Wing side="right" mouseX={mouseNorm.x} mouseY={mouseNorm.y} />
            <motion.h1 className="relative z-20 font-display text-[16vw] font-black leading-[0.73] tracking-[-0.08em] text-[#fff0cf] md:text-[9rem] lg:text-[11rem]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} whileHover={{ scale: 1.03 }}>Portfolio</motion.h1>
            <motion.div className="absolute left-1/2 top-[18%] z-30 -translate-x-1/2 font-display text-[13vw] font-black leading-none tracking-[-0.08em] text-[#00dcff] mix-blend-screen md:text-[7.5rem] lg:text-[9.5rem]" initial={{ opacity: 0, x: -80 }} animate={{ opacity: 0.9, x: 0 }} transition={{ duration: 1, delay: 0.25 }}>Portfo</motion.div>
          </div>
          <motion.div className="mt-2 flex flex-col items-center gap-4" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
            <span className="font-hand text-xl text-[#fff7e8]/80 md:text-3xl">of</span>
            <span className="hero-name font-hand text-3xl text-[#fff7e8] md:text-5xl">Meet</span>
            <AnimatedHand /><Doodle className="h-10 w-32 text-[#f7d39c]" />
            <div className="tagline-box">
              <AnimatePresence mode="wait">
                <motion.p key={taglineIndex} className="font-mono text-xs uppercase tracking-[0.22em] text-[#fff0cf]/90 md:text-sm" initial={{ opacity: 0, y: 14, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -14, filter: "blur(4px)" }} transition={{ duration: 0.42 }}>{funnyTaglines[taglineIndex]}</motion.p>
              </AnimatePresence>
            </div>
            <p className="max-w-3xl text-balance text-base font-semibold leading-relaxed text-white md:text-lg">An <span className="text-[#f7d39c]">Animation Designer & VFX Editor</span> who builds cinematic films, motion graphics, and scroll-stopping brand visuals.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a href="#showreel" className="group inline-flex items-center gap-3 rounded-full bg-[#00dcff] px-6 py-3.5 font-mono text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#fff0cf]" onClick={handleConfetti}>View showreel <Play className="h-4 w-4 fill-current transition group-hover:translate-x-1" /></a>
              <button onClick={handleStamp} className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-mono text-xs font-black uppercase tracking-[0.18em] text-white transition hover:border-[#ff2f8e] hover:text-[#ff87be] active:scale-95"><Stamp className="h-4 w-4" /> Hire me!</button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="relative px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#ff2f8e]">What makes the difference</p><h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl lg:text-7xl">What I<br />Do Best</h2></div>
            <p className="max-w-md text-base leading-relaxed text-white/60">Four things that separate a good editor from great.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {expertiseCards.map((card, i) => (
              <motion.div key={card.num} className="expertise-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717] p-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, scale: 1.015 }} viewport={{ once: true, margin: "-60px" }} transition={{ type: "spring", stiffness: 200, damping: 22, delay: i * 0.07 }}>
                <div className="expertise-card-bg" style={{ background: `radial-gradient(circle at 80% 20%, ${card.accent}22, transparent 55%)` }} />
                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between"><span className="font-hand text-4xl" style={{ color: card.accent }}>{card.num}</span><span className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em]" style={{ borderColor: `${card.accent}55`, color: card.accent }}>{card.tag}</span></div>
                  <h3 className="mb-4 font-display text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-white md:text-3xl">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="relative overflow-hidden px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#00dcff]">The arsenal</p><h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl lg:text-7xl">Tools &<br />Software</h2></div>
            <p className="max-w-md text-base leading-relaxed text-white/60">Industry-standard tools.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <motion.div key={tool.name} className="tool-bar-card group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#171717] p-6" initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ y: -8, scale: 1.03 }} viewport={{ once: true, margin: "-40px" }} transition={{ type: "spring", stiffness: 220, damping: 20, delay: i * 0.05 }}>
                <div className="mb-5 flex items-center justify-between"><div className="tool-icon" style={{ background: `${tool.color}22`, borderColor: `${tool.color}44`, color: tool.color }}>{tool.icon}</div><span className="font-mono text-xs font-bold" style={{ color: tool.color }}>{tool.level}%</span></div>
                <p className="mb-4 font-display text-base font-black uppercase tracking-[-0.03em] text-white">{tool.name}</p>
                <div className="tool-bar-track"><motion.div className="tool-bar-fill" style={{ background: `linear-gradient(90deg, ${tool.color}99, ${tool.color})` }} initial={{ width: 0 }} whileInView={{ width: `${tool.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 + i * 0.06 }} /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT PORTAL */}
      <section id="portal" className="px-5 py-10 md:px-10">
        <motion.div className="client-portal-banner mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#00dcff]/30 bg-[#0a0f14]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="absolute inset-0 pointer-events-none"><div className="absolute left-[-5%] top-[-10%] h-72 w-72 rounded-full bg-[#00dcff]/15 blur-[80px]" /><div className="absolute right-[-5%] bottom-[-10%] h-72 w-72 rounded-full bg-[#ff2f8e]/12 blur-[80px]" /></div>
          <div className="relative z-10 grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12 lg:p-16">
            <div>
              <div className="mb-3 flex items-center gap-3"><span className="portal-live-dot" /><span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00dcff]">Client Panel — Open for projects</span></div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">Got a project?<br /><span className="text-[#00dcff]">Let's build it.</span></h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">Submit your brief through client portal. Response within 24 hours.</p>
              <ul className="mt-6 flex flex-wrap gap-3">{["Brief Submission", "File Handoff", "Revision Tracking", "Final Delivery"].map((item) => (<li key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/70">{item}</li>))}</ul>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <motion.a href={CLIENT_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="portal-btn" whileHover={{ scale: 1.06, rotate: -1 }} whileTap={{ scale: 0.95 }} onClick={handleConfetti}><FolderOpen className="h-5 w-5" /> Open Client Portal <ExternalLink className="h-4 w-4 opacity-70" /></motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="relative px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 border-y border-white/10 py-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#00dcff]">Client rooms</p>
              <h2 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl lg:text-8xl">Profiles<br />& Reels</h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/65">Hover each card to see client's video reel.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {clients.map((client, index) => (
              <motion.article key={client.name} className="client-card group relative min-h-[520px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#171717]" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -18, rotate: index === 1 ? 0 : index === 0 ? -1.2 : 1.2, scale: 1.02 }} viewport={{ once: true, margin: "-80px" }} transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.08 }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${client.avatar} opacity-20 transition duration-700 group-hover:opacity-45`} /><div className="client-card-glow" />
                <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-7">
                  <div><div className={`client-avatar bg-gradient-to-br ${client.avatar}`}><span>{client.initials}</span></div><div className="mt-7"><p className="font-mono text-xs uppercase tracking-[0.28em] text-[#00dcff]">{client.role}</p><h3 className="mt-3 font-display text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#fff0cf]">{client.name}</h3><p className="mt-4 inline-flex rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70">{client.stats}</p></div></div>
                  
                  {/* Video Preview Section */}
                  <div className="client-project-panel">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#fff0cf]">Portfolio reel</span>
                      <Film className="h-5 w-5 text-[#00dcff]" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black" style={{ paddingBottom: "56.25%", height: 0 }}>
                      <iframe 
                        src={client.videoUrl}
                        frameBorder="0"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        title={`${client.name} Reel`}
                      />
                    </div>
                  </div>

                  <div className="flex items-end justify-between border-t border-white/10 pt-5"><span className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">Click to play</span><ArrowUpRight className="h-6 w-6 text-[#ff2f8e] transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#fff0cf] py-4 text-black">
        <div className="motion-marquee font-display text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
          <span>Animation</span><span className="marquee-fun">Send Help 💀</span><span>VFX</span><span>Editing</span><span className="marquee-fun">5AM Renders 😵</span><span>Motion Graphics</span><span>Color Grade</span><span className="marquee-fun">Still Rendering...</span><span>Compositing</span><span className="marquee-fun">Ctrl+Z Everything 🔁</span>
          <span>Animation</span><span className="marquee-fun">Send Help 💀</span><span>VFX</span><span>Editing</span><span className="marquee-fun">5AM Renders 😵</span><span>Motion Graphics</span><span>Color Grade</span><span className="marquee-fun">Still Rendering...</span><span>Compositing</span><span className="marquee-fun">Ctrl+Z Everything 🔁</span>
          <span>Animation</span><span className="marquee-fun">Send Help 💀</span><span>VFX</span><span>Editing</span><span className="marquee-fun">5AM Renders 😵</span><span>Motion Graphics</span><span>Color Grade</span><span className="marquee-fun">Still Rendering...</span><span>Compositing</span><span className="marquee-fun">Ctrl+Z Everything 🔁</span>
        </div>
      </section>

      {/* SHOWREEL */}
      <section id="showreel" className="relative px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#00dcff]">Main reel</p>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-6xl lg:text-7xl">First frame should feel hired.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/70">Use this section for YouTube/Vimeo showreel embed.</p>
        </div>
        <motion.div className="reel-card mx-auto mt-14 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-black" style={{ y: reelY, rotate: reelRotate }} initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.8 }}>
          <div className="relative aspect-video min-h-[320px] bg-black">
            {/* Video Embed */}
            <iframe 
              id="js_video_iframe" 
              src="https://jumpshare.com/embed/RAEhsNiIiof866uriT9g" 
              frameBorder="0" 
              allowFullScreen
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%",
                borderRadius: "1rem"
              }}
              title="Portfolio Showreel"
            />
            
            {/* Info Overlay */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-8">
              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">Animation portfolio 2024</div>
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end h-full">
                <div className="mt-auto">
                  <h3 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.05em] md:text-6xl text-white drop-shadow-lg">Showreel</h3>
                  <p className="mt-4 max-w-xl text-base text-white/90 drop-shadow-lg">Editing, animation, compositing, transitions, and color finishing.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 border-y border-white/10 py-8 md:flex-row md:items-center">
            <h2 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl lg:text-8xl">Selected<br />Frames</h2>
            <p className="max-w-md text-base leading-relaxed text-white/65">💡 Hover any card below to preview video!</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">{works.map((work, index) => (<WorkCard key={work.title} work={work} index={index} />))}</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-[#fff0cf] p-7 text-black md:p-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div><p className="font-hand text-4xl text-[#ff2f8e] md:text-6xl">About the artist</p><h2 className="mt-6 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl lg:text-7xl">Creative cuts with animated soul.</h2></div>
          <div className="space-y-7 text-base font-semibold leading-relaxed text-black/75">
            <p>Meet turns raw ideas into energetic films, VFX moments, motion graphics, and scroll-stopping brand visuals — powered by creativity, caffeine, and questionable render times.</p>
            <div className="grid gap-4 sm:grid-cols-2">{stats.map((stat, i) => (
              <motion.div key={stat.label} whileHover={{ scale: 1.06, rotate: i % 2 === 0 ? -2 : 2 }} transition={{ type: "spring", stiffness: 300, damping: 14 }} className="rounded-3xl bg-black p-5" style={{ color: stat.color }}><strong className="block font-display text-3xl"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></strong><span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</span></motion.div>
            ))}</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-8">
            <h2 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl lg:text-8xl">Process<br />& Services</h2>
            <motion.div animate={{ rotate: [0, 15, -15, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2 }}><Wand2 className="hidden h-14 w-14 text-[#ff2f8e] md:block" /></motion.div>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">{capabilities.map(([num, title, body], i) => (
            <motion.div key={title} className="grid gap-5 py-8 md:grid-cols-[120px_0.8fr_1.2fr] md:items-center" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ x: 18, scale: 1.012 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 22, delay: i * 0.05 }}><span className="font-hand text-4xl text-[#f7d39c]">{num}</span><h3 className="font-display text-2xl font-black uppercase tracking-[-0.04em] md:text-4xl">{title}</h3><p className="text-base leading-relaxed text-white/65">{body}</p></motion.div>
          ))}</div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">Zero confusion</p><h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl lg:text-7xl">How It<br />Works</h2></div>
            <p className="max-w-md text-base leading-relaxed text-white/60">Four steps from idea to delivery.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div key={step.num} className="process-step-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717] p-7" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, scale: 1.03 }} viewport={{ once: true, margin: "-60px" }} transition={{ type: "spring", stiffness: 220, damping: 20, delay: i * 0.08 }}>
                <div className="process-step-glow" style={{ background: `radial-gradient(circle at 30% 30%, ${step.color}22, transparent 60%)` }} />
                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between"><span className="process-step-num font-display text-5xl font-black leading-none tracking-[-0.05em]" style={{ color: `${step.color}40` }}>{step.num}</span><span className="text-2xl">{step.emoji}</span></div>
                  <div className="mb-3 h-0.5 w-10 rounded-full" style={{ background: step.color }} />
                  <h3 className="mb-3 font-display text-2xl font-black uppercase tracking-[-0.04em] text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{step.body}</p>
                </div>
                {i < processSteps.length - 1 && <div className="absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center lg:flex"><ArrowUpRight className="h-4 w-4 rotate-45 text-white/20" /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#ff2f8e]">Don't take our word for it</p><h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl lg:text-7xl">What<br />Clients Say</h2></div>
            <p className="max-w-md text-base leading-relaxed text-white/60">Real words from real clients.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} className="testimonial-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717] p-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, scale: 1.015 }} viewport={{ once: true, margin: "-60px" }} transition={{ type: "spring", stiffness: 200, damping: 22, delay: i * 0.07 }}>
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full blur-[60px]" style={{ background: `${t.color}18` }} />
                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between"><Quote className="h-7 w-7" style={{ color: `${t.color}80` }} /><div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, s) => (<span key={s} className="text-sm text-[#f7d39c]">★</span>))}</div></div>
                  <p className="mb-8 text-lg font-semibold leading-relaxed text-white/85">"{t.quote}"</p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-black" style={{ background: `${t.color}25`, color: t.color }}>{t.initials}</div><div><p className="font-display text-base font-black uppercase tracking-[-0.03em] text-white">{t.name}</p><p className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">{t.role}</p></div></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#00dcff]">Before you ask</p><h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl lg:text-7xl">FAQs</h2></div>
            <p className="max-w-md text-base leading-relaxed text-white/60">Common questions answered.</p>
          </div>
          <FaqList />
        </div>
      </section>

      {/* STATS TICKER */}
      <div className="relative overflow-hidden border-y border-white/8 bg-[#0e0e0e] py-5">
        <div className="stats-ticker-track">{[...statsTicker, ...statsTicker].map((item, i) => (<span key={i} className="inline-flex items-center gap-4 px-8 font-display text-xl font-black uppercase tracking-[-0.03em] text-white/25 md:text-2xl">{item}<span className="h-1.5 w-1.5 rounded-full bg-[#00dcff]/60 shrink-0" /></span>))}</div>
      </div>

      {/* SOCIAL */}
      <section id="connect" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-10 rounded-[2.5rem] border border-white/10 bg-[#171717] px-8 py-14 text-center">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#ff2f8e]">Find Meet everywhere</p><h2 className="font-display text-4xl font-black uppercase leading-tight tracking-[-0.05em] md:text-6xl">Follow the<br />Work</h2><p className="mx-auto mt-5 max-w-lg text-sm text-white/55">Behind-the-scenes, reels, experiments across every platform.</p></div>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-link-pill" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}><Instagram className="h-4 w-4" /> Instagram</motion.a>
              <motion.a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="social-link-pill" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}><Youtube className="h-4 w-4" /> YouTube</motion.a>
              <motion.a href={SOCIAL_LINKS.behance} target="_blank" rel="noopener noreferrer" className="social-link-pill" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}><Globe className="h-4 w-4" /> Behance</motion.a>
              <motion.a href={SOCIAL_LINKS.vimeo} target="_blank" rel="noopener noreferrer" className="social-link-pill" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}><Film className="h-4 w-4" /> Vimeo</motion.a>
              <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="social-link-pill" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}><MessageCircle className="h-4 w-4" /> WhatsApp</motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 pb-10 pt-24 md:px-10">
        <div className="relative mx-auto overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] p-8 text-center md:p-16">
          <div className="absolute left-[-8%] top-[10%] h-64 w-64 rounded-full bg-[#ff2f8e] blur-[90px]" /><div className="absolute bottom-[-8%] right-[-8%] h-72 w-72 rounded-full bg-[#00dcff] blur-[95px]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <motion.div animate={{ rotate: [0, 20, -20, 10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3 }}><Sparkles className="mx-auto mb-7 h-9 w-9 text-[#fff0cf]" /></motion.div>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl lg:text-8xl">Let's animate your next idea.</h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">Replace with real contact links when ready.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a href="mailto:hello@motionvfx.com" className="inline-flex items-center gap-3 rounded-full bg-[#fff0cf] px-7 py-3.5 font-mono text-xs font-black uppercase tracking-[0.18em] text-black" whileHover={{ scale: 1.08, rotate: -2 }} whileTap={{ scale: 0.93 }} onClick={handleConfetti}><Mail className="h-4 w-4" /> hello@motionvfx.com</motion.a>
              <motion.a href={CLIENT_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-[#00dcff]/40 bg-[#00dcff]/10 px-7 py-3.5 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#00dcff]" whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.93 }}><FolderOpen className="h-5 w-5" /> Client Portal</motion.a>
              <motion.a href="#showreel" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 font-mono text-xs font-black uppercase tracking-[0.18em] text-white" whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.93 }}><Clapperboard className="h-4 w-4" /> Watch reel</motion.a>
            </div>
            <motion.div className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-white/40" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.4, repeat: Infinity }}><Zap className="h-3 w-3 text-[#00dcff]" /> Available for freelance projects</motion.div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 py-8 font-mono text-xs uppercase tracking-[0.22em] text-white/45 md:flex-row"><span>Motion.VFX Portfolio 2024 · Meet</span><span>Behance / Vimeo / Instagram / WhatsApp</span></footer>
      </section>

      {/* WHATSAPP FLOAT */}
      <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" initial={{ opacity: 0, scale: 0.6, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 3, type: "spring", stiffness: 280, damping: 18 }} whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.94 }}><MessageCircle className="h-4 w-4 fill-current" /> Chat on WhatsApp</motion.a>
    </main>
  );
}
