import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  {props.index}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user-info">
                  {props.userinfo}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutus}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutus: PropTypes.string,
  index: PropTypes.string,
  contact_us: PropTypes.string,
};

// Navbar.defaultProps = {
//   title: "Set Title Here",
//   aboutus: "Display About Us",
//   index: "Main",
//   contact_us: "For Contact Click Here",
// };
