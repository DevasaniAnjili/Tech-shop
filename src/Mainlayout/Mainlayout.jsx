import { useState } from "react";
import { Routes, Route } from "react-router";
import Carosule from "../Components/Carousle";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import { Login } from "../Login Page/Login";
import { SignUp } from "../Login Page/SignUp";

export const Mainlayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
      {/* HEADER */}
      <Header openLogin={() => setShowLogin(true)} />

      {/* LOGIN & SIGNUP POPUPS */}
      {showLogin && (
        <Login
          close={() => setShowLogin(false)}
          openSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignUp
          close={() => setShowSignup(false)}
          openLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* ROUTES */}
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Carosule />
              <Home />
            </>
          }
        />

        {/* CART PAGE */}
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
