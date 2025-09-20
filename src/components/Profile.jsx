import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // ✅ must include Bearer
          },
        });

        if (!res.ok) {
          // token invalid / expired
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        const data = await res.json();
        setUser(data); // directly set user, not data.user
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUser();
  }, [token, navigate]);

  if (!user) {
    return <div className="profile-loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Welcome, {user.firstName}!</h1>
      <div className="profile-info">
        <p><strong>Full Name:</strong> {user.firstName} {user.middleName || ""} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>Birth Date:</strong> {user.birthDate}</p>
      </div>
    </div>
  );
};

export default Profile;
