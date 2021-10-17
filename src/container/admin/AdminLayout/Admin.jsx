import React from "react";
import "./Admin.scss";
import { Link } from "react-router-dom";
// import MovieManager from "../MovieManager/MovieManager";
// import EditMovie from "../MovieManager/Edit/EditMovie";
// import AddMovie from "../MovieManager/Add/AddMovie";

function Admin() {
  return (
    <div>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span className="" />{" "}
          
          </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href className="active">
                <span className="las la-home" />
                <span>Xin chào</span>
              </a>
            </li>
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle">
                Movie Manager
              </a>

              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link className="nav-link" to="/Admin/MovieManager">
                    Movie Manager{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/Admin/MovieManager/AddMovie">Add Movie</Link>
                </li>
                <li>
                  <Link href="#">Delete Movie</Link>
                </li>
                <li>
                  <Link href="#">Edit Movie</Link>
                </li>
              </ul>
            </li>
            <li className="">
              <a
                href="#homeUserSubMenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle">
                User Management
              </a>

              <ul className="collapse list-unstyled" id="homeUserSubMenu">
                <li>
                  <Link className="nav-link" to="/Admin/UserManagement">
                    User Management
                  </Link>
                </li>
                <li>
                  <Link to="/Admin/MovieManager/AddMovie">Add User</Link>
                </li>
                <li>
                  <Link href="#">Delete User</Link>
                </li>
                <li>
                  <Link href="#">Edit User</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link" to="/MovieManager">
                hhhhhhhhh
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/MovieManager">
                hhhhhhhhh
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="las la-bars" />
            </label>{" "}
            Tablero
          </h2>
          <div className="search-wrapper">
            <span className="las la-search" />
            <input type="search" placeholder="Buscar aquí" />
          </div>
          <div className="user-wrapper">
            <img src="img/Avatar.png" width="40px" height="40px" alt="" />
            <div>
              <h4>Administrador</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>
        <main>
          <div className="cards1">
            <div className="card-single1">
              {/* <MovieManager/> */}

              {/* <AddMovie/> */}
              {/* <EditMovie/> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Admin;
