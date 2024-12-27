import { useEffect, useState } from "react";
import "./Host.css";
import { NavLink } from "react-router";

function VansHost() {
  const [vansHost, setVansHost] = useState([]);

  useEffect(() => {
    async function getVans() {
      try {
        const response = await fetch("/api/host/vans");
        const data = await response.json();

        setVansHost(data.vans);
      } catch (err) {
        console.log(err);
      }
    }

    getVans();
  }, []);

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
