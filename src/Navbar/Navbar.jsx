import React from "react";
import { Link } from "react-router-dom";
import pharmawise from '../Assets/pharmawise.png';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={pharmawise} alt="logo" />
        </Link>
        <div className="navbar-routes">
          <Link to="#" className="navbar-item">MEDICINES</Link>
          <Link to="#" className="navbar-item">LAB TESTS <span>SAFE</span></Link>
          <Link to="#" className="navbar-item">CONSULT DOCTORS</Link>
          <Link to="#" className="navbar-item">CARE PLAN <span>SAVE MORE</span></Link>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-login navbar-element">
          <div className="logout-container">
            <p>Log Out</p>
          </div>
        </div>
        <Link to="#" className="navbar-element">Offers</Link>
        <Link to="/checkout" className="navbar-element cart-container">
          <img src="https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg" alt="Cart" />
        </Link>
        <Link to="#" className="navbar-element">Need Help?</Link>
      </div>
    </div>
  );
};

export default Navbar;
