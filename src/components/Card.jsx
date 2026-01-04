import './Card.css';

function Card({ children, variant = 'default', className = '', hover = true }) {
    return (
        <div className={`card card-${variant} ${hover ? 'card-hover' : ''} ${className}`}>
            {children}
        </div>
    );
}

export default Card;
