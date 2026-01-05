import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WhyUs.css';

function WhyUs({ benefits = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying || benefits.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % benefits.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, benefits.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrevious = () => {
        setActiveIndex((current) => (current === 0 ? benefits.length - 1 : current - 1));
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % benefits.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    if (benefits.length === 0) return null;

    const currentBenefit = benefits[activeIndex];

    return (
        <div className="why-us-carousel">
            {/* Carousel Main Content */}
            <div className="carousel-container">
                {/* Left Side - Icon & Number */}
                <div className="carousel-left">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="carousel-icon-wrapper"
                        >
                            <div className="carousel-icon">
                                <img
                                    src={currentBenefit.icon}
                                    alt={currentBenefit.title}
                                    className="carousel-icon-image"
                                />
                            </div>
                            <div className="icon-glow"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Side - Content */}
                <div className="carousel-right">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="carousel-content"
                        >
                            <motion.h3
                                className="carousel-title"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {currentBenefit.title}
                            </motion.h3>
                            <motion.p
                                className="carousel-description"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {currentBenefit.description}
                            </motion.p>

                            {/* Highlighted Feature */}
                            {currentBenefit.highlight && (
                                <motion.div
                                    className="carousel-highlight"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="highlight-icon">✨</span>
                                    <span>{currentBenefit.highlight}</span>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="carousel-controls">
                        <button
                            onClick={goToPrevious}
                            className="carousel-arrow carousel-arrow-prev"
                            aria-label="Previous benefit"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="carousel-dots">
                            {benefits.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                                    aria-label={`Go to benefit ${index + 1}`}
                                >
                                    <span className="dot-inner"></span>
                                    {index === activeIndex && (
                                        <motion.span
                                            className="dot-progress"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: isAutoPlaying ? 1 : 0 }}
                                            transition={{ duration: 5, ease: "linear" }}
                                        ></motion.span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="carousel-arrow carousel-arrow-next"
                            aria-label="Next benefit"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
