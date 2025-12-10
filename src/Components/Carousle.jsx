const Carousle = () => {
  const slides = [
    {
      title: "Sony CH710N Headphones",
      desc: "Wireless Noise Cancelling | 35 Hours Battery Life",
      price: "₹7,999",
      img: "/images/products/sonyCh710n-1.png",
    },
    {
      title: "Boat Airdopes 131",
      desc: "Bluetooth Earbuds | 60 Hours Playback | Fast Charging",
      price: "₹1,099",
      img: "/images/products/boat131-1.png",
    },
    {
      title: "JBL 100 Headphones",
      desc: "Powerful Bass | Foldable Design | Comfortable Fit",
      price: "₹2,499",
      img: "/images/products/jbl100-1.png",
    },
  ];

  return (
    <div
      id="heroCarousel"
      className="carousel slide bg-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators bg-dark">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-md-6 text-white">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <h4>{slide.price}</h4>
                  <button className="btn btn-danger mt-2">Add to Cart</button>
                </div>

                <div className="col-md-6 text-center">
                  <img
                    src={slide.img}
                    className="img-fluid"
                    style={{ height: "350px", objectFit: "contain" }}
                    alt="product"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousle;
