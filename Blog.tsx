import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Web Development with AI',
    excerpt: 'How generative AI is reshaping the way we build and maintain modern web applications.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: ' CSS v4',
    excerpt: 'Deep dive into the latest features and performance improvements in Tailwind CSS.',
    date: 'Sep 28, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Building Scalable React Apps',
    excerpt: 'Best practices for architecture and state management in large-scale React projects.',
    date: 'Aug 15, 2023',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Latest <span className="text-accent">Insights</span>
            </h2>
            <p className="text-text-secondary">Sharing my thoughts on technology and design.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded-lg text-xs font-medium text-text-primary">
                  Technology
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2 flex items-center gap-2 text-accent font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
