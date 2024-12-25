import { NavLink } from "react-router";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/" className="home-link">
        #VANLIFE
      </NavLink>

      <div className="links-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/vans"
        >
          Vans
        </NavLink>
      </div>
    </nav>
  );
}
