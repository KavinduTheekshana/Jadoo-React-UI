import React from "react";
import logo from "../../assets/logo/Logo.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="jadoo-navbar">
      <div className="jadoo-navbar-links">
        <div className="jadoo-navbar-logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="jadoo-navbar-links-container">
          <div className="jadoo-navbar-links-item">
            <nav className="stroke">
              <ul className="jadoo-navbar-links-list">
                <li><a href="#Desitnations" target="_blank" rel="Desitnations">Desitnations</a></li>
                <li><a href="#Hotels" target="_blank" rel="Hotels">Hotels</a></li>
                <li><a href="#Flights" target="_blank" rel="Flights">Flights</a></li>
                <li><a href="#Bookings" target="_blank" rel="Bookings">Bookings</a></li>
                <li><a href="#Login" target="_blank" rel="Login">Login</a></li>
                <li><button className="btn-outline" href="#Signup" target="_blank" rel="Signup">Sign up</button></li>
              </ul>
            </nav>
            {/* <p><a href="#Desitnations" target="_blank" rel="Desitnations">Desitnations</a></p>
            <p><a href="#Hotels" target="_blank" rel="Hotels">Hotels</a></p>
            <p><a href="#Flights" target="_blank" rel="Flights">Flights</a></p>
            <p><a href="#Bookings" target="_blank" rel="Bookings">Bookings</a></p>
            <p><a href="#Login" target="_blank" rel="Login">Login</a></p>
            <p><a href="#Signup" target="_blank" rel="Signup">Sign up</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
