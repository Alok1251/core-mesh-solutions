import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';

const Contact = () => {
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
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-transparent">
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
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Engage Core Mesh</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[var(--foreground)] tracking-tight uppercase"
                        >
                            Initiate <span className="text-primary italic text-gradient">Audit</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="glass-card p-10 lg:p-16 relative overflow-hidden"
                    >
                        <div className="absolute -top-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none opacity-40"></div>

                        <motion.p 
                            variants={itemVariants}
                            className="text-base text-[var(--foreground)] font-light leading-relaxed mb-12 opacity-80"
                        >
                            Whether you’re building a high-concurrency gateway or scaling a global IoT ecosystem, we engineer for zero-failure performance. Establish contact below.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col gap-6">
                           <a href="mailto:alok.sahoo.official@gmail.com" className="flex items-center gap-6 p-6 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-2xl hover:border-primary/40 transition-colors group">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                 <Mail size={24} />
                              </div>
                              <div className="text-left">
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 opacity-80">Direct Channel</p>
                                 <p className="text-sm font-bold tracking-tight text-[var(--foreground)]">alok.sahoo.official@gmail.com</p>
                              </div>
                           </a>
                           
                           <a href="#" className="flex items-center gap-6 p-6 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-2xl hover:border-accent/40 transition-colors group">
                              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                 <Calendar size={24} />
                              </div>
                              <div className="text-left">
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1 opacity-80">Deep Dive</p>
                                 <p className="text-sm font-bold tracking-tight text-[var(--foreground)]">Schedule Strategy Session</p>
                              </div>
                           </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="glass-card p-10 lg:p-16"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-3 group">
                                <label className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-50 px-2 group-focus-within:opacity-100 transition-opacity">Requestor Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter full name"
                                    className="w-full px-6 py-4 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-xl outline-none focus:border-primary/50 text-[var(--foreground)] text-sm font-bold transition-colors placeholder:font-light placeholder:opacity-30"
                                />
                            </div>
                            <div className="flex flex-col gap-3 group">
                                <label className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-50 px-2 group-focus-within:opacity-100 transition-opacity">Corporate Endpoint</label>
                                <input 
                                    type="email" 
                                    placeholder="name@company.com"
                                    className="w-full px-6 py-4 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-xl outline-none focus:border-primary/50 text-[var(--foreground)] text-sm font-bold transition-colors placeholder:font-light placeholder:opacity-30"
                                />
                            </div>
                            <div className="flex flex-col gap-3 group">
                                <label className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-50 px-2 group-focus-within:opacity-100 transition-opacity">Architectural Requirement</label>
                                <textarea 
                                    rows="4"
                                    placeholder="Describe your system parameters..."
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primary/50 text-[var(--foreground)] text-sm font-bold transition-colors placeholder:font-light resize-none placeholder:opacity-30"
                                ></textarea>
                            </div>
                            <button className="btn-primary w-full flex items-center justify-center gap-4 py-4 uppercase font-bold tracking-widest text-xs mt-4">
                                Transmit Request
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] pointer-events-none transform-gpu opacity-30"></div>
        </section>
    );
};

export default Contact;
