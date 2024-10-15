import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutUs from "./pages/Aboutus";
import HeroSection from "./pages/hero";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
            <Route path="/shop"></Route>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact"></Route>
            <Route path="/cart"></Route>
            <Route path="/product/:id" />
            <Route path="/user" />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
