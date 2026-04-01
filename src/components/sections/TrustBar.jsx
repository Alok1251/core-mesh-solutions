import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, HardDrive, LayoutGrid, Zap } from 'lucide-react';

const TrustBar = () => {
    const stats = [
        { label: 'RPS Throughput', value: '20K+', icon: <Zap /> },
        { label: 'Security Standard', value: 'PCI-DSS', icon: <ShieldCheck /> },
        { label: 'Active Devices', value: '300K+', icon: <Cpu /> },
        { label: 'Uptime Reliability', value: '99.99%', icon: <HardDrive /> },
        { label: 'Latency Drop', value: '30%', icon: <LayoutGrid /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section id="trust" className="relative py-12 z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass-card flex flex-col items-center justify-center text-center p-8 lg:p-10 group transition-colors duration-500"
                        >
                            <div className="mb-5 text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                {stat.icon}
                            </div>
                            <div className="text-[var(--foreground)] font-black text-3xl md:text-4xl mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
                                {stat.value}
                            </div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-[var(--foreground)] opacity-40">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustBar;
