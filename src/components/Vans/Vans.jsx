import { useEffect, useState } from "react";
import "./Vans.css";
import { Link } from "react-router";

function Vans() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    async function getVans() {
      try {
        const response = await fetch("/api/vans");
        const vansData = await response.json();

        setVansData(vansData.vans);
      } catch (err) {
        console.log(err);
      }
    }

    getVans();
  }, []);

  const newVansData = vansData.map((van) => (
    <div key={van.id} className="van">
      <Link to={`/vans/${van.id}`}>
        <img width="230px" height="230px" src={van.imageUrl} alt={van.name} />

        <div>
          <h2>{van.name}</h2>
          <i>
            ${van.price}
            <span> /day</span>
          </i>
        </div>

        <button className={van.type}>
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
        </button>
      </Link>
    </div>
  ));

  return (
    <div className="vans-container">
      <h1>Explore our van options</h1>

      <div className="filter-container">
        <ul>
          <li>Simple</li>
          <li>Luxury</li>
          <li>Rugged</li>
        </ul>

        <span>Clear filter</span>
      </div>

      <div className="vans-list">{newVansData}</div>
    </div>
  );
}

export default Vans;
