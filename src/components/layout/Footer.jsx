import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative py-24 bg-[var(--background)] border-t border-white/10 overflow-hidden z-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] pointer-events-none opacity-20 transform-gpu"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 w-full">
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img 
                            src="/logo.png" 
                            alt="Core Mesh Logo" 
                            className="h-14 w-auto group-hover:scale-105 transition-transform duration-500 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        />
                        <span className="text-2xl font-black font-display tracking-tight text-[var(--foreground)] uppercase italic">
                            CORE<span className="text-primary text-gradient">MESH</span>
                        </span>
                    </div>
                    <p className="text-[var(--foreground)] opacity-60 text-sm font-light max-w-sm leading-relaxed">
                        Engineering High-Performance Ecosystems for Global FinTech & IoT. Structured for scale.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        {[
                            { icon: Github, href: "#" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/alok-kumar-sahoo-253576208/" },
                            { icon: Twitter, href: "#" },
                            { icon: Mail, href: "mailto:alok.sahoo.official@gmail.com" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-[var(--foreground)] opacity-50 hover:text-accent hover:border-accent hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40">Navigation</h4>
                        <ul className="flex flex-col gap-4">
                            {['Services', 'Architecture', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-sm font-bold tracking-wider text-[var(--foreground)] opacity-60 hover:text-primary hover:opacity-100 transition-colors flex items-center gap-2 group">
                                        {item}
                                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40">Focus Areas</h4>
                        <ul className="flex flex-col gap-4">
                            {['FinTech Core', 'IoT Scale', 'Zero-Trust Sec', 'Cloud Native'].map((item) => (
                                <li key={item} className="text-sm font-bold tracking-wider text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--foreground)] transition-colors cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            {['Privacy Policy', 'Terms of Service', 'Security Ops'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-bold tracking-wider text-[var(--foreground)] opacity-60 hover:text-[var(--foreground)] hover:opacity-100 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-xs font-bold tracking-widest uppercase text-[var(--foreground)] opacity-40 text-center md:text-left">
                    © 2026 Core Mesh Solutions. All rights reserved.
                </p>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 opacity-40">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)]">All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
