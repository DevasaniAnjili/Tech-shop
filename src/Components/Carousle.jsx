 const Carosule = () => {
  return (
    <div
      id="mainCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ background: "#111" }}
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="/images/products/banner1.png" className="d-block w-100" alt="banner1" />
        </div>

        <div className="carousel-item">
          <img src="/images/products/banner2.png" className="d-block w-100" alt="banner2" />
        </div>

        <div className="carousel-item">
          <img src="/images/products/banner3.png" className="d-block w-100" alt="banner3" />
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};
export default Carosule;

