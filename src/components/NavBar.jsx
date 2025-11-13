import { NavLink } from "react-router";
import "./NavBar.css";
import pokeballIcon from "../assets/pokeball.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <img src={pokeballIcon} alt="Pokéball" className="pokeball-nav" />
        <h2>Team Dex</h2>
      </div>
      <nav>
        <ul className="nav-list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <li>Create</li>
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <li>Team Gallery</li>
          </NavLink>
          <NavLink
            to="/summary"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <li>Summary</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
