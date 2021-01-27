import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">Admin Panel</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/moviehome">
                Movie Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/theatrehome">
                Theatres Home
              </NavLink>
            </li>
            {/* <li class="nav-item">
              <NavLink className="nav-link" exact to="">
                Contacts
              </NavLink>
            </li> */}
          </ul>
        </div>
        <Link to="/addmovie" className="btn btn-outline-light">
          Add Movies
        </Link>
        <Link to="/addtheatre" className="btn btn-outline-light">
          Add Theatres
        </Link>
      </nav>
    );
  }
}

export default Navbar;
