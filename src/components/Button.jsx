import './Button.css';

function Button({ children, variant = 'primary', size = 'medium', href, onClick, className = '', external }) {
    const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={buttonClass}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    );
}

export default Button;
