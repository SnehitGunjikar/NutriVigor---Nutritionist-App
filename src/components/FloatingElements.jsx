import { motion } from 'framer-motion';
import './FloatingElements.css';

function FloatingElements() {
    const elements = [
        { icon: '🍃', delay: 0, duration: 8, x: '10%', y: '20%' },
        { icon: '🥗', delay: 1, duration: 10, x: '80%', y: '15%' },
        { icon: '🌿', delay: 2, duration: 12, x: '15%', y: '70%' },
        { icon: '🥑', delay: 0.5, duration: 9, x: '85%', y: '60%' },
        { icon: '🍃', delay: 1.5, duration: 11, x: '50%', y: '40%' },
        { icon: '🌱', delay: 2.5, duration: 13, x: '25%', y: '85%' },
        { icon: '🥬', delay: 3, duration: 14, x: '70%', y: '80%' },
        { icon: '🌿', delay: 0.8, duration: 10, x: '40%', y: '10%' },
    ];

    return (
        <div className="floating-elements-container">
            {elements.map((el, index) => (
                <motion.div
                    key={index}
                    className="floating-element"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        rotate: [0, Math.random() * 10 - 5, 0],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: el.x,
                        top: el.y,
                    }}
                >
                    {el.icon}
                </motion.div>
            ))}
        </div>
    );
}

export default FloatingElements;
