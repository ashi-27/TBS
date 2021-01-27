import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">ShowInCharge Panel</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/showincharge">
                Home
              </NavLink>
            </li>
           
          </ul>
        </div>
        <Link to={"/${this.props.match.params.theatrename}/insert" } className="btn btn-outline-light">
          Add Movies
        </Link>
      </nav>
    );
  }
}

export default Navbar
