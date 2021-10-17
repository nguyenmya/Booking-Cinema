import React, { Component } from "react";
import { actFetchMovieDetailApi } from "./module/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieDetail.scss";
import { Tabs, Button } from "antd";
const { TabPane } = Tabs;

class MovieDetail extends Component {
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.fetchMovieDetail(movieId); //1 call ben action
  }

  render() {
    const { movieDetail } = this.props;
    return (
      <div className=" movie__detail__content">
        <div className="movie__detail__img">
          <img src={movieDetail.hinhAnh} alt="" />
          <div className="movie__detail__pay">
            <h1>{movieDetail.tenPhim}</h1>
            <p>English/VietNamese</p>
            <span>{movieDetail.maNhom}</span>
          </div>
        </div>
        <div className="movie__detail__bg">
          <div className="container movie__detail__center">
            <div className="row movie__detail__infor">
              <div className="col-4 col-lg-4 movie__detail_img"></div>
              <div className="col-2 col-2 col-md-2 col-lg-2 movie__detail__title">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAD1UlEQVRIiZ2WS2wbVRSGv+vHJDRx0pDEaR5NENAgtUBkqQIqUEFEhRVCCBZZIpAAIVZESLBkhyqBkIAFEoJF1zyKhAAhoIuSiA1uEUyhtZ1A4xAaN7bzIMrYnoPuPBLPeFISzuZ67sz9zj//ueeOFXsIMUkCJ4FfgUeBGXWUK3tZGxli0o47vismIiYL3rgsJv03Whu7AfQcUBWTKeBub7rbG28GcmLyqpjcH7U+0gox+QR4wrtchkh1W0AbsKqObieMViwmh7UK4EF/ahcoHlRHSkze8G0LKBaTCeBNatxBkhEHt6eyArYrz/4q/mHjTHzayFqVHcUVdRqYdKDsA+oT1hVqwn5GHZarVsZ41pm2Msadtqkm94FqjQ5BDQqxU41O4nxgZYyHdL5J+7N4XFb2IzMU3lJ1TKBT+8jxBFCUoqI+nST2cIPYSRs1JvviyoLCPhfD/jYOljN1VVkZIwP8FHiyS1C3CWpIUD3AAQEtwQA2XE9lDVhU2AWlaxTOdY8Gd6uRWyuxx5+m8dFp+Gf9/9mRNIhNvYj88DVSuNTvpLLu6y4lZyu9rJapv/QYcvlnVHoY+etPaNR3h/WmYbWCGr2d+HtfoNJD1CZH1o3viqmE88DWZo7SUi99h1DjE8jcbyQ+vwT1GnJtEdYq1J97xEmSeOcspA6iBkeho4vaqVHUkbscKBtrUF7Oa2TCy52X4ty9qu8Q9A24D9RrkEiihsaAMVSqG1mrojIPBFWvlkFDdREX5/UwR1NL56ToTOLAdVRX/ttXXY+ahepJu+AFh1loBhcozrm/+gbdhyrXWziqsytwLeVl98fAsDu6igNgbUVQcbkUpLYfABXaVl5y1TvgKS7sbgX9vuIQOGm0WuHb5a9xFee3wUbWWmJxfrM5O9VWK3QxA1b4iv23dMXNNytG/l7I+TuBnn6oRBTvpo6QFSUw2qHTPeelOL9oZK2tABjbzjsN4ahOt1qRavlIIOUSyrOB0pLuh7x/r/kLkmfb56HW4kWF9tizwSv+XCRYigVP8QAS5XHYiur1bcUeuBAFznkb3K1ytRyE6F2RSASmnOL5xS7u7OEw+KJcmGlg2yjdJCHFSu/jcDgeu+1sX5jRw48tYCNrXZOLs+83XpmCtjanMC0RbhCdPNVN4/XnkdlvzhhZ67J/KxFa+7L9/dk05798Sp8BzvE57v9X0S29szN0Q0l1hcbbr8HmxsfAC4E3bJUFVsZ4EpgGTqjhW2BsHOZ/dxccO478cQXJ/aK36HngLSNrfdryclHgpgT6dDkBHAEOetO6qvqVZ5yOjQrgX5QGk4mlocvcAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span className="percent text-white  font-weight-bold text-center">
                  88%
                </span>
                <p>Tomatometer</p>
              </div>
              <div className="col-2 movie__detail__title">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAACtUlEQVRIib2WTUhUURTHf+9l3tHyKyx1ZYpECxlqokUlQlEugkK3QSFEgVAxVLSxD2oZBRO4ahEtwkXQsgKpNBcSJLeaFkpmq/Ij7UNHnTvO9CauvWeTmvNm1PffPObMmfObe+955/5xIzPkN8yQv9pVspt6aRNC/lrgFdBhhvxmSrzCDPnLs4EaLqC68BtAP5uATuA+0GinPAZOWMHwd7fQnGVgRcBeIA+4BrQBF4ELQF1Kagcw4xbIUivV5wdcskF5aX7fD9wGyoBp4APw0gqGpzOFXgFOAgXApkxWYEuv+h7QagXDk66gNrgYaAFOAVVuabpYVSQ+UfsjZlVOxYdv9o4dFVINLgs1Q/51wDl7a4uceEHcSkbWm/O5ZdFE8tinSOJ9ichJGhg1k7PsG42yf2SGUvUrtWRM1xNS3V0SajfOQ6AhNWH7xGyyvWvIaK6vIFwi5mKHP0/z6MUXtxug1SakOut8mO9eKxieiO7ydQ4U5jb0FecSyTHZOhVnz1dlGCQZyfuTuiFh0fruWyZArTOxgG9cSHX9n5XGAr6DdvsvOufu8nyu7ixl93iUlv6fVEfimUK1ksABIVWXYQP1vvVl0jRZ6i0QcMbacQ+AWjuAegfa7AHQUZMRC/jygYib4b9K6tGgGg+BWpVmlqNuJdqooVn1/wo0Zto3hZcaNIVUerwMewjtdRroqYfQZw603SOgviW656BCqufAaw+gt4RUVur7GbSH8lqpx/ZZf4eCkEoHz68RULuHRiFVgoWTSEgVsldsrSJQ6iEvpBpzAovGn5DqDnAIGF0hTB+VrlUnpBpK/eK/ZjsW8Gn7cgM4DfgyBD4BLguptElfpLQOPxbwbbavviO2+dbmbaH0WekLWrv9B0Kqj8vVTAtd8AdygW3AFqAQmAJGgAEhlXZ+6QX8BhA9zCEQOoADAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span className="percent text-white  font-weight-bold text-center">
                  88%
                </span>
                <p>Tomatometer</p>
              </div>
              <div className="col-2 movie__detail__title">
                <i className="fa fa-heart text-danger"></i>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAD1UlEQVRIiZ2WS2wbVRSGv+vHJDRx0pDEaR5NENAgtUBkqQIqUEFEhRVCCBZZIpAAIVZESLBkhyqBkIAFEoJF1zyKhAAhoIuSiA1uEUyhtZ1A4xAaN7bzIMrYnoPuPBLPeFISzuZ67sz9zj//ueeOFXsIMUkCJ4FfgUeBGXWUK3tZGxli0o47vismIiYL3rgsJv03Whu7AfQcUBWTKeBub7rbG28GcmLyqpjcH7U+0gox+QR4wrtchkh1W0AbsKqObieMViwmh7UK4EF/ahcoHlRHSkze8G0LKBaTCeBNatxBkhEHt6eyArYrz/4q/mHjTHzayFqVHcUVdRqYdKDsA+oT1hVqwn5GHZarVsZ41pm2Msadtqkm94FqjQ5BDQqxU41O4nxgZYyHdL5J+7N4XFb2IzMU3lJ1TKBT+8jxBFCUoqI+nST2cIPYSRs1JvviyoLCPhfD/jYOljN1VVkZIwP8FHiyS1C3CWpIUD3AAQEtwQA2XE9lDVhU2AWlaxTOdY8Gd6uRWyuxx5+m8dFp+Gf9/9mRNIhNvYj88DVSuNTvpLLu6y4lZyu9rJapv/QYcvlnVHoY+etPaNR3h/WmYbWCGr2d+HtfoNJD1CZH1o3viqmE88DWZo7SUi99h1DjE8jcbyQ+vwT1GnJtEdYq1J97xEmSeOcspA6iBkeho4vaqVHUkbscKBtrUF7Oa2TCy52X4ty9qu8Q9A24D9RrkEiihsaAMVSqG1mrojIPBFWvlkFDdREX5/UwR1NL56ToTOLAdVRX/ttXXY+ahepJu+AFh1loBhcozrm/+gbdhyrXWziqsytwLeVl98fAsDu6igNgbUVQcbkUpLYfABXaVl5y1TvgKS7sbgX9vuIQOGm0WuHb5a9xFee3wUbWWmJxfrM5O9VWK3QxA1b4iv23dMXNNytG/l7I+TuBnn6oRBTvpo6QFSUw2qHTPeelOL9oZK2tABjbzjsN4ahOt1qRavlIIOUSyrOB0pLuh7x/r/kLkmfb56HW4kWF9tizwSv+XCRYigVP8QAS5XHYiur1bcUeuBAFznkb3K1ytRyE6F2RSASmnOL5xS7u7OEw+KJcmGlg2yjdJCHFSu/jcDgeu+1sX5jRw48tYCNrXZOLs+83XpmCtjanMC0RbhCdPNVN4/XnkdlvzhhZ67J/KxFa+7L9/dk05798Sp8BzvE57v9X0S29szN0Q0l1hcbbr8HmxsfAC4E3bJUFVsZ4EpgGTqjhW2BsHOZ/dxccO478cQXJ/aK36HngLSNrfdryclHgpgT6dDkBHAEOetO6qvqVZ5yOjQrgX5QGk4mlocvcAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span className="percent text-white pl-2 font-weight-bold text-center">
                  {movieDetail.danhGia}/10
                </span>
                <p>Tomatometer</p>
              </div>
              <div className="col-2 movie__detail__booking">
                <button className=" btn btn-primary">Booking</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" movie__detail__hinhAnh">
          <img
            className=""
            src={movieDetail.hinhAnh}
            alt={movieDetail.biDanh}
          />
        </div>
        {/* center */}
        <div className="container">
          <div className="row ">
            <div className="col-6 movie__detail__mota">
              <h3>Mô Tả Phim</h3>
              <span className="">{movieDetail.moTa}</span>
            </div>
            <div className="col-6"></div>
          </div>
        </div>

        <hr />
        <h2>Showtime Info</h2>

        <div className="container mt-20">
          <Tabs tabPosition={"left"} className="bg-white px-5 py-5">
            {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
              return (
                <TabPane
                  tab={
                    <div>
                      <img
                        src={heThongRap.logo}
                        width={50}
                        height={50}
                        alt={heThongRap.logo}
                      />
                      {heThongRap.tenHeThongRap}
                    </div>
                  }
                  key={idx}>
                  {heThongRap.cumRapChieu.map((cumRap, key) => {
                    return (
                      <div className="text-left" key={"cumrap-" + key}>
                        {cumRap.tenCumRap}
                        <div className="row">
                          {cumRap.lichChieuPhim.map((lichChieu, key) => {
                            return (
                              <Button
                                className="col-3 m-2 p-1"
                                type="primary"
                                ghost
                                key={"lichChieu-" + key}>
                                <Link to={`/checkout/${lichChieu.maLichChieu}`}>
                                  {new Date(
                                    lichChieu.ngayChieuGioChieu
                                  ).toLocaleTimeString()}
                                </Link>
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetailReducer.movieDetail,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieDetail: (movieId) => dispatch(actFetchMovieDetailApi(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
