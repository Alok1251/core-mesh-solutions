import { motion } from 'framer-motion';
import { Cpu, Server, Network, Box, Cloud, Database, LayoutGrid, Zap } from 'lucide-react';

const TechStack = () => {
    const categories = [
        {
            name: "Core Languages",
            techs: [
                { name: "Go", icon: <Server size={24} />, color: "text-[#00ADD8]" },
                { name: "Rust", icon: <Cpu size={24} />, color: "text-[#DEA584]" },
                { name: "TypeScript", icon: <LayoutGrid size={24} />, color: "text-[#3178C6]" },
            ]
        },
        {
            name: "Cloud Architecture",
            techs: [
                { name: "Kubernetes", icon: <Box size={24} />, color: "text-[#326CE5]" },
                { name: "Istio", icon: <Network size={24} />, color: "text-[#466BB0]" },
                { name: "Docker", icon: <Box size={24} />, color: "text-[#2496ED]" },
                { name: "AWS/GCP", icon: <Cloud size={24} />, color: "text-[#FF9900]" },
            ]
        },
        {
            name: "Data & Systems",
            techs: [
                { name: "Redis", icon: <Database size={24} />, color: "text-[#DC382D]" },
                { name: "MQTT", icon: <Zap size={24} />, color: "text-[#0369a1]" },
                { name: "gRPC", icon: <Network size={24} />, color: "text-[#244c5a]" },
                { name: "PostgreSQL", icon: <Database size={24} />, color: "text-[#336791]" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section id="architecture" className="relative py-24 overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] pointer-events-none transform-gpu -translate-y-1/2 opacity-30"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full mt-12">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8 pb-8 border-b border-black/10 dark:border-white/10">
                    <div className="w-full max-w-2xl text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 mb-6"
                        >
                            <div className="h-px w-12 bg-primary"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Core Technology</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[var(--foreground)] tracking-tight uppercase"
                        >
                            Engineered <span className="text-primary italic text-gradient">Precision</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                   {categories.map((cat, idx) => (
                      <motion.div
                        key={idx}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="glass-card p-10 flex flex-col"
                      >
                         <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-50 mb-10 pb-4 border-b border-black/10 dark:border-white/10 text-left">
                            {cat.name}
                         </h3>
                         <div className="grid grid-cols-2 gap-4">
                            {cat.techs.map((tech, tidx) => (
                               <motion.div
                                 key={tidx}
                                 variants={itemVariants}
                                 className="group flex flex-col items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 hover:border-primary/40 rounded-2xl transition-all duration-300"
                               >
                                  <div className={`transition-transform duration-500 group-hover:scale-110 ${tech.color}`}>
                                     {tech.icon}
                                  </div>
                                  <span className="text-[10px] font-bold text-[var(--foreground)] tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                     {tech.name}
                                  </span>
                               </motion.div>
                            ))}
                         </div>
                      </motion.div>
                   ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
