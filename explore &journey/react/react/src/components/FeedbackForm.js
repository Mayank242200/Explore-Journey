
import React, { useState } from 'react';
import './FeedbackFormStyles.css'; 

function FeedbackForm() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Thank you for your valuable feedback');
    };

    return (
        <div className="feedback-form-container">
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Your feedback" rows="4" required></textarea>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default FeedbackForm;
