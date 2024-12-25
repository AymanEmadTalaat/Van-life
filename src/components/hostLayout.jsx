import "./Host/Host.css";
import { NavLink, Outlet } from "react-router";

function HostLayout() {
  return (
    <>
      <div className="host-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          end
          to="/host"
        >
          Dashboard
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host/income"
        >
          Income
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default HostLayout;
