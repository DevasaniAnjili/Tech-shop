import React, { useState } from "react";
import productsData from "../ProductsData/ProductsData";

const Home = () => {
  // Category Filter for Top Products
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtered Top Products
  const filteredProducts =
    activeFilter === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeFilter);

  return (
    <div style={{ backgroundColor: "#0d0d0d", color: "white" }}>
      
   
      <div className="container py-4">
        <img
          src="/images/products/banner1.png"
          alt="Main Banner"
          style={{
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* ===================== FEATURED PRODUCTS ===================== */}
      <div className="container mt-5">
        <h3 className="text-center fw-bold mb-4">Featured Products</h3>

        <div className="row g-4">
          {productsData.slice(0, 4).map((item) => (
            <div className="col-md-3 col-6" key={item.id}>
              <div
                style={{
                  background: "#111",
                  padding: "15px",
                  borderRadius: "12px",
                  textAlign: "center",
                  border: "1px solid #222",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "180px", objectFit: "contain" }}
                />
                <h6 className="mt-2">{item.title}</h6>

                <p className="m-0 fw-bold text-danger">₹{item.finalPrice}</p>
                <p className="text-secondary" style={{ textDecoration: "line-through" }}>
                  ₹{item.originalPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== TOP PRODUCTS WITH FILTER ===================== */}
      <div className="container mt-5">

        <h3 className="text-center fw-bold mb-4">Top Products</h3>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          {["All", "Headphones", "Earbuds", "Earphones", "Neckbands"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  background: activeFilter === cat ? "#e70404" : "#222",
                  color: activeFilter === cat ? "white" : "#aaa",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Product Cards */}
        <div className="row g-4">
          {filteredProducts.map((p) => (
            <div className="col-md-3 col-sm-6" key={p.id}>
              <div
                style={{
                  background: "#111",
                  borderRadius: "12px",
                  padding: "15px",
                  border: "1px solid #222",
                  textAlign: "center",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "contain",
                  }}
                />

                <h6 className="mt-3">{p.title}</h6>

                <p className="text-danger fw-bold">₹{p.finalPrice}</p>

                <p
                  className="text-secondary"
                  style={{ textDecoration: "line-through" }}
                >
                  ₹{p.originalPrice}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "8px",
                    background: "#e70404",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== OUR ADVANTAGES ===================== */}
      <div className="container mt-5 py-5 text-center">
        <h4 className="fw-bold mb-4">Our Advantages</h4>

        <div className="row text-center g-4">
          <div className="col-md-3 col-6">
            <img src="/images/products/delivery.png" width="60" />
            <p className="mt-2">Express Delivery</p>
          </div>

          <div className="col-md-3 col-6">
            <img src="/images/products/warranty.png" width="60" />
            <p className="mt-2">Brand Warranty</p>
          </div>

          <div className="col-md-3 col-6">
            <img src="/images/products/deals.png" width="60" />
            <p className="mt-2">Exciting Deals</p>
          </div>

          <div className="col-md-3 col-6">
            <img src="/images/products/secure.png" width="60" />
            <p className="mt-2">Secure Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
