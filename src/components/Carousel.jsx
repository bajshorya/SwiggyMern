import React from "react";

import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://t.ly/oEI4Q"
            style={{ filter: "brightness(30%)" }}
            className="d-block w-100 h-70 "
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://t.ly/KnMmV"
            style={{ filter: "brightness(30%)" }}
            className="d-block w-100 h-70"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://t.ly/KQn6U"
            style={{ filter: "brightness(30%)" }}
            className="d-block w-100 h-70"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
