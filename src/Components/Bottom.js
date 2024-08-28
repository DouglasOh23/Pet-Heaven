import React, { useState } from 'react';
import './Bottom.css'; // Make sure to create this CSS file

const Bottom = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setError('Please enter your email.');
            return;
        }

        setError('');
        
        try {
            // Example: Replace with your own API endpoint or email service integration
            await fetch('https://your-api-endpoint.com/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            setSubmitted(true);
        } catch (err) {
            setError('There was an error subscribing. Please try again.');
        }
    };

    return (
        <div className="newsletter-container">
            <h2>Keep Up with Our Adventures</h2>
            {submitted ? (
                <p className="success-message">Thank you for subscribing!</p>
            ) : (
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-button">
                        Subscribe
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            )}
        </div>
    );
};

export default Bottom;
