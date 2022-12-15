import React from "react";
import { Link } from "react-router-dom";
import CartBtn from './CartBtn'
import logo from '../image/logo.jpg'
const Header = () => {
  return (
    <>
      <nav className="header navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <img src={logo} height="80px" alt="shopping-logo" />
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Products">
                  Product
                </Link>
              </li>
            </ul>
            <h1 className="header-market">
              <span className="color-word">Online</span> Market
            </h1>
            {/* <Link
              className="header-market navbar-brand mx-auto fw-bold "
              to="/"
            >
              Online Market
            </Link> */}
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
