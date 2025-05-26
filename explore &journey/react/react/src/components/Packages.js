import React from "react";
import { useNavigate } from "react-router-dom";
import delhi from "../assets/delhi.jpeg";
import goa13 from "../assets/goa13.jpeg";
import bombay from "../assets/bombay.jpeg";
import kerela12 from "../assets/kerela12.jpeg";
import madhyapradesh from "../assets/madhyapradesh.jpeg";
import "./Packages.css";

function Packages() {
  const navigate = useNavigate();

  const travelPackages = [
    {
      image: delhi,
      title: "Delhi",
      price: "25000",
      days: "7 Days",
      duration: 7,
    },
    {
      image: goa13,
      title: "Goa",
      price: "20000",
      days: "10 Days",
      duration: 10, 
    },
    {
        image: bombay,
        title: "Bombay",
        price: "30000",
        days: "15 Days",
        duration: 15, 
      },
      {
        image: kerela12,
        title: "Kerela",
        price: "35000",
        days: "15 Days",
        duration: 15, 
      },
      {
        image: madhyapradesh,
        title: "Ujjain",
        price: "15000",
        days: "10 Days",
        duration: 10, 
      },
  ];

  const handleBook = (pkg) => {
    navigate("/book", { state: { package: pkg } }); 
  };

  return (
    <div className="packages-container">
      {travelPackages.map((pkg, index) => (
        <div key={index} className="package-item">
          <img src={pkg.image} alt={pkg.title} />
          <h2>{pkg.title}</h2>
          <p>Price: {pkg.price}</p>
          <p>Duration: {pkg.days}</p>
          <button onClick={() => handleBook(pkg)} className="book-btn">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Packages;  