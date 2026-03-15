import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image (Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all duration-500" />
          <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Shape */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 w-16 h-16 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-lg -z-10"
          />
        </motion.div>

        {/* About Text (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            About Me
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            I <span className="text-accent">Design & Develop</span> Modern Websites
          </h1>
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
            I am an entry-level Python Developer with experience in automation scripting and Generative AI workflows. 
            I have worked on large-scale multilingual automation projects involving more than 9000 web pages.
            Currently I am working with Bajaj Finserv under the Generative AI team where I manage automation dashboards,
            monitor multilingual page generation pipelines, and perform quality assurance checks.
            I enjoy solving real-world problems using Python, automation tools, and APIs. 
            I am constantly learning new technologies in web development, backend systems, and artificial intelligence.
            
            {/* I'm a passionate frontend/full-stack developer dedicated to building high-performance, 
            visually stunning, and user-centric digital experiences. With a focus on clean code 
            and innovative design, I help brands stand out in the digital landscape. */}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-surface hover:bg-surface/80 text-text-primary font-semibold rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
