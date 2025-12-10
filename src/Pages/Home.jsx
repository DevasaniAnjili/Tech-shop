import React from "react";

const Home = () => {
  return (
    <div className="home-container">

      {/* Banner Section */}
      <div className="banner">
        <img
          src="/images/products/banner1.png"
          className="banner-img"
          alt="Banner"
        />
      </div>

      {/* Categories Section */}
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4">Shop by Category</h2>

        <div className="row text-center g-4">
          <div className="col-md-3 col-6">
            <div className="category-card">
              <img src="/images/products/cat1.png" alt="Category 1" />
              <p className="mt-2">Category 1</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="category-card">
              <img src="/images/products/cat2.png" alt="Category 2" />
              <p className="mt-2">Category 2</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="category-card">
              <img src="/images/products/cat3.png" alt="Category 3" />
              <p className="mt-2">Category 3</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="category-card">
              <img src="/images/products/cat4.png" alt="Category 4" />
              <p className="mt-2">Category 4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4">Featured Products</h2>

        <div className="row g-4">
          <div className="col-md-3 col-6">
            <div className="product-card">
              <img src="/images/products/p1.png" alt="Product 1" />
              <h6 className="mt-2">Product 1</h6>
              <p>₹799</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="product-card">
              <img src="/images/products/p2.png" alt="Product 2" />
              <h6 className="mt-2">Product 2</h6>
              <p>₹999</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="product-card">
              <img src="/images/products/p3.png" alt="Product 3" />
              <h6 className="mt-2">Product 3</h6>
              <p>₹559</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="product-card">
              <img src="/images/products/p4.png" alt="Product 4" />
              <h6 className="mt-2">Product 4</h6>
              <p>₹499</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .home-container {
          background-color: #fafafa;
          padding-bottom: 40px;
        }

        .banner-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .category-card, 
        .product-card {
          background: white;
          border-radius: 12px;
          padding: 15px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
          transition: 0.3s ease;
          cursor: pointer;
        }

        .category-card:hover, 
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        .category-card img,
        .product-card img {
          width: 100%;
          border-radius: 10px;
        }

        .product-card p {
          margin: 0;
          font-weight: bold;
          color: #444;
        }
      `}</style>
    </div>
  );
};

export default Home;
