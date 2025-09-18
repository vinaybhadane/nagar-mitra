import React, { useState } from "react";
import "../FeaturesStyle/garbageCom.css";

const GarbageCom = () => {
  const [gpsLocation, setGpsLocation] = useState({ lat: "", lng: "" });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGpsLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Garbage Complaint</h1>
        <form className="complaint-form">
          {/* Complaint Title */}
          <div className="form-group">
            <label htmlFor="title">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z"/>
              </svg>
              Complaint Title
            </label>
            <input type="text" id="title" placeholder="e.g., Garbage not collected in street X" required />
          </div>

          {/* Detailed Description */}
          <div className="form-group">
            <label htmlFor="description">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4z"/>
              </svg>
              Detailed Description
            </label>
            <textarea id="description" rows="4" placeholder="Provide frequency, type of waste, etc." required></textarea>
          </div>

          {/* Photo / Video Upload */}
          <div className="form-group">
            <label htmlFor="media">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-3-7l-4 5-3-4-4 5h11z"/>
              </svg>
              Upload Photo / Video
            </label>
            <input type="file" id="media" accept="image/*,video/*" />
          </div>

          {/* Optional Voice Note */}
          <div className="form-group">
            <label htmlFor="voice">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm5 6a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2z"/>
              </svg>
              Optional Voice Note
            </label>
            <input type="file" id="voice" accept="audio/*" />
          </div>

          {/* GPS Location */}
          <div className="form-group gps-group">
            <button type="button" className="gps-btn" onClick={handleGetLocation}>
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-7v2a9 9 0 1 0 0 18v2a11 11 0 1 1 0-22z"/>
              </svg>
              Capture GPS Location
            </button>
            {gpsLocation.lat && (
              <p>Latitude: {gpsLocation.lat.toFixed(5)}, Longitude: {gpsLocation.lng.toFixed(5)}</p>
            )}
          </div>

          {/* Manual Address Input */}
          <div className="form-group">
            <label htmlFor="address">Manual Address (Street, Landmark, City, Pin)</label>
            <input type="text" id="address" placeholder="e.g., MG Road, Pune, Maharashtra, 411001" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit Complaint
          </button>
        </form>
      </div>
    </>
  );
};

export default GarbageCom;