import React from 'react'
import "./carousel.scss"
 function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel carousel__content  " data-ride="carousel">
                <div className="carousel-inner carousel__images">
                    <div className="carousel-item active images__item__trangti">
                        <img src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" alt="#" />
                    </div>
                    <div className="carousel-item images__item__bantay">
                        <img src="	https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" alt="#" />
                    </div>
                    <div className="carousel-item images__item__trangti">
                        <img src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" alt="#" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default Carousel;