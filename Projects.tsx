import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory and secure payments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Leveraging Gemini API to create high-quality blog posts and social media content.',
    tags: ['Next.js', 'Gemini AI', 'Tailwind', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'Fitness Tracker App',
    description: 'Mobile-first dashboard for tracking workouts, nutrition, and health metrics.',
    tags: ['React Native', 'Firebase', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-accent">Works</span>
            </h2>
            <p className="text-text-secondary max-w-md">
              A collection of projects that showcase my technical skills and creative approach.
            </p>
          </div>
          <a href="#" className="text-accent font-medium hover:underline flex items-center gap-2">
            View all projects <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} className="p-3 bg-accent rounded-full text-white hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-accent/80 bg-accent/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
                <button className="w-full py-3 bg-white/5 hover:bg-accent hover:text-white text-text-primary font-semibold rounded-xl border border-white/10 transition-all duration-300">
                  Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
