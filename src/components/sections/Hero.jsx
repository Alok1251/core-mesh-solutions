import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Sparkles, Layers, Cpu } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.98, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-transparent">
            {/* Architectural Background Blobs */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] pointer-events-none transform-gpu opacity-40"></div>
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none transform-gpu opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center w-full max-w-5xl mx-auto"
                >
                    {/* Floating Badge */}
                    <motion.div variants={itemVariants} className="mb-8">
                       <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 backdrop-blur-md text-xs font-bold tracking-widest uppercase text-accent">
                          <Sparkles size={14} />
                          <span>Enterprise Software Architecture</span>
                       </div>
                    </motion.div>

                    {/* Spectacular Typography */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tight mb-8 leading-[1.1] uppercase text-[var(--foreground)]"
                    >
                        <span className="block text-gradient">CORE MESH</span>
                        <span className="block hero-gradient-text italic">SOLUTIONS</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-[var(--foreground)] opacity-70 max-w-3xl mb-12 leading-relaxed font-light"
                    >
                        We engineer <strong className="font-bold text-[var(--foreground)]">zero-latency</strong> architectures and distributed FinTech ecosystems. Building the invisible backbone for millions of concurrent operations seamlessly.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                    >
                        <a href="#contact" className="btn-primary w-full sm:w-auto min-w-[220px]">
                            <span>Initialize Project</span>
                            <ArrowRight size={18} />
                        </a>
                        <a href="#case-studies" className="btn-secondary w-full sm:w-auto min-w-[220px]">
                            <Code2 size={18} />
                            <span>Explore Systems</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Stunning Architectural Cards Array */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {[
                        { icon: <Terminal size={22}/>, title: "Precision Engineering", desc: "Rust & Go backends deployed for peak zero-downtime." },
                        { icon: <Layers size={22}/>, title: "Topology Scaling", desc: "Kubernetes orchestration mapping autonomous clusters." },
                        { icon: <Cpu size={22}/>, title: "IoT Multiplexing", desc: "Sub-20ms packet resolution over massive MQTT networks." }
                    ].map((feature, idx) => (
                        <div key={idx} className="glass-card p-8 lg:p-10 flex flex-col items-start text-left group hover:bg-black/[0.05] dark:hover:bg-white/[0.04] transition-colors duration-500">
                            <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 flex items-center justify-center mb-6 text-[var(--foreground)] group-hover:text-primary transition-colors duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-wide mb-3 text-[var(--foreground)]">{feature.title}</h3>
                            <p className="text-sm text-[var(--foreground)] opacity-60 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
