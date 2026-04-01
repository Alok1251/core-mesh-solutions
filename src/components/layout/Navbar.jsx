import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, Moon, Sun, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Architecture', href: '#case-studies' },
        { name: 'Skills', href: '#techstack' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 transform-gpu ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`relative flex items-center justify-between p-4 lg:p-6 transition-all duration-500 rounded-[2.5rem] border transform-gpu ${scrolled ? 'glass-card border-slate-300 dark:border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img 
                            src="/logo.png" 
                            alt="Core Mesh" 
                            className="h-10 w-auto group-hover:scale-105 transition-transform duration-500 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        />
                        <span className="text-xl font-black font-display tracking-tight text-[var(--foreground)] uppercase italic">
                            CORE<span className="text-primary">MESH</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-primary transition-all"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-3 rounded-2xl glass-card text-[var(--foreground)] hover:text-primary transition-all duration-300 transform-gpu hover:scale-110 active:scale-95 border border-slate-300 dark:border-white/10 shadow-sm"
                        >
                            {theme === 'dark' ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-primary" />}
                        </motion.button>

                        <motion.a
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            href="#contact"
                            className="hidden md:flex btn-primary px-8 py-3.5 !text-xs !bg-[var(--foreground)] !text-[var(--background)] hover:!bg-primary hover:!text-white border-none shadow-xl"
                        >
                            Contact Me
                        </motion.a>

                        {/* Mobile Toggle Button */}
                        <button
                            className="md:hidden p-2 text-[var(--foreground)] opacity-70 hover:opacity-100 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden absolute top-full left-0 w-full p-6 transform-gpu"
                    >
                        <div className="glass-card rounded-[3rem] p-10 flex flex-col items-center gap-8 border border-slate-300 dark:border-white/10 shadow-2xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-black uppercase tracking-[0.2em] text-[var(--foreground)] italic hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary w-full text-center py-5 uppercase tracking-widest italic font-black shadow-xl"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
