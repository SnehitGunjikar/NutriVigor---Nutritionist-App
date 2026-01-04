import './SectionDivider.css';

function SectionDivider({ variant = 'wave', flip = false }) {
    const renderWave = () => (
        <svg
            className={`section-divider ${flip ? 'flip' : ''}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
                fill="currentColor"
            />
        </svg>
    );

    const renderCurve = () => (
        <svg
            className={`section-divider ${flip ? 'flip' : ''}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M0,0 Q600,100 1200,0 L1200,120 L0,120 Z"
                fill="currentColor"
            />
        </svg>
    );

    const renderAngle = () => (
        <svg
            className={`section-divider ${flip ? 'flip' : ''}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M0,0 L600,100 L1200,0 L1200,120 L0,120 Z"
                fill="currentColor"
            />
        </svg>
    );

    const variants = {
        wave: renderWave,
        curve: renderCurve,
        angle: renderAngle
    };

    return (
        <div className="section-divider-wrapper">
            {variants[variant] ? variants[variant]() : renderWave()}
        </div>
    );
}

export default SectionDivider;
