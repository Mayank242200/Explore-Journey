import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    name: "",
    address: "",
    paymentMethod: "Credit Card",
    numberOfPeople: "",
    peopleDetails: [],
  });
  
  const [error, setError] = useState(""); 

  const navigate = useNavigate();
  const location = useLocation();
  const packageDetails = location.state?.package;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePeopleDetailsChange = (index, field, value) => {
    const updatedPeopleDetails = [...formData.peopleDetails];
    
    updatedPeopleDetails[index] = {
      ...updatedPeopleDetails[index],
      [field]: value,
    };
    setFormData({ ...formData, peopleDetails: updatedPeopleDetails });
  };

  const handleNumberOfPeopleChange = (e) => {
    let numberOfPeople = parseInt(e.target.value, 10);

    if (isNaN(numberOfPeople) || numberOfPeople < 1) {
      setError("Number of people cannot be 0 or less");
      setFormData({ ...formData, numberOfPeople: "", peopleDetails: [] });
      return;
    } else {
      setError(""); 
    }

  
    const updatedPeopleDetails = Array.from({ length: numberOfPeople }, () => ({
      name: "",
      address: "",
    }));

    setFormData({ ...formData, numberOfPeople, peopleDetails: updatedPeopleDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromDate = new Date(formData.fromDate);
    const toDate = new Date(formData.toDate);
    const durationInDays = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24));

    if (packageDetails) {
      if (durationInDays < packageDetails.duration) {
        alert(`Your booking must be at least ${packageDetails.duration} days long.`);
        return;
      } else if (durationInDays > packageDetails.duration) {
        alert(`Your booking cannot exceed ${packageDetails.duration} days.`);
        return;
      }
    }

    
    navigate("/booking-details", { state: { formData, packageDetails } });
  };

  return (
    <div className="booking-page-wrapper">
      <div className="booking-form-container">
        <button onClick={() => navigate("/")} className="home-btn">
          &larr; Home
        </button>
        <h2>Book Your Package</h2>
        {packageDetails && (
          <div className="package-details">
            <p><strong>Package:</strong> {packageDetails.title}</p>
            <p><strong>Price:</strong> {packageDetails.price}</p>
            <p><strong>Duration:</strong> {packageDetails.duration} days</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label>From Date:</label>
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            required
          />
          <label>To Date:</label>
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            required
          />
          <label>Number of People:</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            required
            style={{ appearance: "none" }}
          />
          {error && <p className="error">{error}</p>}
          
          {formData.peopleDetails.map((person, index) => (
            <div key={index} className="person-details">
              <label>Name (Person {index + 1}):</label>
              <input
                type="text"
                value={person.name}
                onChange={(e) =>
                  handlePeopleDetailsChange(index, "name", e.target.value)
                }
                required
              />
              <label>Address (Person {index + 1}):</label>
              <input
                type="text"
                value={person.address}
                onChange={(e) =>
                  handlePeopleDetailsChange(index, "address", e.target.value)
                }
                required
              />
            </div>
          ))}

          <label>Payment Option:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
          <button type="submit" className="submit-btn">
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
