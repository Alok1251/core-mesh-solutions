import { motion } from 'framer-motion';
import { CreditCard, Cpu, Server, Cloud, ArrowRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "FinTech Infrastructures",
            description: "High-scale payment gateways and secure vault systems with full compliance and sub-second latency.",
            icon: <CreditCard className="text-primary" size={32} />,
            features: ["Payment Gateways", "Routing", "Vault"],
            color: "var(--primary)"
        },
        {
            title: "High-Scale Backends",
            description: "Distributed architectures handling 20,000+ RPS with P99 < 50ms and seamless horizontal scaling.",
            icon: <Server className="text-accent" size={32} />,
            features: ["Microservices", "gRPC", "Redis"],
            color: "var(--accent)"
        },
        {
            title: "IoT Ecosystems",
            description: "Supporting active device connections using MQTT multiplexing and data processing pipelines.",
            icon: <Cpu className="text-primary" size={32} />,
            features: ["MQTT", "Worker", "Data Pipeline"],
            color: "var(--primary)"
        },
        {
            title: "Cloud & DevOps",
            description: "Zero-downtime deployments, IaC with Terraform, and robust observability for mission-critical systems.",
            icon: <Cloud className="text-accent" size={32} />,
            features: ["Kubernetes", "Service Mesh", "IaC"],
            color: "var(--accent)"
        }
    ];

    return (
        <section id="services" className="relative py-24 overflow-hidden bg-transparent">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] pointer-events-none transform-gpu -translate-y-1/2 opacity-30"></div>
            
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
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Architecture Array</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[var(--foreground)] tracking-tight uppercase"
                        >
                            Platform <span className="text-primary italic text-gradient">Capabilities</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                            className="glass-card p-10 flex flex-col justify-between group h-full"
                        >
                            <div>
                                <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 group-hover:bg-primary/10 transition-colors duration-500 text-[var(--foreground)] group-hover:text-primary">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-black text-[var(--foreground)] mb-4 uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-base text-[var(--foreground)] opacity-60 leading-relaxed mb-8">
                                    {service.description}
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3">
                                {service.features.map((feature, fidx) => (
                                    <span 
                                        key={fidx} 
                                        className="px-4 py-2 rounded-lg bg-black/5 border border-black/10 dark:bg-white/[0.04] dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-[var(--foreground)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
