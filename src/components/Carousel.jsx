import React, { useState } from "react";
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  const [search, setSearch] = useState("");

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{ zIndex: "9" }}>
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-2 w-75 bg-white text-dark"
              type="search"
              placeholder="Search in here..."
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn text-white bg-danger"
              onClick={() => setSearch("")}
            >
              Search
            </button>
          </div>
        </div>
        <div className="carousel-item active">
          <img
            src="https://t.ly/oEI4Q"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://t.ly/KnMmV"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://t.ly/KQn6U"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
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
