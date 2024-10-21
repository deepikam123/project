// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"; // Add Home component
import Education from "./Education";
import About from "./About";
import Contact from "./Contact"; // Add Contact component

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* This will stay constant across all pages */}
        <Routes>
          <Route path="/" element={<Education />} /> {/* Home Route */}
          <Route path="/about" element={<About />} /> {/* About Route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
