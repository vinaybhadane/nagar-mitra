import React, { useState } from "react";
import "../FeaturesStyle/streetlightCom.css";

const StreetlightCom = () => {
  const [location, setLocation] = useState("");

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`);
        },
        (error) => {
          alert("Unable to retrieve your location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="form-container">
      <h1>Streetlight Failures</h1>
      <form className="complaint-form">
        {/* Title / Short Description */}
        <div className="form-group">
          <label>
            Short Description
          </label>
          <input type="text" placeholder="Brief title of the streetlight issue" />
        </div>

        {/* Detailed Description */}
        <div className="form-group">
          <label>Detailed Description</label>
          <textarea rows="5" placeholder="Describe the problem, location, and details"></textarea>
        </div>

        {/* Photo / Video Upload */}
        <div className="form-group">
          <label>Photo / Video Upload</label>
          <input type="file" multiple />
        </div>

        {/* Optional Voice Note */}
        <div className="form-group">
          <label>Voice Note (Optional)</label>
          <input type="file" accept="audio/*" />
        </div>

        {/* GPS Location */}
        <div className="form-group gps-group">
          <label>Automatic GPS Location</label>
          <button type="button" className="gps-btn" onClick={handleGetLocation}>
            Get Location
          </button>
          {location && <p className="location-text">{location}</p>}
        </div>

        {/* Manual Address Input */}
        <div className="form-group">
          <label>Manual Address Input</label>
          <input type="text" placeholder="Street, landmark, city, pin code" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit Complaint</button>
      </form>
    </div>
  );
};

export default StreetlightCom;
