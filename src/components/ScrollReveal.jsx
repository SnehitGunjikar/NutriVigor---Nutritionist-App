import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    once = true,
    className = ''
}) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: once
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else if (!once) {
            controls.start('hidden');
        }
    }, [controls, inView, once]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            scale: direction === 'scale' ? 0.8 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

ScrollReveal.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'scale']),
    delay: PropTypes.number,
    duration: PropTypes.number,
    once: PropTypes.bool,
    className: PropTypes.string
};

export default ScrollReveal;
