import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Layout, 
  Smartphone, 
  GitBranch, 
  Figma, 
  Terminal, 
  Cpu 
} from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Layout size={32} />, items: ['React', 'Next.js', 'Tailwind'] },
  { name: 'Backend', icon: <Database size={32} />, items: ['Node.js', 'Express', 'PostgreSQL'] },
  { name: 'Languages', icon: <Code2 size={32} />, items: ['TypeScript', 'JavaScript', 'Python'] },
  { name: 'Mobile', icon: <Smartphone size={32} />, items: ['React Native', 'Expo'] },
  { name: 'Version Control', icon: <GitBranch size={32} />, items: ['Git', 'GitHub', 'GitLab'] },
  { name: 'Design', icon: <Figma size={32} />, items: ['Figma', 'Adobe XD', 'UI/UX'] },
  { name: 'Tools', icon: <Terminal size={32} />, items: ['VS Code', 'Docker', 'Vercel'] },
  { name: 'AI/ML', icon: <Cpu size={32} />, items: ['Gemini API', 'OpenAI', 'LangChain'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            I specialize in building scalable web applications using modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 bg-surface border border-white/5 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="text-text-primary group-hover:text-accent transition-colors duration-300">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="text-xs text-text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
