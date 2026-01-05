import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from './CountUp';
import './WhyUsStats.css';

function WhyUsStats({ stats = [] }) {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    if (stats.length === 0) return null;

    return (
        <motion.div
            ref={ref}
            className="why-us-stats"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="stat-card"
                    variants={itemVariants}
                >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                        <div className="stat-number">
                            {inView && (
                                <CountUp
                                    to={stat.value}
                                    duration={2.5}
                                    delay={0.3 + index * 0.2}
                                    suffix={stat.suffix || ''}
                                />
                            )}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                    <div className="stat-glow"></div>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default WhyUsStats;
