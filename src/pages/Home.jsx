import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
      </div>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
