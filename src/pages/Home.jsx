import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        response = await response.json(); // Parse response body as JSON
        let responseData = [response.food_items, response.foodCategory];
        setFoodCat(responseData[1]);
        setFoodItem(responseData[0]);
      } else {
        console.error("Failed to fetch data:", response.status); // Log error if response is not OK
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Log any network errors
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar />
      <div>
        <div>
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
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3" key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem.length > 0 ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => (
                      <div
                        key={filterItems._id}
                        className="col-12 col-md-6 col-lg-3"
                      >
                        <Card
                          foodItem={filterItems}
                          options={filterItems.options[0]}
                        ></Card>
                      </div>
                    ))
                ) : (
                  <div>No items available</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No categories available</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
