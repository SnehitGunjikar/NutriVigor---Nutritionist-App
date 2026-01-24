import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '../config';
import Button from './Button';
import './ConsultationModal.css';

function ConsultationModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        healthGoal: '',
        preferredDate: '',
        preferredTime: '',
        notes: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const timeSlots = [
        '9:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM',
        '5:00 PM - 6:00 PM'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        if (!formData.healthGoal.trim()) {
            newErrors.healthGoal = 'Please select your health goal';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                healthGoal: '',
                preferredDate: '',
                preferredTime: '',
                notes: ''
            });
            onClose();
        }, 3000);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleBackdropClick}
            >
                <motion.div
                    className="modal-container"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {!isSuccess ? (
                        <>
                            <div className="modal-header">
                                <h2>Book Your Free Consultation</h2>
                                <p className="modal-subtitle">
                                    Start your wellness journey with a personalized consultation
                                </p>
                                <button
                                    className="modal-close"
                                    onClick={onClose}
                                    aria-label="Close modal"
                                >
                                    ×
                                </button>
                            </div>

                            <form className="consultation-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? 'error' : ''}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && <span className="error-message">{errors.name}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error' : ''}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? 'error' : ''}
                                            placeholder="1234567890"
                                        />
                                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="healthGoal">Primary Health Goal *</label>
                                        <select
                                            id="healthGoal"
                                            name="healthGoal"
                                            value={formData.healthGoal}
                                            onChange={handleChange}
                                            className={errors.healthGoal ? 'error' : ''}
                                        >
                                            <option value="">Select your goal</option>
                                            <option value="6-week">6-Week Transformation</option>
                                            <option value="90-day">90-Day Fat Loss Challenge</option>
                                            <option value="diabetes">Diabetes Management</option>
                                            <option value="pcod">PCOD Support</option>
                                            <option value="bridal">Bridal Transformation</option>
                                            <option value="sports">Sports Nutrition & Performance</option>
                                            <option value="general">General Wellness</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.healthGoal && <span className="error-message">{errors.healthGoal}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="preferredDate">Preferred Date</label>
                                        <input
                                            type="date"
                                            id="preferredDate"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="preferredTime">Preferred Time</label>
                                        <select
                                            id="preferredTime"
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select time slot</option>
                                            {timeSlots.map(slot => (
                                                <option key={slot} value={slot}>{slot}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="notes">Additional Notes (Optional)</label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Any specific concerns or questions you'd like to discuss..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            Submitting...
                                        </>
                                    ) : (
                                        'Book Free Consultation'
                                    )}
                                </button>
                                <div className="modal-whatsapp-cta">
                                    <Button
                                        href={getWhatsAppUrl('Hi, I\'d like to book a consultation.')}
                                        variant="secondary"
                                        size="medium"
                                        external
                                        className="whatsapp-btn"
                                    >
                                        Chat with us on WhatsApp
                                    </Button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            className="success-message"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="success-icon">✓</div>
                            <h3>Consultation Booked Successfully!</h3>
                            <p>Thank you for choosing Nutrivigor. We'll contact you shortly to confirm your appointment.</p>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default ConsultationModal;
