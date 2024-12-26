import "./Host/Host.css";
import { NavLink, Outlet } from "react-router";

function HostLayout() {
  return (
    <>
      <div className="host-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          end
          to="."
        >
          Dashboard
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="income"
        >
          Income
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          end
          to="vans"
        >
          Vans
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default HostLayout;
