import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import './ScrollProgress.css';

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setPercentage(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <div className="scroll-progress-container">
            <svg className="progress-ring" width="60" height="60">
                <circle
                    className="progress-ring-circle-bg"
                    stroke="var(--color-primary-sage)"
                    strokeWidth="3"
                    fill="transparent"
                    r="26"
                    cx="30"
                    cy="30"
                    opacity="0.2"
                />
                <motion.circle
                    className="progress-ring-circle"
                    stroke="var(--color-primary-deep-olive)"
                    strokeWidth="3"
                    fill="transparent"
                    r="26"
                    cx="30"
                    cy="30"
                    strokeLinecap="round"
                    style={{
                        pathLength: scrollYProgress,
                    }}
                />
            </svg>
            <div className="progress-percentage">{percentage}%</div>
        </div>
    );
}

export default ScrollProgress;
