import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = ['home', 'why', 'services', 'about', 'testimonials', 'consultation'];
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

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'why', label: 'Why Us' },
        { to: 'services', label: 'Programs' },
        { to: 'about', label: 'About' },
        { to: 'testimonials', label: 'Testimonials' },
        { to: 'consultation', label: 'Contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="navbar-brand"
                >
                    NutriVigor
                </ScrollLink>

                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.to}>
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
                        </li>
                    ))}
                </ul>

                <ScrollLink
                    to="consultation"
                    smooth={true}
                    duration={800}
                    className="navbar-cta"
                >
                    <button className="cta-button">Book Consultation</button>
                </ScrollLink>
            </div>
        </nav>
    );
}

export default Navbar;
