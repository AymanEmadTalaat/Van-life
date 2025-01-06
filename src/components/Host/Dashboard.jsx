import "./Host.css";
import { NavLink, useLoaderData } from "react-router";
import { getHostVans } from "../api";
import GradeIcon from "@mui/icons-material/Grade";

export function Loader() {
  return getHostVans();
}

function Dashboard() {
  const vansHost = useLoaderData();

  const vans = vansHost.map((van) => (
    <div key={van.id} className="vanHost">
      <img width="66px" height="66px" src={van.imageUrl} alt={van.name} />

      <div>
        <h2>{van.name}</h2>
        <span>${van.price}/day</span>
      </div>

      <NavLink className="view-link" to={`../host/vans/${van.id}`}>
        View
      </NavLink>
    </div>
  ));

  return (
    <div className="dashboard-container">
      <div className="child-container1">
        <h1>Welcome!</h1>

        <div>
          <h2>
            Income last <span>30 days</span>
          </h2>
          <span>Details</span>
        </div>

        <h2>$2,260</h2>
      </div>

      <div className="child-container2">
        <h2>
          Review score{" "}
          <span>
            <GradeIcon className="star" />
            5.0<i>/5</i>
          </span>
        </h2>

        <span>Details</span>
      </div>

      <div className="vansHost-container dashboard">
        <h1>Your Listed vans</h1>

        {vans}
      </div>
    </div>
  );
}

export default Dashboard;
