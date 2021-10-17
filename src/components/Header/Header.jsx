/* eslint-disable jsx-a11y/anchor-is-valid */
// import Carousel from "components/carousel/Carousel";

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actLogout } from "container/shared/LoginUser/modules/actions";

import "./Header.scss";
class Header extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-sm navbar-light bg-light header__content">
          <a className="navbar-brand" href="#">
            Cinema Booking
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/theater">
                  Theater
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {this.props.userLogin ? (
                <li className="nav-item" onClick={this.handleLogout}>
                  <a className="nav-link">Logout</a>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <div></div>
        {/* <Carousel /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.userLoginReducer.userLogin,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
