import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Navbar
          <small className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </small>
        </span>
      </nav>
    );
  }
}

export default NavBar;
