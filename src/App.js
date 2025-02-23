import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutUs from "./pages/Aboutus";
import HeroSection from "./pages/hero";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/Login/Register";
import ProductListingPage from "./pages/ProductList";
import FAQPage from "./pages/faq";
import ReturnsAndExchanges from "./pages/returnsndexchanges";
import ShippingAndDelivery from "./pages/shippingnddelivery";
import PrivacyPolicy from "./pages/privacy";
import TermsOfService from "./pages/terms";
import CancellationPolicy from "./pages/cancellation";
import ProductDetail from "./pages/Products/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
            <Route path="/shop" element={<ProductListingPage />}></Route>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart"></Route>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/returns_and_exchanges"
              element={<ReturnsAndExchanges />}
            />
            <Route
              path="/shipping_and_delivery"
              element={<ShippingAndDelivery />}
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/termsofservice" element={<TermsOfService />} />
            <Route path="/cancellation" element={<CancellationPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
