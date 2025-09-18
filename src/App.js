import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainBody from "./components/MainBody";

// Complaint Pages
import GarbageCom from "./Features/GarbageCom";
import StreetlightCom from "./Features/StreetlightCom";

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

      </Routes>
    </Router>
  );
}

export default App;
