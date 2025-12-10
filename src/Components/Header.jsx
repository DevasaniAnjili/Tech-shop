import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export const Header = ({ openLogin }) => {
   const [showSearch, setShowSearch] = useState(false);
  return (
    <>
    <header   style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backgroundColor: "#24292F",  
  }}>
      <nav className="navbar navbar-dark bg-dark px-4">
        <Link className="navbar-brand fw-bold" to="/">
          Tech-Shop
        </Link>

        <div className="d-flex align-items-center gap-4">
     
            <span
              className="text-white fs-5"
              style={{ cursor: "pointer" }}
              onClick={() => setShowSearch(true)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>

          <Link to="/cart" className="text-white fs-5">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <span
            className="text-white fs-5"
            style={{ cursor: "pointer" }}
            onClick={openLogin}
          >
            <i className="fa-regular fa-user"></i>
          </span>
        </div>
      </nav>
    </header>
     {showSearch && <Search closePopup={() => setShowSearch(false)} />}
    </>
  );
};
