
import React, {  PureComponent, Fragment } from 'react';
import { Tabs, Button } from 'antd';
import { connect } from 'react-redux';
 import { actFetchShowtimeTheaterSystem } from './modules/action';
import './MovieInfor.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

class MovieInfor extends PureComponent {
    componentDidMount() {
        this.props.fetchShowtimeTheaterSystem();
    }

    renderShowTime = () => {
        return this.props.listTheaterSystem?.map((theaterSystem, index) => {
            return (
                <Fragment key={index}>
                    <TabPane
                        tab={
                            <img
                                src={theaterSystem.logo}
                                alt={theaterSystem.tenHeThongRap}
                                className="img-theater"
                            />
                        }
                        key={index}
                    >
                        <Tabs tabPosition="left">
                            {theaterSystem.lstCumRap.slice(0, 6).map((theater, index) => {
                                return (
                                    <Fragment key={index}>
                                        <TabPane
                                            tab={
                                                <div className="d-flex complex-theater">
                                                    <div className="complex__image mr-2">
                                                        <img
                                                            src={theater.hinhAnh}
                                                            alt={theater.tenCumRap}
                                                            className="img-theater"
                                                        />
                                                    </div>
                                                    <div className="complex__info mr-auto">
                                                        <p>{theater.tenCumRap}</p>
                                                        <span>
                                                            {theater.diaChi.length < 40
                                                                ? theater.diaChi
                                                                : `${theater.diaChi.slice(
                                                                      0,
                                                                      40
                                                                  )}...`}
                                                        </span>
                                                        <h5>[chi tiết]</h5>
                                                    </div>
                                                </div>
                                            }
                                            key={index}
                                        >
                                            {theater.danhSachPhim.slice(0, 3).map((film, index) => {
                                                return (
                                                    <Fragment key={film.maPhim}>
                                                        <div className="d-flex complex-theater mb-2">
                                                            <div className="complex__image mr-2">
                                                                <img
                                                                    src={film.hinhAnh}
                                                                    alt={film.tenPhim}
                                                                    className="img-theater"
                                                                />
                                                            </div>
                                                            <div className="complex__info mr-auto">
                                                                <p>{film.tenPhim}</p>
                                                            </div>
                                                        </div>
                                                        <div className="complex-showtime mb-4">
                                                            {film.lstLichChieuTheoPhim
                                                                .slice(0, 12)
                                                                .map((showtime, index) => {
                                                                    return (
                                                                        <Link to={`checkout/${showtime.maLichChieu}`}  key={index}>
                                                                        <Button
                                                                            className="m-2"
                                                                           
                                                                        >
                                                                            {moment(
                                                                                showtime.ngayChieuGioChieu
                                                                            ).format('hh:mm A')}
                                                                        </Button>
                                                                        </Link>
                                                                    );
                                                                })}
                                                        </div>
                                                    </Fragment>
                                                );
                                            })}
                                        </TabPane>
                                    </Fragment>
                                );
                            })}
                        </Tabs>
                    </TabPane>
                </Fragment>
            );
        });
    };
    render() {
        return (
            <section className="complex">
                <div className="complex__content container">
                    <div className="row">
                        <Tabs tabPosition="left">{this.renderShowTime()}</Tabs>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { listTheaterSystem: state.clientMovieReducer.listTheaterSystem };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShowtimeTheaterSystem: () => dispatch(actFetchShowtimeTheaterSystem()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfor);
