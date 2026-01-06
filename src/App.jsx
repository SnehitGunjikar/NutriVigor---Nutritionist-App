import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ParallaxSection from './components/ParallaxSection';
import ScrollReveal from './components/ScrollReveal';
import SectionDivider from './components/SectionDivider';
import Card from './components/Card';
import Button from './components/Button';
import CountUp from './components/CountUp';
import ClickSpark from './components/ClickSpark';
import WhyUs from './components/WhyUs';
import WhyUsStats from './components/WhyUsStats';
import FAQ from './components/FAQ';
import ConsultationModal from './components/ConsultationModal';
import './App.css';

function App() {
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFloatingCTA(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Enhanced Features/Benefits for Why Us Carousel
    const features = [
        {
            icon: '/images/personalized_nutrition_plan.png',
            title: 'Personalized Plans',
            description: 'Customized nutrition strategies tailored to your unique body, lifestyle, and health goals. No cookie-cutter approaches—just results designed for you.',
            highlight: 'Tailored to your DNA & lifestyle'
        },
        {
            icon: '/images/science_backed_nutrition.png',
            title: 'Science-Backed Approach',
            description: 'Evidence-based protocols rooted in the latest nutritional science and research. Every recommendation is backed by clinical studies and proven results.',
            highlight: 'Research-validated methods'
        },
        {
            icon: '/images/sustainable_wellness_results.png',
            title: 'Sustainable Results',
            description: 'Long-term health transformation, not quick fixes or crash diets. Build habits that last a lifetime with our proven methodology.',
            highlight: '95% client retention rate'
        },
        {
            icon: '/images/holistic_wellness_approach.png',
            title: 'Holistic Wellness',
            description: 'Comprehensive approach addressing nutrition, lifestyle, and mindset. We treat the whole person, not just symptoms.',
            highlight: 'Mind + Body + Nutrition'
        }
    ];

    // Stats for Why Us Section
    const whyUsStats = [
        {
            icon: '🏆',
            value: 8,
            suffix: '+',
            label: 'Years Experience'
        },
        {
            icon: '👥',
            value: 500,
            suffix: '+',
            label: 'Success Stories'
        },
        {
            icon: '⭐',
            value: 95,
            suffix: '%',
            label: 'Success Rate'
        },
        {
            icon: '📊',
            value: 12,
            suffix: '+',
            label: 'Programs Offered'
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
            text: "Nutrivigor transformed not just my eating habits, but my entire relationship with food and health. The personalized approach made all the difference.",
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

    // FAQ Data
    const faqs = [
        {
            question: "What makes Nutrivigor different from other nutritionists?",
            answer: "We combine personalized, science-backed nutrition plans with a holistic approach that addresses your unique body chemistry, lifestyle, and health goals. Unlike one-size-fits-all programs, every recommendation is tailored specifically to you and backed by the latest research."
        },
        {
            question: "How long does it take to see results?",
            answer: "Most clients notice positive changes within the first 2-4 weeks, including improved energy, better digestion, and initial weight changes. However, sustainable transformation is a journey—we focus on long-term results rather than quick fixes. Your personalized timeline will be discussed during your consultation."
        },
        {
            question: "Do I need to follow a restrictive diet?",
            answer: "Absolutely not! We don't believe in restrictive crash diets. Our approach focuses on sustainable, balanced nutrition that fits your lifestyle. You'll learn to enjoy nutritious foods while still having flexibility for the foods you love."
        },
        {
            question: "Can you help with specific health conditions?",
            answer: "Yes! We specialize in managing various conditions including PCOS, diabetes, thyroid disorders, gut health issues, and hormonal imbalances. All our protocols are evidence-based and can be coordinated with your healthcare provider."
        },
        {
            question: "What's included in a consultation?",
            answer: "Your initial consultation includes a comprehensive health assessment, body composition analysis, lifestyle evaluation, and a detailed discussion of your goals. You'll receive a personalized nutrition plan, meal guidelines, and ongoing support through your wellness journey."
        },
        {
            question: "Do you provide meal plans?",
            answer: "Yes! You'll receive customized meal plans tailored to your preferences, schedule, and nutritional needs. We also provide recipes, shopping lists, and practical guidance to make healthy eating simple and enjoyable."
        },
        {
            question: "How often will I need follow-up consultations?",
            answer: "Follow-up frequency depends on your goals and needs. Typically, clients meet bi-weekly or monthly for the first few months, then transition to maintenance check-ins. We also offer WhatsApp support for ongoing guidance between sessions."
        },
        {
            question: "Is online consultation as effective as in-person?",
            answer: "Absolutely! Our virtual consultations are comprehensive and convenient. You'll receive the same personalized attention, detailed assessments, and ongoing support—all from the comfort of your home. Most clients find online sessions even more convenient and effective."
        }
    ];

    return (
        <ClickSpark
            sparkColor="#000"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
            extraScale={1}
        >
            <div className="app single-page">
                <Navbar />
                <ScrollProgress />

                {/* HERO SECTION */}
                <ParallaxSection id="home" background="default" speed="medium" className="full-height">
                    <div className="hero-section">
                        <div className="container">
                            <ScrollReveal direction="up" delay={0.2}>
                                <div className="hero-content">
                                    <motion.div
                                        className="hero-badge"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                    >
                                        <span className="badge-icon">✨</span>
                                        <span className="badge-text">Transform Your Health Journey</span>
                                    </motion.div>

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
                                        <Button
                                            variant="primary"
                                            size="large"
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            Book a Consultation
                                        </Button>
                                        <ScrollLink to="services" smooth={true} duration={800}>
                                            <Button variant="secondary" size="large">View Programs</Button>
                                        </ScrollLink>
                                    </motion.div>

                                    {/* Trust Badges */}
                                    <motion.div
                                        className="hero-trust-badges"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.9 }}
                                    >
                                        <div className="trust-badge-item">
                                            <div className="trust-badge-number">
                                                <CountUp to={8} duration={2} delay={1.2} suffix="+" />
                                            </div>
                                            <div className="trust-badge-label">Years</div>
                                        </div>
                                        <div className="trust-badge-divider"></div>
                                        <div className="trust-badge-item">
                                            <div className="trust-badge-number">
                                                <CountUp to={500} duration={2.5} delay={1.3} suffix="+" />
                                            </div>
                                            <div className="trust-badge-label">Clients</div>
                                        </div>
                                        <div className="trust-badge-divider"></div>
                                        <div className="trust-badge-item">
                                            <div className="trust-badge-number">
                                                <CountUp to={95} duration={2} delay={1.4} suffix="%" />
                                            </div>
                                            <div className="trust-badge-label">Success Rate</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </ParallaxSection>

                <SectionDivider variant="wave" />

                {/* WHY NUTRIVIGOR SECTION - PREMIUM CAROUSEL */}
                <ParallaxSection id="why" background="default" speed="slow" className="auto-height">
                    <div className="section">
                        <div className="container">
                            <ScrollReveal direction="up">
                                <div className="section-header text-center">
                                    <h2>Why Choose Nutrivigor</h2>
                                    <p className="section-subtitle">
                                        Your Partner in Sustainable Health Transformation
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Interactive Carousel */}
                            <ScrollReveal direction="up" delay={0.2}>
                                <WhyUs benefits={features} />
                            </ScrollReveal>
                        </div>
                    </div>
                </ParallaxSection>

                <SectionDivider variant="curve" flip />

                {/* SERVICES/PROGRAMS SECTION */}
                <ParallaxSection id="services" background="default" speed="medium" className="auto-height">
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
                                    <div className="trust-number">
                                        <CountUp
                                            to={8}
                                            duration={2.5}
                                            delay={0.2}
                                            suffix="+"
                                            className="count-up-text"
                                        />
                                    </div>
                                    <div className="trust-label">Years of Experience</div>
                                </div>
                                <div className="trust-item">
                                    <div className="trust-number">
                                        <CountUp
                                            to={500}
                                            duration={2.5}
                                            delay={0.4}
                                            suffix="+"
                                            className="count-up-text"
                                        />
                                    </div>
                                    <div className="trust-label">Lives Transformed</div>
                                </div>
                                <div className="trust-item">
                                    <div className="trust-number">
                                        <CountUp
                                            to={95}
                                            duration={2.5}
                                            delay={0.6}
                                            suffix="%"
                                            className="count-up-text"
                                        />
                                    </div>
                                    <div className="trust-label">Client Success Rate</div>
                                </div>
                                <div className="trust-item">
                                    <div className="trust-number">
                                        <CountUp
                                            to={100}
                                            duration={2.5}
                                            delay={0.8}
                                            suffix="%"
                                            className="count-up-text"
                                        />
                                    </div>
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
                                        Book your personalized consultation and discover how Nutrivigor can help you thrive.
                                    </p>
                                    <Button
                                        variant="primary"
                                        size="large"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Book Free Consultation
                                    </Button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </ParallaxSection>

                <SectionDivider variant="wave" flip />

                {/* FAQ SECTION */}
                <ParallaxSection id="faq" background="default" speed="slow" className="auto-height">
                    <div className="section">
                        <div className="container">
                            <ScrollReveal direction="up">
                                <div className="section-header text-center">
                                    <h2>Frequently Asked Questions</h2>
                                    <p className="section-subtitle">
                                        Get answers to common questions about our nutrition programs and services
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.2}>
                                <FAQ faqs={faqs} />
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
                        <button
                            className="floating-cta"
                            onClick={() => setIsModalOpen(true)}
                            aria-label="Book consultation"
                        >
                            <span className="floating-cta-icon">📅</span>
                            <span className="floating-cta-text">Book Consultation</span>
                        </button>
                    </motion.div>
                )}

                {/* Consultation Modal */}
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </ClickSpark>
    );
}

export default App;
