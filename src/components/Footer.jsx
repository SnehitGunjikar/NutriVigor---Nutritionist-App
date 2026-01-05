import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setEmail('');
                setSubscribed(false);
            }, 3000);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Decorative Top Wave */}
            <div className="footer-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="wave-shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="wave-shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="wave-shape-fill"></path>
                </svg>
            </div>

            <div className="container">
                <div className="footer-main">
                    {/* Brand Section */}
                    <div className="footer-column footer-brand-section">
                        <div className="footer-brand-wrapper">
                            <h3 className="footer-brand">Nutrivigor</h3>
                            <span className="footer-brand-badge">Premium Wellness</span>
                        </div>
                        <p className="footer-tagline">Nourish with Purpose. Thrive with Strength.</p>
                        <p className="footer-description">
                            Transform your health journey with science-backed nutrition and personalized wellness strategies for lasting vitality.
                        </p>

                        {/* Awards/Badges */}
                        <div className="footer-credentials">
                            <div className="credential-badge">
                                <span className="badge-icon">✓</span>
                                <span>8+ Years Experience</span>
                            </div>
                            <div className="credential-badge">
                                <span className="badge-icon">★</span>
                                <span>500+ Success Stories</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <ScrollLink to="home" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">→</span> Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="why" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">→</span> Why Us
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">→</span> Programs
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="about" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">→</span> About
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="testimonials" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">→</span> Testimonials
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="consultation" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">→</span> Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-column">
                        <h4 className="footer-title">Our Services</h4>
                        <ul className="footer-links">
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">🎯</span> Weight Management
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">🫀</span> Gut Health
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">⚖️</span> Hormonal Balance
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">💪</span> Sports Nutrition
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800} offset={-80}>
                                    <span className="link-icon">🏥</span> Lifestyle Disease Care
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-column footer-newsletter">
                        <h4 className="footer-title">Stay Updated</h4>
                        <p className="newsletter-description">
                            Get expert nutrition tips, exclusive wellness content, and special offers delivered to your inbox.
                        </p>

                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <div className="newsletter-input-wrapper">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="newsletter-input"
                                />
                                <motion.button
                                    type="submit"
                                    className="newsletter-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {subscribed ? '✓' : '→'}
                                </motion.button>
                            </div>
                            {subscribed && (
                                <motion.p
                                    className="newsletter-success"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Thank you for subscribing!
                                </motion.p>
                            )}
                        </form>

                        {/* Social Media */}
                        <div className="footer-social-section">
                            <h4 className="footer-title footer-social-title">Connect With Us</h4>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link" aria-label="WhatsApp">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom - Large Branding */}
                <div className="footer-branding-section">
                    <div className="footer-branding-logo">
                        Nutrivigor
                    </div>
                </div>

                {/* Footer Bottom - Links & Copyright */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Nutrivigor. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="footer-decoration footer-decoration-1"></div>
            <div className="footer-decoration footer-decoration-2"></div>
        </footer>
    );
}

export default Footer;
