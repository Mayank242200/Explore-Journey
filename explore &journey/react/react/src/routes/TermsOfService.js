import React from 'react';
import './TermsOfService.css'; 

function TermsOfService() {
    return (
        <div className="terms-container">
            <div className="terms-content">
                <h1>Terms of Service</h1>
                
                
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using this service, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you must not use our service.</p>

                <h2>2. Modifications to Terms</h2>
                <p>We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the service after any modifications constitutes acceptance of the new terms.</p>

                <h2>3. User Responsibilities</h2>
                <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

                <h2>4. Prohibited Activities</h2>
                <p>You agree not to engage in any of the following prohibited activities:</p>
                <ul>
                    <li>Using the service for any unlawful purpose.</li>
                    <li>Interfering with or disrupting the security or performance of the service.</li>
                    <li>Transmitting any malware or harmful code.</li>
                    <li>Attempting to gain unauthorized access to any portion of the service.</li>
                </ul>
            </div>
        </div>
    );
}

export default TermsOfService;
