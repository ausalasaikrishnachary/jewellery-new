import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Collections from "./Pages/Collections/Collections";
import CustomJewellery from "./Pages/Custom jewellery/CustomJewellery";
import Header from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Gold from "./Pages/Collections/Gold/Gold";
import Diamond from "./Pages/Collections/Diamond/Diamond";
import Silver from "./Pages/Collections/Silver/Silver";

function App() {
  return (
    <Router>
      < Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/collections" exact element={<Collections />} />
        <Route path="/customJewellery" exact element={<CustomJewellery />} />
        <Route path="/contactUs" exact element={<ContactUs />} />
        <Route path="/collections/gold" exact element={<Gold />} />
        <Route path="/collections/diamond" exact element={<Diamond />} />
        <Route path="/collections/silver" exact element={<Silver />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
