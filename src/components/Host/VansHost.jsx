import "./Host.css";
import { NavLink, useLoaderData } from "react-router";
import { getHostVans } from "../api";

export function Loader() {
  return getHostVans();
}

function VansHost() {
  const vansHost = useLoaderData();

  const vans = vansHost.map((van) => (
    <div key={van.id} className="vanHost">
      <NavLink to={`${van.id}`}>
        <img width="66px" height="66px" src={van.imageUrl} alt={van.name} />

        <div>
          <h2>{van.name}</h2>
          <span>${van.price}/day</span>
        </div>
      </NavLink>
    </div>
  ));

  return (
    <div className="vansHost-container">
      <h1>Your Listed vans</h1>

      {vans}
    </div>
  );
}

export default VansHost;
