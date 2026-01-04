import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import './ParallaxSection.css';

function ParallaxSection({
    children,
    id,
    background = 'default',
    speed = 'medium',
    className = ''
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax speeds
    const speeds = {
        slow: [-50, 50],
        medium: [-100, 100],
        fast: [-150, 150]
    };

    const y = useTransform(scrollYProgress, [0, 1], speeds[speed] || speeds.medium);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id={id} ref={ref} className={`parallax-section ${className}`}>
            {/* Background Layer */}
            <motion.div
                className={`parallax-background ${background}`}
                style={{ y }}
            />

            {/* Content Layer */}
            <motion.div
                className="parallax-content"
                style={{ opacity }}
            >
                {children}
            </motion.div>
        </section>
    );
}

ParallaxSection.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    background: PropTypes.string,
    speed: PropTypes.oneOf(['slow', 'medium', 'fast']),
    className: PropTypes.string
};

export default ParallaxSection;
