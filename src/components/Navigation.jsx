
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import hamburguerMenu from "../assets/images/icon-hamburger-menu.svg";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";



export default function Navigation(){

 const[menuOpen,setMenuOpen]= useState(false);
 // close the menu when clicking outside

  function handleLinkClick(){
    setMenuOpen(false);
  }

return (

<header className="header">
<div className="header__inner">
        <Link to="/">
        <img src={logo} className=" nav-logo" alt=" Healthy meals" />
       </Link>


     {/* hamburguer button only visible on mobile */}
     

     <button
        className="menu-btn"
        aria-label="toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes /> : <img src={hamburguerMenu} alt="Open menu" /> }
    </button>

    {/* Nav list, toggled open on mobile */}

  <nav className="navigation" aria-label="homepage Navigation">
        <div className="container__items--navigation">
        <ul className={`nav__list ${menuOpen ? "open" : ""}`}>
             {/* <li className="nav-logo">
                <Link to="/">
                <img src={logo} className="mobile-logo nav-logo" alt="Healthy meals logo" />
                </Link>
          </li> */}
            <li className="nav__items">

                <NavLink to="/home" 
                onClick={handleLinkClick}
                className="nav__items__links " href="#">Home</NavLink>
            </li>
            <li className="nav__items">
                <NavLink to="/about" 
                onClick={handleLinkClick}
                className="nav__items__links" href="#">About</NavLink>
            </li>
            <li className="nav__items">
                <NavLink to="/recipes" 
                onClick={handleLinkClick}
                className="nav__items__links" href="#">Recipes</NavLink>
            </li>
        </ul>

            
         {/* <button className="btn">Browse recipes</button> */}
         </div>
     </nav>
    </div>
     
 </header>

);
}
