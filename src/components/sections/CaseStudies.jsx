import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Cpu, Server, CheckCircle2, Zap, BarChart3 } from 'lucide-react';

const CaseStudies = () => {
    const studies = [
        {
            title: "SuperSwitch Gateway",
            subtitle: "FinTech / High-Concurrency (Rust)",
            problem: "Critical failures in payment routing during peak loads (5K+ requests per second).",
            solution: "Engineered a dynamic routing core in Rust using lock-free data structures and real-time health checks.",
            results: ["12% Failure Reduction", "25% Cost Optimization", "99.9% Success Rate"],
            stack: ["Rust", "Redis Cluster", "gRPC", "Kubernetes"],
            icon: <Zap className="text-primary" />,
            metrics: "2.5M+ Daily TRX"
        },
        {
            title: "Edge API Gateway",
            subtitle: "Global Distributed System (Go)",
            problem: "High latency jitter and lack of fine-grained rate limiting for 20,000+ API requests per second.",
            solution: "Custom-built cloud-native gateway with distributed token buckets and edge-side caching.",
            results: ["20K+ RPS Stable", "P99 < 30ms Latency", "99.99% Core Uptime"],
            stack: ["Go", "Etcd", "Prometheus", "Envoy"],
            icon: <Server className="text-accent" />,
            metrics: "20K+ RPS Handled"
        },
        {
            title: "IoT Data Sync Engine",
            subtitle: "Mesh Network Scale (Golang)",
            problem: "Infrastructure bottlenecks during massive fleet check-ins and state synchronization.",
            solution: "Implemented efficient connection multiplexing and persistent worker pools for 300K+ concurrent mqtt clients.",
            results: ["300K+ Live Devices", "400% Sync Throughput", "Zero-Downtime OTA"],
            stack: ["Golang", "MQTT", "TimescaleDB", "NATS"],
            icon: <Cpu className="text-primary" />,
            metrics: "300K+ Connections"
        }
    ];

    return (
        <section id="case-studies" className="relative py-24 overflow-hidden bg-transparent">
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
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">System Deployments</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[var(--foreground)] tracking-tight uppercase"
                        >
                            Production <span className="text-primary italic text-gradient">Scale</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 glass-card flex items-center gap-6"
                    >
                       <div className="text-right">
                          <p className="text-[10px] uppercase font-bold text-accent mb-1 tracking-widest">Impact Metric</p>
                          <p className="text-xl md:text-2xl font-black text-[var(--foreground)] font-mono tracking-tight uppercase">$140M+ / DAY</p>
                       </div>
                       <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-pulse">
                          <TrendingUp className="text-accent" size={24} />
                       </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-12">
                   {studies.map((study, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="group flex flex-col lg:flex-row gap-0 glass-card p-0 overflow-hidden"
                      >
                         <div className="w-full lg:w-1/3 p-8 lg:p-10 bg-black/[0.01] dark:bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:border-primary/50 transition-colors duration-500 mb-8 text-[var(--foreground)] group-hover:text-primary">
                                  {study.icon}
                               </div>
                               <h3 className="text-2xl font-black text-[var(--foreground)] mb-3 leading-tight uppercase tracking-tight">
                                  {study.title}
                                </h3>
                               <p className="text-xs font-bold text-accent mb-8 uppercase tracking-widest opacity-80">
                                  {study.subtitle}
                               </p>
                               <div className="flex flex-wrap gap-2 mb-8">
                                   {study.stack.map((item, id) => (
                                      <span key={id} className="text-[10px] font-bold tracking-widest uppercase py-2 px-4 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 text-[var(--foreground)] opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                         {item}
                                      </span>
                                   ))}
                               </div>
                            </div>
                            <div className="p-6 bg-accent/5 border border-accent/10 rounded-2xl mt-auto">
                               <div className="flex items-center gap-2 mb-2">
                                  <BarChart3 className="text-accent" size={16} />
                                  <p className="text-[10px] uppercase font-bold text-accent tracking-widest mb-0">KPI Benchmark</p>
                               </div>
                               <p className="text-lg font-black text-[var(--foreground)] font-mono tracking-tight uppercase">{study.metrics}</p>
                            </div>
                         </div>

                         <div className="w-full lg:w-2/3 p-8 lg:p-10 flex flex-col justify-center">
                            <div className="space-y-8">
                               <div>
                                  <h4 className="text-xs uppercase font-bold text-[var(--foreground)] opacity-40 mb-3 tracking-widest">The Challenge</h4>
                                  <p className="text-sm text-[var(--foreground)] font-light leading-relaxed opacity-80">
                                     {study.problem}
                                  </p>
                               </div>
                               <div>
                                  <h4 className="text-xs uppercase font-bold text-[var(--foreground)] opacity-40 mb-3 tracking-widest">The Solution</h4>
                                  <p className="text-sm text-[var(--foreground)] font-light leading-relaxed opacity-80">
                                     {study.solution}
                                  </p>
                               </div>
                               <div>
                                  <h4 className="text-xs uppercase font-bold text-[var(--foreground)] opacity-40 mb-4 tracking-widest">Performance Record</h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      {study.results.map((res, ridx) => (
                                         <div key={ridx} className="flex items-center gap-3 p-4 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-xl">
                                            <CheckCircle2 className="text-accent shrink-0" size={16} />
                                            <span className="text-[var(--foreground)] font-bold tracking-tight text-xs uppercase opacity-90">{res}</span>
                                         </div>
                                      ))}
                                  </div>
                               </div>
                               <button className="flex items-center gap-4 text-[var(--foreground)] font-bold uppercase tracking-widest text-[10px] hover:text-accent transition-colors mt-8 group-hover:translate-x-2 duration-300">
                                  INITIATE ARCHITECTURE DEEP-DIVE
                                   <div className="w-8 h-8 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-[var(--background)] transition-colors duration-300">
                                     <ArrowUpRight size={14} />
                                  </div>
                                </button>
                            </div>
                         </div>
                      </motion.div>
                   ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
