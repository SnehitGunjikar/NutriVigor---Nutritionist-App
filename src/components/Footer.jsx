import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-brand">NutriVigor</h3>
                        <p className="footer-tagline">Nourish with Purpose. Thrive with Strength.</p>
                        <p className="footer-description">
                            Science-backed nutrition for sustainable wellness and holistic health transformation.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <ScrollLink to="home" smooth={true} duration={800}>
                                    Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="about" smooth={true} duration={800}>
                                    About Us
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800}>
                                    Services
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="testimonials" smooth={true} duration={800}>
                                    Testimonials
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="consultation" smooth={true} duration={800}>
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800}>
                                    Weight Management
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800}>
                                    Gut Health
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800}>
                                    PCOS & Hormonal Balance
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800}>
                                    Lifestyle Disease Nutrition
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={800}>
                                    Sports Nutrition
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Connect</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram">
                                <span className="social-icon">📷</span>
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <span className="social-icon">📘</span>
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <span className="social-icon">💼</span>
                            </a>
                            <a href="#" className="social-link" aria-label="WhatsApp">
                                <span className="social-icon">💬</span>
                            </a>
                        </div>
                        <p className="footer-contact">
                            <a href="mailto:hello@nutrivigor.com">hello@nutrivigor.com</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NutriVigor. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
