import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainBody from "./components/MainBody";
import Login from "./Features/Login";
import Signup from "./Features/Signup";

// Complaint Pages
import GarbageCom from "./Features/GarbageCom";
import StreetlightCom from "./Features/StreetlightCom";

// Profile Page
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />     
              <MainBody />   
            </>
          }
        />

        {/* Garbage Complaint Page */}
        <Route
          path="/garbage"
          element={
            <>
              <Header />
              <GarbageCom />
            </>
          }
        />

        {/* Streetlight Failures Page */}
        <Route
          path="/streetlight"
          element={
            <>
              <Header />
              <StreetlightCom />
            </>
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />

        {/* Signup Page */}
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <Signup />
            </>
          }
        />

        {/* Profile Page (Protected) */}
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />  {/* Profile component itself handles redirect if not logged in */}
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
