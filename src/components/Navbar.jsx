import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = ['home', 'why', 'services', 'about', 'testimonials', 'faq', 'consultation'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'why', label: 'Why Us' },
        { to: 'services', label: 'Programs' },
        { to: 'about', label: 'About' },
        { to: 'testimonials', label: 'Testimonials' },
        { to: 'consultation', label: 'Contact' },
        { to: 'faq', label: 'FAQ' },
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-container">
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="navbar-brand"
                        onClick={closeMobileMenu}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Nutrivigor
                        </motion.span>
                    </ScrollLink>

                    {/* Desktop Navigation */}
                    <ul className="navbar-links desktop-only">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.to}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={800}
                                    offset={-80}
                                    spy={true}
                                    className={activeSection === link.to ? 'active' : ''}
                                >
                                    {link.label}
                                </ScrollLink>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <ScrollLink
                        to="consultation"
                        smooth={true}
                        duration={800}
                        className="navbar-cta desktop-only"
                    >
                        <motion.button
                            className="cta-button"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Consultation
                        </motion.button>
                    </ScrollLink>

                    {/* Mobile Hamburger Icon */}
                    <button
                        className="hamburger mobile-only"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="mobile-menu-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={closeMobileMenu}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="mobile-menu-drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-links">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.to}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <ScrollLink
                                                to={link.to}
                                                smooth={true}
                                                duration={800}
                                                offset={-80}
                                                spy={true}
                                                className={activeSection === link.to ? 'active' : ''}
                                                onClick={closeMobileMenu}
                                            >
                                                {link.label}
                                            </ScrollLink>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Mobile CTA Button */}
                                <motion.div
                                    className="mobile-menu-cta"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <ScrollLink
                                        to="consultation"
                                        smooth={true}
                                        duration={800}
                                        onClick={closeMobileMenu}
                                    >
                                        <button className="cta-button mobile-cta-button">
                                            Book Consultation
                                        </button>
                                    </ScrollLink>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
