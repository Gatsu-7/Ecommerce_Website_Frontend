import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./pages/hero";
import Features from "./pages/features";
import Promotions from "./pages/Promotions";
import FeaturedProducts from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <Promotions />
        <Features />
        <FeaturedProducts />

        <main>
          <Routes>
            <Route path="/"></Route>
            <Route path="/shop"></Route>
            <Route path="/about"></Route>
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
