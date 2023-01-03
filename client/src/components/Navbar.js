import React from "react";
import "../App.css";
import { NavLink as Link, redirect } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = ({ setCurrentUser }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        redirect("/");
      }
    });
  }

  return (
    <nav className="navbar">
      <div className="title">Readit</div>
      <div className="navbar-items">
        <Link className="navbar-links" to="/openquestions">
          Open Questions
        </Link>
        <Link className="navbar-links" to="/myquestions">
          My Questions
        </Link>
        <Link className="profile-link" to="/profile">
          <img className="profile-logo" src={logo} alt="profile" />
        </Link>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
