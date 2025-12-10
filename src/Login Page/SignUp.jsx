import React from "react";

export const SignUp = ({ close, openLogin }) => {
  return (
    <>
      <style>
        {`
        input::placeholder {
          color: #e6e6e6;
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

          <h3 className="fw-bold">Signup</h3>

          <p className="text-secondary mb-4">
            Already have an account?{" "}
            <span className="text-primary" style={{ cursor: "pointer" }} onClick={openLogin}>
              Login
            </span>
          </p>

          <input className="form-control mb-3 bg-dark text-white border-secondary" placeholder="Username" />
          <input className="form-control mb-3 bg-dark text-white border-secondary" placeholder="Email" />
          <input type="password" className="form-control mb-3 bg-dark text-white border-secondary" placeholder="Password" />
          <input type="password" className="form-control mb-3 bg-dark text-white border-secondary" placeholder="Confirm Password" />

          <button className="btn w-100" style={{ background: "#d50000", color: "#fff" }}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};
