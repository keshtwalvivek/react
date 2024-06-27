import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import PlaceOrder from "./components/pages/placeOrder/PlaceOrder";
import Cart from "./components/pages/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AppDawnload from "./components/AppDawnload/AppDawnload.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDawnload />
      <Footer />
    </>
  );
};

export default App;
