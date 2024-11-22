import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Schemes from "./Pages/OfflineStore/Schemes/Schemes";
import Seller from "./Pages/OnlineStore/Seller/Seller";
// import User from "./Pages/OnlineStore/User/User";
import Contact from "./Pages/Contact/Contact";
// import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import AboutUs from "./Pages/Aboutus/AboutUs";
import Brands from "./Pages/Brands/Brands";
import Enterprise from "./Pages/Enterprise/Enterprise";


function App() {
  return (
    <Router>
      {/* < Header /> */}
      < Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/schemes" exact element={<Schemes />} />
        <Route path="/seller" exact element={<Seller />} />
        {/* <Route path="/user" exact element={<User />} /> */}
        <Route path="/contactUs" exact element={<Contact/>} />
        <Route path="/AboutUs" exact element={<AboutUs/>} />
        <Route path="/Brands" exact element={<Brands/>} />
        <Route path="/Enterprise" exact element={<Enterprise/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
