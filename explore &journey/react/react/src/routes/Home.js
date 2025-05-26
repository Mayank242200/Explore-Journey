import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip"; 
import Trip6 from "../assets/j4.jpg";

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={Trip6}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                buttonText="Travel Plan"
                url="/packages"
                btnClass="show"
            />
            <Destination />
            <Trip /> 
            <Footer />
        </>
    );
}

export default Home;
