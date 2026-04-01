import { motion } from 'framer-motion';
import { Search, Shield, Zap, Rocket, Terminal } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            title: "Strategic Audit",
            description: "Deep-dive analysis of existing infrastructure bottlenecks and security vulnerabilities.",
            icon: <Search size={24} />,
            color: "text-primary bg-primary/10 border-primary/20"
        },
        {
            title: "Architecture Blueprint",
            description: "Designing zero-trust, high-availability system models with modular scalability.",
            icon: <Shield size={24} />,
            color: "text-accent bg-accent/10 border-accent/20"
        },
        {
            title: "Core Engineering",
            description: "Implementing mission-critical components in Rust/Go with extreme performance targets.",
            icon: <Terminal size={24} />,
            color: "text-primary bg-primary/10 border-primary/20"
        },
        {
            title: "Stress Testing",
            description: "Rigorous load testing and chaos engineering to guarantee 99.99% operational uptime.",
            icon: <Zap size={24} />,
            color: "text-accent bg-accent/10 border-accent/20"
        },
        {
            title: "Scale Deployment",
            description: "Orchestrated rollouts using Kubernetes with continuous optimization and monitoring.",
            icon: <Rocket size={24} />,
            color: "text-primary bg-primary/10 border-primary/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section id="process" className="relative py-24 overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[80px] pointer-events-none transform-gpu -translate-y-1/2 opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full mt-12">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/10">
                    <div className="w-full max-w-2xl text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 mb-6"
                        >
                            <div className="h-px w-12 bg-primary"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Implementation Methodology</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[var(--foreground)] tracking-tight uppercase"
                        >
                            Engineering <span className="text-primary italic text-gradient">Process</span>
                        </motion.h2>
                    </div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
                >
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass-card p-8 flex flex-col items-start relative group"
                        >
                            <div className="flex w-full justify-between items-start mb-8">
                                <span className="text-4xl font-black text-[var(--foreground)] opacity-10 group-hover:opacity-20 transition-opacity font-mono">
                                    0{idx + 1}
                                </span>
                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${step.color}`}>
                                    {step.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-black text-[var(--foreground)] mb-4 uppercase tracking-tighter">
                                {step.title}
                            </h3>
                            <p className="text-[var(--foreground)] opacity-50 text-xs font-light leading-relaxed group-hover:opacity-80 transition-opacity duration-300">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
