
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import hamburguerMenu from "../assets/images/icon-hamburger-menu.svg";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import React from "react";
import ButtonRecipes from "./UI/ButtonRecipes";

export default function Navigation() {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (

    <header className="header container">
      <div className="header__inner">

        <Link to="/home" className="nav-logo-link">
          <img src={logo} className="nav-logo" alt="Healthy meals" />
        </Link>

        <nav
          className={`navigation ${menuOpen ? "open" : ""}`}
          aria-label="homepage Navigation"
        >

          <ul className="nav__list">

            <li className="nav__items">
              <NavLink to="/home" className="nav__items__links">
                Home
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/about" className="nav__items__links">
                About
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/recipes" className="nav__items__links">
                Recipes
              </NavLink>
            </li>

          </ul>

          <Link to="/recipes">
            <ButtonRecipes className="button-recipes">
              Browse recipes
            </ButtonRecipes>
          </Link>

        </nav>

        <button
          className="menu-btn"
          aria-label="toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <img src={hamburguerMenu} alt="Open menu" />}
        </button>

      </div>
    </header>

  );
}

