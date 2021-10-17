import Carousel from "components/carousel/Carousel";
import Header from "components/Header/Header";
import React, { Component } from "react";
import MovieInfor from "../MovieInfor/MovieInfor";
import MovieList from "../MovieList/MovieList";
class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <Carousel />
          <div className="container">
          </div>
        </div>
        <MovieList />
        <MovieInfor/>
      </>
    );
  }
}

export default Home;
