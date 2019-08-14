import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-inverse navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">
          React Redux Form
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/listusers/1">List Users</Link>
          </li>
          <li>
            <Link to="/add/user">Create User</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
