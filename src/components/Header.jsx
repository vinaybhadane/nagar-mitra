import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Close menu when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span className="text-orange-500 font-bold">Nagar</span>
        <span className="text-green-600 font-bold">Mitra</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="nav-links hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>

        {isLoggedIn ? (
          <>
            <Link to="/profile" className="login-btn"> {/* View Profile in same style as login */}
              {/* Profile SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A7 7 0 1118.879 6.196a7 7 0 01-13.758 11.608zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View Profile
            </Link>
            <button onClick={handleLogout} className="signup-btn" style={{backgroundColor: "#ef4444"}}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </>
        )}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-50">
        {!isOpen ? (
          <button onClick={() => setIsOpen(true)} className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        ) : (
          <button onClick={() => setIsOpen(false)} className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

        {isLoggedIn ? (
          <>
            <Link to="/profile" className="login-btn" onClick={() => setIsOpen(false)}>
              View Profile
            </Link>
            <button onClick={() => {handleLogout(); setIsOpen(false);}} className="signup-btn" style={{backgroundColor: "#ef4444"}}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/signup" className="signup-btn" onClick={() => setIsOpen(false)}>Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
