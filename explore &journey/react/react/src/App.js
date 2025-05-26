import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Feedback from './routes/Feedback';
import Contact from './routes/Contact';
import TermsOfService from './routes/TermsOfService';
import PrivacyPolicy from './routes/PrivacyPolicy';
import Support from './routes/Support';
import Signup from './components/Signup';
import BookingForm from './components/BookingForm';
import Packages from './components/Packages';
import Trip from './components/Trip'; 
import BookingDetails from './components/BookingDetails'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/booking-details" element={<BookingDetails />} />
            <Route path="/trip" element={<Trip />} /> 
        </Routes>
    );
}

export default App;
