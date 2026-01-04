import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ScrollProgress from './components/ScrollProgress';
import ParallaxSection from './components/ParallaxSection';
import ScrollReveal from './components/ScrollReveal';
import SectionDivider from './components/SectionDivider';
import Card from './components/Card';
import Button from './components/Button';
import './App.css';

function App() {
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFloatingCTA(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hero content features
    const features = [
        {
            icon: '🎯',
            title: 'Personalized Plans',
            description: 'Customized nutrition strategies tailored to your unique body, lifestyle, and health goals.'
        },
        {
            icon: '🔬',
            title: 'Science-Backed Approach',
            description: 'Evidence-based protocols rooted in the latest nutritional science and research.'
        },
        {
            icon: '♻️',
            title: 'Sustainable Results',
            description: 'Long-term health transformation, not quick fixes or crash diets.'
        },
        {
            icon: '🌿',
            title: 'Holistic Wellness',
            description: 'Comprehensive approach addressing nutrition, lifestyle, and mindset.'
        }
    ];

    // Programs
    const programs = [
        {
            title: 'Weight Management',
            description: 'Achieve and maintain your ideal weight through sustainable nutrition strategies.',
            duration: '12-16 weeks',
            icon: '⚖️'
        },
        {
            title: 'Gut Health',
            description: 'Restore digestive wellness and improve overall health from the inside out.',
            duration: '8-12 weeks',
            icon: '🌱'
        },
        {
            title: 'PCOS & Hormonal Balance',
            description: 'Natural hormone regulation through targeted nutrition and lifestyle modifications.',
            duration: '16-20 weeks',
            icon: '🔄'
        },
        {
            title: 'Lifestyle Disease Nutrition',
            description: 'Manage diabetes, hypertension, and cholesterol through evidence-based nutrition.',
            duration: '12-24 weeks',
            icon: '❤️'
        },
        {
            title: 'Sports Nutrition',
            description: 'Optimize athletic performance and recovery with precision nutrition protocols.',
            duration: '12+ weeks',
            icon: '💪'
        }
    ];

    // Testimonials
    const testimonials = [
        {
            text: "NutriVigor transformed not just my eating habits, but my entire relationship with food and health. The personalized approach made all the difference.",
            author: "Priya Sharma",
            title: "Marketing Professional"
        },
        {
            text: "After struggling with PCOS for years, I finally found a sustainable solution. The results have been life-changing.",
            author: "Ananya Verma",
            title: "Software Engineer"
        },
        {
            text: "The science-backed approach gave me confidence. No gimmicks, just real results that last.",
            author: "Rahul Mehta",
            title: "Entrepreneur"
        }
    ];

    return (
        <div className="app single-page">
            <FloatingElements />
            <Navbar />
            <ScrollProgress />

            {/* HERO SECTION */}
            <ParallaxSection id="home" background="gradient" speed="medium" className="full-height">
                <div className="hero-section">
                    <div className="container">
                        <ScrollReveal direction="up" delay={0.2}>
                            <div className="hero-content">
                                <motion.h1
                                    className="hero-title"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    Personalized Nutrition That Transforms Your Health for Life
                                </motion.h1>
                                <motion.p
                                    className="hero-subtitle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    Science-backed nutrition plans designed for sustainable wellness.
                                    No crash diets. No shortcuts. Just real, lasting transformation.
                                </motion.p>
                                <motion.div
                                    className="hero-cta"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    <ScrollLink to="consultation" smooth={true} duration={800}>
                                        <Button variant="primary" size="large">Book a Consultation</Button>
                                    </ScrollLink>
                                    <ScrollLink to="services" smooth={true} duration={800}>
                                        <Button variant="secondary" size="large">View Programs</Button>
                                    </ScrollLink>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </ParallaxSection>

            <SectionDivider variant="wave" />

            {/* WHY NUTRIVIGOR SECTION */}
            <ParallaxSection id="why" background="default" speed="slow" className="auto-height">
                <div className="section">
                    <div className="container">
                        <ScrollReveal direction="up">
                            <div className="section-header text-center">
                                <h2>Why Choose NutriVigor</h2>
                                <p className="section-subtitle">
                                    Your Partner in Sustainable Health Transformation
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                                    <Card variant="default" className="feature-card">
                                        <div className="card-icon">{feature.icon}</div>
                                        <h3 className="card-title">{feature.title}</h3>
                                        <p className="card-description">{feature.description}</p>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <SectionDivider variant="curve" flip />

            {/* SERVICES/PROGRAMS SECTION */}
            <ParallaxSection id="services" background="sage" speed="medium" className="auto-height">
                <div className="section services-section bg-white">
                    <div className="container">
                        <ScrollReveal direction="up">
                            <div className="section-header text-center">
                                <h2>Our Programs</h2>
                                <p className="section-subtitle">
                                    Specialized Nutrition Solutions for Your Unique Needs
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="programs-grid">
                            {programs.map((program, index) => (
                                <ScrollReveal key={index} direction="scale" delay={index * 0.1}>
                                    <Card variant="accent" className="program-card">
                                        <div className="program-icon">{program.icon}</div>
                                        <h3 className="card-title">{program.title}</h3>
                                        <p className="card-description">{program.description}</p>
                                        <div className="program-meta">
                                            <span className="program-duration">⏱️ {program.duration}</span>
                                        </div>
                                        <ScrollLink to="consultation" smooth={true} duration={800}>
                                            <Button variant="tertiary" size="small">Learn More</Button>
                                        </ScrollLink>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <SectionDivider variant="angle" />

            {/* ABOUT SECTION */}
            <ParallaxSection id="about" background="olive" speed="slow" className="auto-height">
                <div className="section about-section">
                    <div className="container">
                        <div className="about-content">
                            <ScrollReveal direction="left">
                                <div className="about-text">
                                    <h2>Meet Your Nutritionist</h2>
                                    <p>
                                        With over 8 years of experience in clinical nutrition and wellness,
                                        I've dedicated my career to helping individuals discover the transformative
                                        power of personalized, science-backed nutrition.
                                    </p>
                                    <p>
                                        My journey began when I witnessed firsthand how conventional diets failed
                                        to address the root causes of health challenges. This inspired me to pursue
                                        a holistic, evidence-based approach that treats each person as unique.
                                    </p>
                                    <div className="credentials">
                                        <div className="credential-item">
                                            <span className="credential-icon">🎓</span>
                                            <span>M.Sc. Clinical Nutrition</span>
                                        </div>
                                        <div className="credential-item">
                                            <span className="credential-icon">📜</span>
                                            <span>Certified Diabetes Educator</span>
                                        </div>
                                        <div className="credential-item">
                                            <span className="credential-icon">⚕️</span>
                                            <span>Registered Dietitian</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="right" delay={0.2}>
                                <div className="about-visual">
                                    <div className="visual-placeholder">
                                        <span className="placeholder-text">👤</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <SectionDivider variant="wave" flip />

            {/* TESTIMONIALS SECTION */}
            <ParallaxSection id="testimonials" background="default" speed="medium" className="auto-height">
                <div className="section testimonials-section">
                    <div className="container">
                        <ScrollReveal direction="up">
                            <div className="section-header text-center">
                                <h2>Client Success Stories</h2>
                                <p className="section-subtitle">
                                    Real People. Real Results. Real Transformation.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                                    <Card variant="default" className="card-testimonial" hover={false}>
                                        <p className="testimonial-text">"{testimonial.text}"</p>
                                        <div className="testimonial-author">
                                            <div>
                                                <div className="author-name">{testimonial.author}</div>
                                                <div className="author-title">{testimonial.title}</div>
                                            </div>
                                        </div>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* TRUST SECTION */}
            <div className="section trust-section bg-white">
                <div className="container">
                    <ScrollReveal direction="up">
                        <div className="trust-content">
                            <div className="trust-item">
                                <div className="trust-number">8+</div>
                                <div className="trust-label">Years of Experience</div>
                            </div>
                            <div className="trust-item">
                                <div className="trust-number">500+</div>
                                <div className="trust-label">Lives Transformed</div>
                            </div>
                            <div className="trust-item">
                                <div className="trust-number">95%</div>
                                <div className="trust-label">Client Success Rate</div>
                            </div>
                            <div className="trust-item">
                                <div className="trust-number">100%</div>
                                <div className="trust-label">Evidence-Based</div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <SectionDivider variant="curve" />

            {/* CONSULTATION/CONTACT SECTION */}
            <ParallaxSection id="consultation" background="gradient" speed="fast" className="auto-height">
                <div className="section cta-section">
                    <div className="container">
                        <ScrollReveal direction="up">
                            <div className="cta-content text-center">
                                <h2 className="cta-title">Start Your Wellness Journey Today</h2>
                                <p className="cta-text">
                                    Take the first step toward sustainable health transformation.
                                    Book your personalized consultation and discover how NutriVigor can help you thrive.
                                </p>
                                <Button variant="primary" size="large">Book Free Consultation</Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </ParallaxSection>

            <Footer />

            {/* Floating CTA Button */}
            {showFloatingCTA && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                >
                    <ScrollLink to="consultation" smooth={true} duration={800} className="floating-cta">
                        <span className="floating-icon">📅</span>
                        <span className="floating-text">Book Consultation</span>
                    </ScrollLink>
                </motion.div>
            )}
        </div>
    );
}

export default App;
