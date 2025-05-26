import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingDetails.css";

function BookingDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, packageDetails } = location.state;

  const { fromDate, toDate, paymentMethod, peopleDetails } = formData;

  return (
    <div className="booking-details-page">
      <h2>Booking Details</h2>
      {packageDetails && (
        <div className="package-summary">
          <p><strong>Package:</strong> {packageDetails.title}</p>
          <p><strong>Price:</strong> {packageDetails.price}</p>
          <p><strong>Duration:</strong> {packageDetails.days}</p>
        </div>
      )}

      <table className="booking-table">
        <thead>
          <tr>
            <th>Person</th>
            <th>Name</th>
            <th>Address</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {peopleDetails.map((person, index) => (
            <tr key={index}>
              <td>Person {index + 1}</td>
              <td>{person.name}</td>
              <td>{person.address}</td>
              <td>{fromDate}</td>
              <td>{toDate}</td>
              <td>{paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate("/")} className="home-btn">
        &larr; Home
      </button>
      <button onClick={() => navigate(-1)} className="back-btn">
        &larr; Back
      </button>
    </div>
  );
}

export default BookingDetails;
