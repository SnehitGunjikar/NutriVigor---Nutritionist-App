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
import FAQ from './components/FAQ';
import ConsultationModal from './components/ConsultationModal';
import { getWhatsAppUrl, FOUNDER_IMAGE } from './config';
import './App.css';

function App() {
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [founderImgError, setFounderImgError] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFloatingCTA(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Why Choose NutriVigor – 4 pillars (3 + motto)
    const features = [
        {
            icon: '/images/science_backed_nutrition.png',
            title: 'We Start with Your Story',
            description: 'First, we analyse your blood reports to get to the root cause. What\'s making your body hold onto weight? We dig deep into your lifestyle, eating habits, and blood markers to understand how your body is really functioning and what deficiencies might be standing in your way.',
            highlight: '🔬 Blood Report Analysis'
        },
        {
            icon: '/images/personalized_nutrition_plan.png',
            title: 'Your Plan is Truly Yours',
            description: 'Based on what we discover, we create a personalised diet plan tailored to your daily calorie needs, carefully balancing your macros and micros. If your blood work shows you need additional support, we\'ll recommend a supplement stack designed specifically for you. No cookie-cutter approaches. No generic meal plans. Just what you need.',
            highlight: '🎯 Personalized Plans'
        },
        {
            icon: '/images/holistic_wellness_approach.png',
            title: 'Movement That Works for You',
            description: 'We don\'t just hand you a workout routine and wish you luck. We design your exercise plan and guide you on exactly how many days to focus on strength training versus cardio—because the right balance makes all the difference. At NutriVigor, you\'re not just another client following a standard program.',
            highlight: '💪 Expert Guidance'
        },
        {
            icon: '/images/sustainable_wellness_results.png',
            title: 'Simple Truth',
            description: 'At NutriVigor, we believe diet isn\'t complicated—it\'s simply about eating the right food, in the right quantity, at the right time. You\'re someone with a unique body, unique challenges, and unique goals. And you deserve a plan that honours that.',
            highlight: '📊 Progress Tracking'
        }
    ];

    // Programs – Fat Loss + Specialized
    const fatLossPrograms = [
        {
            title: '6-Week Transformation',
            description: 'Perfect for those looking to lose 2-4 kg and reset their relationship with food. This program is your pathway back on track—whether you\'ve slipped off your routine or just need the right guidance and motivation to kickstart real change. In six weeks, we\'ll help you build sustainable habits, tune into your body\'s needs, and see genuine results.',
            idealFor: ['Getting back on track', 'Establishing healthy habits', 'Moderate weight loss', 'Body toning'],
            icon: '⚖️',
            whatsappMessage: 'Hi, I\'m interested in the 6-Week Transformation program.'
        },
        {
            title: '90-Day Fat Loss Challenge',
            description: 'Designed for those ready to commit to significant transformation—losing 6-8 kg or more. This isn\'t just a program; it\'s a partnership. You\'ll receive personalized attention, detailed tracking, and the accountability you need to stay consistent. We dig deeper, adjust more frequently, and ensure every aspect of your nutrition and lifestyle is optimized for your goals.',
            idealFor: ['Major weight loss goals', 'Those seeking high accountability', 'Deeper personalized support'],
            icon: '🔥',
            whatsappMessage: 'Hi, I\'m interested in the 90-Day Fat Loss Challenge.'
        }
    ];

    const specializedPrograms = [
        {
            title: 'Diabetes Management',
            description: 'Transform your metabolic health through science-backed nutrition. We track your progress with monthly blood work monitoring, aiming for measurable improvements in blood sugar levels and overall health markers.',
            idealFor: ['Blood sugar regulation', 'Metabolic health', 'Measurable progress'],
            icon: '❤️',
            whatsappMessage: 'Hi, I\'m interested in Diabetes Management.'
        },
        {
            title: 'PCOD Support',
            description: 'Address PCOD at its root with personalized hormone-balancing nutrition. Our clients see an average weight loss of 6-8 kg in 12 weeks along with improved cycle regularity and reduced lifestyle disorder symptoms.',
            idealFor: ['Hormone balance', 'Symptom reduction', 'Sustainable fat loss'],
            icon: '🔄',
            whatsappMessage: 'Hi, I\'m interested in PCOD Support.'
        },
        {
            title: 'Bridal Transformation',
            description: 'Achieve a radiant bridal glow from the inside out. This package combines targeted nutrition, strategic supplementation, and skin-boosting juices to ensure you look and feel stunning on your special day.',
            idealFor: ['Bridal glow', 'Pre-wedding transformation', 'Inside-out radiance'],
            icon: '👰',
            whatsappMessage: 'Hi, I\'m interested in the Bridal Transformation Package.'
        },
        {
            title: 'Sports Nutrition',
            description: 'Optimize athletic performance with tailored fueling strategies. Whether building muscle or prepping for competition, we analyze your training and body composition to ensure your nutrition drives elite results.',
            idealFor: ['Athletes & Fitness enthusiasts', 'Muscle building', 'Performance optimization'],
            icon: '💪',
            whatsappMessage: 'Hi, I\'m interested in Sports Nutrition & Performance.'
        }
    ];

    const fatLossNote = 'Both programs include personalized nutrition plans based on your blood work, customized workout guidance, and ongoing support. The difference? The depth of personalization and the level of hand-holding you need to succeed.';
    const specializedIntro = 'This is where our expertise truly shines. We don\'t just track numbers on a scale—we track your health. Through regular monitoring of your blood reports and health markers, we ensure you\'re not only losing weight but genuinely getting healthier from the inside out.';

    // Testimonials (with optional stats and image)
    const testimonials = [
        {
            text: "NutriVigor transformed not just my eating habits, but my entire relationship with food and health. The personalized approach made all the difference.",
            author: "Priya Sharma",
            title: "Marketing Professional",
            stats: "Lost 12 kg and reduced HbA1c from 8.2 to 6.1 in 90 days.",
            image: null
        },
        {
            text: "After struggling with PCOS for years, I finally found a sustainable solution. The results have been life-changing.",
            author: "Ananya Verma",
            title: "Software Engineer",
            stats: "Lost 6.5 kg in 12 weeks with improved cycle regularity.",
            image: null
        },
        {
            text: "The science-backed approach gave me confidence. No gimmicks, just real results that last. I eat ghar ka khana and still hit my goals.",
            author: "Rahul Mehta",
            title: "Entrepreneur",
            stats: "Lost 8 kg in 90-Day Fat Loss Challenge.",
            image: null
        }
    ];

    // FAQ Data
    const faqIntro = "Still unsure? That's okay. Every body is different—and that's exactly why our approach is personalised.";
    const faqs = [
        {
            question: "Do you give the same diet plan to everyone?",
            answer: "Not at all. I don't believe in copy-paste plans. Your body is different, your lifestyle is different, so why should your diet be the same as someone else's? I look at your routine, your eating habits, your health markers—and if you have blood reports, even better. Everything is built around YOU, not a template."
        },
        {
            question: "I've tried so many diets and nothing worked. Why will this be different?",
            answer: "I get it—you've probably tried everything and felt frustrated. Here's the thing: most diets fail because they're not made for YOUR body. They don't look at why you're holding onto weight, what deficiencies you have, or what's really going on inside. We start by finding the root cause—through your blood work and lifestyle—and THEN create a plan. That's why it actually works."
        },
        {
            question: "Will I have to give up rice, roti, or my regular ghar ka khana?",
            answer: "No way. Most of my clients eat normal home food and still get amazing results. I'm not here to take away your roti or rice—I'm here to teach you how much to eat, when to eat it, and how to balance it. It's about portions and timing, not elimination."
        },
        {
            question: "Do I need blood reports to start?",
            answer: "They help a lot, but they're not compulsory. If you have recent reports, great—I'll use them to understand what's happening inside your body. If you don't, no problem. We'll start with your lifestyle and food habits and work from there. Either way, you're covered."
        },
        {
            question: "How do I know if I should pick the 6-Week or 90-Day program?",
            answer: "Simple. If you want to lose 2-4 kg, fix your eating habits, and get back on track - go for the 6-Week Program. It's a solid reset. If you want to lose 6-8+ kg, need more accountability, and want deeper, long-term transformation—the 90-Day Program is for you. Still confused? Just message me. We'll figure it out together based on your goals."
        },
        {
            question: "Is this one of those strict crash diets?",
            answer: "Nope. I don't do crash diets. Those work for a week and then you're back where you started- or worse. My focus is on building habits you can actually stick to. We're aiming for long-term change, not short-term suffering."
        },
        {
            question: "Can I eat out or attend family functions?",
            answer: "Of course! Life doesn't stop because you're on a diet. I'll teach you how to make smart choices when you're eating out or at a shaadi. You don't need to be perfect—you just need to be consistent and know what works for your body."
        },
        {
            question: "I have PCOD / Diabetes. Is this safe for me?",
            answer: "Absolutely. In fact, PCOD and diabetes are things I specifically work with. The first thing any doctor will tell you is to fix your diet and lose weight—that's exactly where I come in. We'll focus on your health markers, manage your symptoms, and work alongside any medical advice you're already following. It's safe, and it's effective."
        },
        {
            question: "How quickly will I see results?",
            answer: "Most people feel the difference in their energy and digestion within the first 2 weeks. Visible fat loss? Usually around 3-4 weeks, depending on how consistent you are and where you're starting from. Remember, this isn't a race—it's about real, lasting change."
        },
        {
            question: "What happens after the program ends? Will I just gain it all back?",
            answer: "Not if you've learned what I've taught you. By the end, you'll know exactly how to eat, how to manage cravings, and how to maintain your results on your own. Plus, I'll give you a personalized maintenance sheet made just for you—so you can stay in your maintenance zone without needing me forever. The goal is that you don't have to start over again."
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
                                        Transform Your Health. Simplify Your Nutrition.
                                    </motion.h1>

                                    <motion.p
                                        className="hero-subtitle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    >
                                        Personalized, science-backed plans—no generic diets or guesswork.
                                        Eat right food, in the right quantity, at the right time.
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
                                                <CountUp to={300} duration={2} delay={1.2} suffix="+" />
                                            </div>
                                            <div className="trust-badge-label">Clients Transformed</div>
                                        </div>
                                        <div className="trust-badge-divider"></div>
                                        <div className="trust-badge-item">
                                            <div className="trust-badge-number">
                                                <CountUp to={6} duration={2.5} delay={1.3} suffix="+" />
                                            </div>
                                            <div className="trust-badge-label">Years Experience</div>
                                        </div>
                                        <div className="trust-badge-divider"></div>
                                        <div className="trust-badge-item">
                                            <div className="trust-badge-number trust-badge-text">National-Level</div>
                                            <div className="trust-badge-label">Athlete</div>
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
                                    <h2>Why Choose NutriVigor</h2>
                                    <p className="section-subtitle why-choose-intro">
                                        We believe weight loss isn&apos;t about generic diets or guessing. It&apos;s about understanding your body and what&apos;s holding you back. Here&apos;s how we&apos;re different:
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

                            {/* Fat Loss Programs */}
                            <div className="programs-subsection">
                                <ScrollReveal direction="up" delay={0.1}>
                                    <h3 className="programs-subheading">Fat Loss Programs</h3>
                                    <p className="programs-note">{fatLossNote}</p>
                                </ScrollReveal>
                                <div className="programs-grid">
                                    {fatLossPrograms.map((program, index) => (
                                        <ScrollReveal key={program.title} direction="scale" delay={0.15 + index * 0.1}>
                                            <Card variant="accent" className="program-card">
                                                <div className="program-card-header">
                                                    <div className="program-icon">{program.icon}</div>
                                                    <h3 className="card-title">{program.title}</h3>
                                                </div>
                                                <p className="card-description">{program.description}</p>
                                                {program.idealFor && program.idealFor.length > 0 && (
                                                    <div className="program-ideal-for">
                                                        <span className="program-ideal-label">Ideal for:</span>
                                                        <ul>
                                                            {program.idealFor.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="program-cta-group">
                                                    <Button href={getWhatsAppUrl(program.whatsappMessage)} variant="tertiary" size="small" external>
                                                        Get Started
                                                    </Button>
                                                    <Button href={getWhatsAppUrl(program.whatsappMessage)} variant="secondary" size="small" external className="program-cta-whatsapp">
                                                        Chat on WhatsApp
                                                    </Button>
                                                </div>
                                            </Card>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>

                            {/* Specialized Health Programs */}
                            <div className="programs-subsection">
                                <ScrollReveal direction="up" delay={0.2}>
                                    <h3 className="programs-subheading">Specialized Health Programs</h3>
                                    <p className="programs-note">{specializedIntro}</p>
                                </ScrollReveal>
                                <div className="programs-grid specialized-grid">
                                    {specializedPrograms.map((program, index) => (
                                        <ScrollReveal key={program.title} direction="scale" delay={0.25 + index * 0.1}>
                                            <Card variant="accent" className="program-card">
                                                <div className="program-card-header">
                                                    <div className="program-icon">{program.icon}</div>
                                                    <h3 className="card-title">{program.title}</h3>
                                                </div>
                                                <p className="card-description">{program.description}</p>
                                                {program.idealFor && program.idealFor.length > 0 && (
                                                    <div className="program-ideal-for">
                                                        <span className="program-ideal-label">Ideal for:</span>
                                                        <ul>
                                                            {program.idealFor.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="program-cta-group">
                                                    <Button href={getWhatsAppUrl(program.whatsappMessage)} variant="tertiary" size="small" external>
                                                        Get Started
                                                    </Button>
                                                    <Button href={getWhatsAppUrl(program.whatsappMessage)} variant="secondary" size="small" external className="program-cta-whatsapp">
                                                        Chat on WhatsApp
                                                    </Button>
                                                </div>
                                            </Card>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxSection>

                <SectionDivider variant="angle" />

                {/* HOW IT WORKS */}
                <ParallaxSection id="how-it-works" background="default" speed="slow" className="auto-height">
                    <div className="section how-it-works-section bg-white">
                        <div className="container">
                            <ScrollReveal direction="up">
                                <div className="section-header text-center">
                                    <h2>How It Works</h2>
                                    <p className="section-subtitle">
                                        Simple, clear steps to your transformation
                                    </p>
                                </div>
                            </ScrollReveal>
                            <div className="how-it-works-roadmap">
                                {/* Road map track line (replaced snake) */}

                                {[
                                    { n: 1, side: 'left', title: 'Book consultation & share blood reports', desc: 'Share your health history and any recent blood work so we can build a plan around your body.' },
                                    { n: 2, side: 'right', title: 'Get your personalised nutrition plan', desc: 'A custom diet tailored to your calories, macros, and goals—no generic templates.' },
                                    { n: 3, side: 'left', title: 'Weekly check-ins & adjustments', desc: 'We track progress, tweak your plan, and keep you accountable every step of the way.' },
                                    { n: 4, side: 'right', title: 'Achieve sustainable transformation', desc: 'Build lasting habits and maintain your results with confidence.' },
                                ].map((step, i) => (
                                    <motion.div
                                        key={step.n}
                                        className={`roadmap-step roadmap-step-${step.side}`}
                                        initial={{ opacity: 0, x: step.side === 'left' ? -32 : 32 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: '-30px' }}
                                        transition={{ duration: 0.5, delay: i * 0.12 }}
                                    >
                                        {step.side === 'left' && (
                                            <motion.div
                                                className="roadmap-card"
                                                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(58, 90, 64, 0.18)' }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                            >
                                                <h3 className="roadmap-card-title">{step.title}</h3>
                                                <p className="roadmap-card-desc">{step.desc}</p>
                                            </motion.div>
                                        )}
                                        <motion.div
                                            className="roadmap-node"
                                            animate={{ scale: [1, 1.08, 1] }}
                                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.2 }}
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <span className="roadmap-node-number">{step.n}</span>
                                        </motion.div>
                                        {step.side === 'right' && (
                                            <motion.div
                                                className="roadmap-card"
                                                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(58, 90, 64, 0.18)' }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                            >
                                                <h3 className="roadmap-card-title">{step.title}</h3>
                                                <p className="roadmap-card-desc">{step.desc}</p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ParallaxSection>

                <SectionDivider variant="curve" />

                {/* ABOUT SECTION */}
                <ParallaxSection id="about" background="olive" speed="slow" className="auto-height">
                    <div className="section about-section">
                        <div className="container">
                            <div className="about-content">
                                <ScrollReveal direction="left">
                                    <div className="about-text">
                                        <h2>Meet the Founder</h2>
                                        <p>
                                            I never set out to become a nutritionist. I was a competitive powerlifter chasing national medals and personal records, and I wanted to understand one thing: how could nutrition make me stronger?
                                        </p>
                                        <p>
                                            So I studied. I got certified. I learned everything I could about sports nutrition, not to build a business, but to fuel my own performance. And it worked—I went on to win 3 gold medals at the district level and 2 silver medals at the state level as a national powerlifter.
                                        </p>
                                        <p>
                                            But something unexpected happened along the way. Friends and family started asking for help. And as I guided them, I realized something that frustrated me: people had made nutrition unnecessarily complicated. They were terrified of food, confused by conflicting advice, and stuck following generic plans that didn&apos;t work for their bodies. The truth is, nutrition isn&apos;t rocket science. You just need the basics clear—what to eat, when to eat it, and how much your body actually needs.
                                        </p>
                                        <p>
                                            That&apos;s how NutriVigor was born. Since 2019, I&apos;ve had the privilege of transforming over 300 clients—not with fancy supplements or extreme restrictions, but with personalized plans rooted in their blood work, their lifestyle, and simple, sustainable eating. Most of my clients achieve their goals with ghar ka khana, because that&apos;s what real, lasting transformation looks like.
                                        </p>
                                        <div className="credentials">
                                            <div className="credential-item">
                                                <span className="credential-icon">🎓</span>
                                                <span>Certified Sports Nutritionist – K11 Academy</span>
                                            </div>
                                            <div className="credential-item">
                                                <span className="credential-icon">📜</span>
                                                <span>Certified Gym Instructor & Management – Pune University</span>
                                            </div>
                                            <div className="credential-item">
                                                <span className="credential-icon">💪</span>
                                                <span>Advanced Physique Transformation CPT (Level 1 & 2) – Team Boss Fitness Academy</span>
                                            </div>
                                            <div className="credential-item">
                                                <span className="credential-icon">🏆</span>
                                                <span>National-Level Powerlifter</span>
                                            </div>
                                        </div>
                                        <p>
                                            At NutriVigor, every client gets my full attention, a plan built specifically for their body, and the truth about what actually works. No generic meal plans. No guesswork. Just personalized guidance backed by science and your own blood work.
                                        </p>
                                        <p>
                                            Whether you&apos;re managing PCOS, controlling diabetes, optimizing athletic performance, or getting ready for your wedding day—I&apos;m here to walk alongside you, celebrate your wins, and help you become the healthiest version of yourself. Because nutrition doesn&apos;t have to be complicated. It just has to be yours.
                                        </p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="right" delay={0.2}>
                                    <div className="about-visual">
                                        <div className="visual-placeholder">
                                            {!founderImgError ? (
                                                <img
                                                    src={FOUNDER_IMAGE}
                                                    alt="Padmaja Channewadkar, Founder of NutriVigor"
                                                    onError={() => setFounderImgError(true)}
                                                    className="founder-image"
                                                />
                                            ) : (
                                                <span className="placeholder-text">👤</span>
                                            )}
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
                                            {testimonial.image && (
                                                <div className="testimonial-image-wrap">
                                                    <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                                                </div>
                                            )}
                                            <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
                                            {testimonial.stats && (
                                                <p className="testimonial-stats">{testimonial.stats}</p>
                                            )}
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
                                            to={300}
                                            duration={2.5}
                                            delay={0.2}
                                            suffix="+"
                                            className="count-up-text"
                                        />
                                    </div>
                                    <div className="trust-label">Clients Transformed</div>
                                </div>
                                <div className="trust-item">
                                    <div className="trust-number">
                                        <CountUp
                                            to={6}
                                            duration={2.5}
                                            delay={0.4}
                                            suffix="+"
                                            className="count-up-text"
                                        />
                                    </div>
                                    <div className="trust-label">Years of Experience</div>
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
                                    <div className="trust-number trust-number-text">National-Level</div>
                                    <div className="trust-label">Athlete</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <SectionDivider variant="curve" />

                {/* FAQ SECTION */}
                <ParallaxSection id="faq" background="default" speed="slow" className="auto-height">
                    <div className="section">
                        <div className="container">
                            <ScrollReveal direction="up">
                                <div className="section-header text-center">
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.2}>
                                <FAQ faqs={faqs} intro={faqIntro} />
                            </ScrollReveal>
                        </div>
                    </div>
                </ParallaxSection>

                <SectionDivider variant="wave" flip />

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
                                    <Button
                                        variant="primary"
                                        size="large"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Book Free Consultation
                                    </Button>
                                    <div className="cta-whatsapp-wrap">
                                        <Button
                                            href={getWhatsAppUrl('Hi, I\'d like to book a consultation.')}
                                            variant="secondary"
                                            size="large"
                                            external
                                            className="whatsapp-btn"
                                        >
                                            Chat with us on WhatsApp
                                        </Button>
                                    </div>
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
