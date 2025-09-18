import React from "react"; 
import { Link } from "react-router-dom";
import "./../Styles/mainBody.css";

const MainBody = () => {
  return (
    <div className="main-body">

      {/* Garbage Complaint */}
      <Link to="/garbage" className="complaint-link">
        <div className="complaint-box garbage">
          <div className="overlay">
            <h2>GARBAGE COMPLAINT</h2>
            <p>Report uncollected garbage or waste issues in your area.</p>
          </div>
        </div>
      </Link>

      {/* Streetlight Failures */}
      <Link to="/streetlight" className="complaint-link">
        <div className="complaint-box streetlight">
          <div className="overlay">
            <h2>STREETLIGHT FAILURES</h2>
            <p>Report non-working or flickering streetlights in your locality.</p>
          </div>
        </div>
      </Link>

      {/* Potholes */}
      <Link to="/potholes" className="complaint-link">
        <div className="complaint-box potholes">
          <div className="overlay">
            <h2>POTHOLES</h2>
            <p>Report potholes or damaged roads for quick fixing.</p>
          </div>
        </div>
      </Link>

      {/* Other complaint boxes (no link yet) */}
      <div className="complaint-box watersupply">
        <div className="overlay">
          <h2>WATER SUPPLY ISSUES</h2>
          <p>Report water shortage, leakages, or pipeline issues.</p>
        </div>
      </div>

      <div className="complaint-box pollution">
        <div className="overlay">
          <h2>POLLUTION</h2>
          <p>Report air, water, or noise pollution in your area.</p>
        </div>
      </div>

      <div className="complaint-box parking">
        <div className="overlay">
          <h2>TRAFFIC & PARKING ISSUES</h2>
          <p>Report illegal parking, traffic signal problems, or congestion.</p>
        </div>
      </div>

      <div className="complaint-box transport">
        <div className="overlay">
          <h2>PUBLIC TRANSPORT COMPLAINTS</h2>
          <p>Report issues with buses, train delays, or bus stops.</p>
        </div>
      </div>

      <div className="complaint-box drainage">
        <div className="overlay">
          <h2>DRAINAGE & SEWAGE PROBLEMS</h2>
          <p>Report blocked drains, waterlogging, or sewage overflow.</p>
        </div>
      </div>

      <div className="complaint-box safety">
        <div className="overlay">
          <h2>PUBLIC SAFETY & SECURITY</h2>
          <p>Report unsafe areas, street crimes, or broken cameras.</p>
        </div>
      </div>

      <div className="complaint-box parks">
        <div className="overlay">
          <h2>PARKS & PUBLIC SPACES</h2>
          <p>Report broken benches, playground damage, or unclean parks.</p>
        </div>
      </div>

      <div className="complaint-box pest">
        <div className="overlay">
          <h2>ANIMAL & PEST CONTROL</h2>
          <p>Report stray animals, pests, or dead animals in public areas.</p>
        </div>
      </div>

      <div className="complaint-box illegal">
        <div className="overlay">
          <h2>ILLEGAL ENCROACHMENTS</h2>
          <p>Report unauthorized shops or constructions blocking pathways.</p>
        </div>
      </div>

    </div>
  );
};

export default MainBody;
