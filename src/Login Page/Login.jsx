import React from "react";

export const Login = ({ close, openSignup }) => {
  
  return (
    <>
      <style>
        {`
        input::placeholder {
          color: white;
        }
      `}
      </style>

      <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center" style={{ zIndex: 9999 }}>
        <div className="card p-4 text-white" style={{ width: "360px", background: "#111" }}>

          <div className="text-end">
            <button className="btn btn-sm btn-outline-light" onClick={close}>
              &times;
            </button>
          </div>

          <h3 className="fw-bold">Login</h3>

          <p className="text-secondary mb-4">
            New to Tech-Shop?
            <span className="text-primary ms-1" style={{ cursor: "pointer" }} onClick={openSignup}>
              Create an account
            </span>
          </p>

          <input type="email" placeholder="Email" className="form-control mb-3 bg-dark text-white border-secondary" />

          <input type="password" placeholder="Password" className="form-control mb-3 bg-dark text-white border-secondary" />

          <button className="btn w-100 mb-3" style={{ background: "#d50000", color: "#fff" }}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
