import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import './Services.css';

function Services() {
    const services = [
        {
            title: 'Weight Management',
            description: 'Transform your body composition through sustainable, science-backed nutrition strategies tailored to your metabolism and lifestyle.',
            whoItsFor: 'Individuals seeking healthy weight loss or gain, body recomposition, or metabolic health improvement',
            included: [
                'Comprehensive metabolic assessment',
                'Personalized meal plans',
                'Weekly progress tracking',
                'Lifestyle modification guidance',
                'Recipe suggestions and meal prep tips'
            ],
            duration: '12-16 weeks',
            icon: '⚖️'
        },
        {
            title: 'Gut Health & Digestive Wellness',
            description: 'Restore your digestive health and improve overall wellness through targeted nutrition protocols addressing the root causes of gut issues.',
            whoItsFor: 'Those experiencing bloating, IBS, food sensitivities, or chronic digestive discomfort',
            included: [
                'Gut health assessment',
                'Elimination and reintroduction protocols',
                'Microbiome-friendly meal plans',
                'Probiotic and supplement guidance',
                'Stress and lifestyle management'
            ],
            duration: '8-12 weeks',
            icon: '🌱'
        },
        {
            title: 'PCOS & Hormonal Balance',
            description: 'Achieve hormonal harmony through evidence-based nutrition interventions specifically designed for PCOS and hormonal imbalances.',
            whoItsFor: 'Women with PCOS, irregular cycles, or hormonal imbalances seeking natural regulation',
            included: [
                'Hormonal health assessment',
                'Anti-inflammatory meal planning',
                'Blood sugar management strategies',
                'Supplement recommendations',
                'Lifestyle and exercise guidance'
            ],
            duration: '16-20 weeks',
            icon: '🔄'
        }
    ];

    return (
        <div className="services">
            <div className="container">
                <ScrollReveal animation="slideUp">
                    <div className="services-hero-content">
                        <h1>Our Programs & Services</h1>
                        <p className="services-subtitle">
                            Specialized nutrition solutions designed for your unique health goals
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade" delay={0.2}>
                    <p className="intro-text text-center">
                        Each program is tailored to your individual needs, combining evidence-based nutrition science
                        with holistic wellness practices. No cookie-cutter approaches—just personalized care that works.
                    </p>
                </ScrollReveal>

                <div className="services-list">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} animation="slideUp" delay={index * 0.2}>
                            <motion.div
                                className="service-item"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card variant="default" hover={false} className="service-card">
                                    <div className="service-header">
                                        <div className="service-icon">{service.icon}</div>
                                        <div>
                                            <h2 className="service-title">{service.title}</h2>
                                            <span className="service-duration">Duration: {service.duration}</span>
                                        </div>
                                    </div>

                                    <p className="service-description">{service.description}</p>

                                    <div className="service-details">
                                        <div className="detail-section">
                                            <h4>Who It's For</h4>
                                            <p>{service.whoItsFor}</p>
                                        </div>

                                        <div className="detail-section">
                                            <h4>What's Included</h4>
                                            <ul className="included-list">
                                                {service.included.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-cta">
                                        <a href="#consultation" onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                                        }}>
                                            <Button variant="primary" size="medium">Book Consultation</Button>
                                        </a>
                                        <a href="#contact" onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}>
                                            <Button variant="secondary" size="medium">Learn More</Button>
                                        </a>
                                    </div>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="scale" delay={0.5}>
                    <div className="cta-box">
                        <h2>Not Sure Which Program is Right for You?</h2>
                        <p>
                            Book a free discovery call to discuss your health goals and find the perfect program
                            tailored to your unique needs.
                        </p>
                        <a href="#consultation" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <Button variant="primary" size="large">Schedule Free Discovery Call</Button>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}

export default Services;
