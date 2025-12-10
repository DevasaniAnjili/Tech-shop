import React,{useState} from "react";
import productsData from "../ProductsData/ProductsData";
import { Link } from "react-router";

const Search = ({ closePopup }) => {
  const [query, setQuery] = useState("");

  const filtered = productsData.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
      onClick={closePopup}
    >
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-between mb-3">
          <h4>Search Products</h4>
          <button
            className="btn btn-danger btn-sm"
            onClick={closePopup}
          >
            X
          </button>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div style={{ maxHeight: "250px", overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filtered.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="d-block p-2 text-dark border-bottom"
                onClick={closePopup}
              >
                {item.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
