import React from "react";
import "./ContactFormStyles.css";

function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        
        alert("Thank you! We will give you updates.");
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
