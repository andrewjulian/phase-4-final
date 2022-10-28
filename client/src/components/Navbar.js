import React from 'react'
import "../App.css"
import {NavLink as Link} from 'react-router-dom'
import logo from '../images/logo.png';

const Navbar = () => {

  function handleLogoutClick({setCurrentUser}) {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <nav className='navbar'>
      <div class='title'>Readit</div>
        <div className='navbar-items'>
          <Link className='navbar-links' to="/questions">Open Questions</Link>
          <Link className='navbar-links' to="/myquestions">My Questions</Link>
          <Link className='profile-link' to="/profile">
            <img className='profile-logo' src={logo} alt="profile"/>
          </Link>
          <button onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
    </nav>
  )
}

export default Navbar