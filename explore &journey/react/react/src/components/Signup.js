import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignupStyles.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !password) {
            setError('All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email.');
            return;
        }

        

        setSuccess('Successfully signed up');

        
        setName('');
        setEmail('');
        setPassword('');

        
        setTimeout(() => {
            navigate('/'); 
        }, 2000); 
    };

    return (
        <div className="signup-background">
            <div className="signup-container">
                <h1>Sign Up</h1>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" ><i>Submit</i></button>
                    <button type="button" className="home-button" onClick={() => navigate('/')}><i>Home</i></button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
