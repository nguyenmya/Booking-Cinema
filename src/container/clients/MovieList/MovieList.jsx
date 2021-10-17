/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./MovieList.scss";
import { actFetchAllMovieApi } from "./module/actions";
import { Link } from "react-router-dom";
import "./module/reducers";
import "../MovieList/MovieList.scss";
import Slider from "react-slick";
import { Button } from "antd";
import { PHIM_SAP_CHIEU, PHIM_DANG_CHIEU } from "./module/types";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  className: "center variable-width",
  infinite: true,
  centerPadding: "50px",
  slidesToShow: 4,
  speed: 500,
  rows: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function MovieList(props) {
  const dispatch = useDispatch();
  const { listMovie } = useSelector((state) => state.movieReducer);
  const [state, setState] = useState(true);

  console.log("object", listMovie);
  useEffect(() => {
    dispatch(actFetchAllMovieApi());
  }, []);

  return (
    <div>
      <div className="container  movieList">
        <div className="text-center mb-20">
          <Button
            className="mb-30"
            type="primary"
            danger
            onClick={() => {
              setState(true);
              dispatch({ type: PHIM_DANG_CHIEU });
            }}>
            Đang Chiếu
          </Button>

          <Button danger onClick={() => dispatch({ type: PHIM_SAP_CHIEU })}>
            Sắp Chiếu
          </Button>
        </div>

        <Slider {...settings}>
          {listMovie.map((movie, index) => {
            return (
              <div
                className="  movieList__card   "
                height={50}
                key={movie.maPhim}>
                <img
                  className="card-img-top movieList__imgs"
                  height={300}
                  width={200}
                  backgroundposition="center"
                  src={movie.hinhAnh}
                  alt={movie.biDanh}
                />
                <div className="card-body">
                  <h5 className="card-title h-21"> {movie.tenPhim.length > 10 ? (
                      <span>{movie.tenPhim.slice(0, 10)}...</span>
                    ) : (
                      <span>{movie.tenPhim}</span>
                    )}</h5>
                  <p className="card-text text-truncate">
                    {movie.moTa.length > 100 ? (
                      <span>{movie.moTa.slice(0, 100)}...</span>
                    ) : (
                      <span>{movie.moTa}</span>
                    )}
                  </p>

                  <button className="btn btn-dark">
                    <Link to={`/movie-detail/${movie.maPhim}`}>
                      View detail
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
