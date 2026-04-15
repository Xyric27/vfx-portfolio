import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Film, MonitorPlay, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 mix-blend-difference flex justify-between items-center">
        <div className="font-mono text-xl font-bold tracking-tighter uppercase">
          Kaelen<span className="text-primary">.VFX</span>
        </div>
        <div className="flex items-center gap-8 font-mono text-sm uppercase tracking-widest hidden md:flex">
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
        
        <motion.div 
          className="z-10 text-center px-4 max-w-5xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono text-primary uppercase tracking-[0.3em] mb-6 text-sm md:text-base">
            Freelance Animation & Post-Production
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter mb-8">
            Visual <br />
            <span className="text-stroke">Impact.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Crafting high-end visual experiences for brands, artists, and creators. 
            From subtle motion graphics to heavy VFX composites.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-14 px-8 text-lg font-mono uppercase tracking-wider bg-primary text-black hover:bg-white transition-colors rounded-none w-full sm:w-auto glitch-hover group">
              View Showreel
              <Play className="ml-3 h-5 w-5 fill-current group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-mono uppercase tracking-wider border-white/20 hover:bg-white/5 rounded-none w-full sm:w-auto">
              Get in touch
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Showreel Highlight */}
      <section className="py-24 px-4 md:px-12 bg-black relative z-10">
        <motion.div 
          style={{ y }}
          className="max-w-7xl mx-auto"
        >
          <div className="aspect-video bg-zinc-900 border border-white/5 relative group cursor-pointer overflow-hidden">
            {/* Placeholder for actual video reel */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-black/20">
                <Play className="h-8 w-8 text-white ml-2" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold uppercase tracking-tight">Director's Cut 2024</h3>
              <p className="font-mono text-primary mt-2 uppercase tracking-widest text-sm">2:45 / Select Works</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Selected Works */}
      <section id="work" className="py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Selected <span className="text-primary">Works</span></h2>
            </div>
            <Button variant="link" className="hidden md:flex font-mono uppercase text-muted-foreground hover:text-white">
              View Archive <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Neon Genesis", category: "VFX / Compositing", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop" },
              { title: "Chrome Heart", category: "3D Animation", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop", offset: true },
              { title: "Urban Decay", category: "Color Grading", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop" },
              { title: "Void Walker", category: "Motion Graphics", image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2874&auto=format&fit=crop", offset: true },
            ].map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group cursor-pointer ${work.offset ? 'md:mt-24' : ''}`}
              >
                <div className="overflow-hidden aspect-[4/5] bg-zinc-900 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{work.title}</h3>
                    <p className="font-mono text-muted-foreground mt-2 text-sm uppercase tracking-wider">{work.category}</p>
                  </div>
                  <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">Capabilities</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Specialized in high-end post-production. From raw footage to final delivery, ensuring every frame serves the narrative.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="group">
                <Film className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Video Editing</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Pacing, narrative structure, and dynamic cuts for commercials, music videos, and social campaigns.</p>
              </div>
              <div className="group">
                <Sparkles className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Visual Effects</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Compositing, rotoscoping, chroma keying, and seamless integration of CGI elements into live-action footage.</p>
              </div>
              <div className="group">
                <MonitorPlay className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Motion Graphics</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Kinetic typography, 2D/3D animation, HUD design, and branded motion systems.</p>
              </div>
              <div className="group">
                <div className="h-8 w-8 text-primary mb-6 font-bold text-2xl">C/G</div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Color Grading</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Cinematic color correction, look development, and matching shots across different camera sensors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-32 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-background to-background z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to <br />
            <span className="text-primary">Collaborate?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light">
            Currently accepting bookings for Q3 2024. Let's make something unforgettable.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl font-mono uppercase tracking-widest bg-white text-black hover:bg-primary transition-colors rounded-none">
            Start a project
          </Button>
          
          <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <div>© {new Date().getFullYear()} Kaelen VFX</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Vimeo</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
