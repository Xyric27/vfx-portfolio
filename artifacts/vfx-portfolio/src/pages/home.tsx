// ─── WORK CARD WITH LOCAL VIDEO - SUPER FAST! ───
function WorkCard({ work, index }: { work: typeof works[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // ✅ Mouse enter → Play video
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  // ✅ Mouse leave → Pause & Reset
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      className="project-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717]"
      initial={{ opacity: 0, y: 55 }} 
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -14, rotate: index % 2 === 0 ? -1.2 : 1.2, scale: 1.015 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.08 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container */}
      <div className={`relative min-h-[320px] overflow-hidden bg-gradient-to-br ${work.gradient}`}>
        
        {/* ✅ LOCAL VIDEO - Instant Loading! */}
        <video
          ref={videoRef}
          src={work.videoUrl}  // ← /videos/filename.mp4
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="metadata"  // ← Only load metadata, not full video
        />

        {/* Background when not hovering */}
        {!isHovered && (
          <>
            <div className="absolute inset-0 opacity-40 mix-blend-overlay pattern" />
            <div className="absolute -left-12 top-12 h-52 w-72 rotate-[-18deg] rounded-[45%] bg-[#111]/80 blur-[1px]" />
            
            {/* Play Button Hint */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-7 w-7 fill-current text-white ml-1" />
              </motion.div>
            </div>

            {/* Hover Instruction */}
            <p className="absolute top-4 left-4 font-mono text-xs text-white/60 z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00dcff] animate-pulse"></span>
              Hover to preview
            </p>
          </>
        )}

        {/* Dark overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-[1]" />
        )}

        {/* Number Badge */}
        <div className="absolute right-8 top-8 font-hand text-5xl text-white/90 z-10">
          {String(index + 1).padStart(2, "0")}
        </div>
        
        {/* Info Card */}
        <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/20 bg-black/35 p-5 backdrop-blur-md z-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#fff0cf]">
            {work.type} / {work.year}
          </p>
          <h3 className="mt-3 font-display text-2xl font-black uppercase leading-none tracking-[-0.04em] text-white md:text-3xl">
            {work.title}
          </h3>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="flex items-start justify-between gap-4 p-6">
        <p className="text-sm text-white/65">{work.tone}</p>
        <ArrowUpRight className="h-6 w-6 shrink-0 text-[#00dcff] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.article>
  );
}
