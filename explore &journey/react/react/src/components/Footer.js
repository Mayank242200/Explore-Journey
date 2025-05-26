import { Link } from 'react-router-dom';
import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="footer-brand">
                    <h1>Explore and journey</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div className="footer-social">
                    <Link to="/" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-square"></i>
                    </Link>
                    <Link to="/" aria-label="Instagram">
                        <i className="fa-brands fa-instagram-square"></i>
                    </Link>
                   
                    <Link to="/" aria-label="Twitter">
                        <i className="fa-brands fa-twitter-square"></i>
                    </Link>
                </div>
            </div>
            <div className="bottom">
                <div className="footer-section">
                    <h4>Details of address

                    </h4>
                 anjar,kutchh, Gujrat
                 pincode:370110
                
                </div>
                <div className="footer-section">
                    <h4>others</h4>
                <Link to="/terms-of-service">Terms of Service</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                </div>

                <div className="footer-section">
                    <h4>Help</h4>
                    <Link to="/support">Support</Link>
                   
                    <Link to="/contact">Contact us</Link>
                </div>

               
            </div>
        </div>
    );
};

export default Footer;
