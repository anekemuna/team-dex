import { NavLink } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
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
            <li>Gallery</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
