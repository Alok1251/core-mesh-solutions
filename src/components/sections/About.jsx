import { motion } from 'framer-motion';
import { Mail, Linkedin, Award, ShieldCheck, Terminal, Cpu } from 'lucide-react';

const About = () => {
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
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section id="about" className="relative py-24 overflow-hidden bg-transparent z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full mt-12">
                <div className="glass-card overflow-hidden relative border border-black/10 dark:border-white/10 p-10 lg:p-16">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none transform-gpu opacity-40"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-4 mb-6"
                            >
                                <div className="h-px w-12 bg-primary"></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">Software Solutions Company</span>
                            </motion.div>
                            
                            <motion.h2 
                                variants={itemVariants}
                                className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[var(--foreground)] mb-8 tracking-tight uppercase leading-[1.1]"
                            >
                                Engineering <br/> <span className="text-primary italic text-gradient">The Core</span>
                            </motion.h2>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-base text-[var(--foreground)] font-light leading-relaxed mb-12 opacity-80 max-w-xl"
                            >
                                Architecting high-scale infrastructure for the next generation of <span className="text-[var(--foreground)] font-bold">FinTech</span> and <span className="text-[var(--foreground)] font-bold">IoT</span>. 
                                Specialized in distributed systems, high-performance protocols, and zero-trust security.
                            </motion.p>

                            <motion.div 
                                variants={itemVariants}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
                            >
                               {[
                                 { icon: <ShieldCheck size={20} className="text-accent" />, label: "PCI-Compliant Architecture" },
                                 { icon: <Terminal size={20} className="text-accent" />, label: "Full-Scale IoT Multiplexing" },
                                 { icon: <Cpu size={20} className="text-accent" />, label: "Sub-20ms P99 Performance" },
                                 { icon: <Award size={20} className="text-accent" />, label: "Engineering Excellence" }
                               ].map((feature, fidx) => (
                                   <div key={fidx} className="flex items-center gap-4 text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity">
                                       <div className="w-10 h-10 rounded-lg bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 flex items-center justify-center">
                                           {feature.icon}
                                       </div>
                                       <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">{feature.label}</span>
                                   </div>
                               ))}
                            </motion.div>

                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                               <a href="mailto:alok.sahoo.official@gmail.com" className="btn-primary w-full sm:w-auto min-w-[200px] !text-[10px]">
                                  <Mail size={16} />
                                  <span>Initiate Contact</span>
                               </a>
                               <a href="https://www.linkedin.com/in/alok-kumar-sahoo-253576208/" target="_blank" className="btn-secondary w-full sm:w-auto min-w-[200px] !text-[10px]">
                                  <Linkedin size={16} />
                                  <span>Digital Presence</span>
                               </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-center py-10 lg:py-20"
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-[40px]"></div>
                            <div className="relative z-10 w-full aspect-square max-w-[400px] rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center p-12 glass shadow-2xl">
                                <div className="absolute inset-4 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center">
                                    <div className="absolute inset-8 rounded-full border border-dashed border-black/10 dark:border-white/10 animate-[spin_60s_linear_infinite]"></div>
                                </div>
                                <div className="relative flex flex-col items-center justify-center text-center uppercase tracking-tight font-display gap-6">
                                    <div className="w-20 h-20 flex items-center justify-center p-2 relative">
                                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[20px] animate-pulse"></div>
                                        <img src="/logo.png" alt="CM" className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
                                    </div>
                                    <p className="text-2xl lg:text-3xl font-black text-[var(--foreground)] leading-[1.1] text-gradient">HIGH-SCALE <br/><span className="text-accent italic">INFRA</span></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
