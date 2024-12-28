import { useEffect, useState } from "react";
import "./Vans.css";
import { Link, useSearchParams } from "react-router";
import getVans from "../api";

function Vans() {
  const [vansData, setVansData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams({});

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);

      try {
        const data = await getVans();
        setVansData(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const filteredData = typeFilter
    ? vansData.filter((van) => van.type.toLowerCase() === typeFilter)
    : vansData;

  const newVansData = filteredData.map((van) => (
    <div key={van.id} className="van">
      <Link to={`${van.id}`} state={{ search: searchParams.toString() }}>
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

  function handleSearchParams(key, value) {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  }

  if (loading) {
    return (
      <h1 aria-live="polite" style={{ textAlign: "center" }}>
        Loading...
      </h1>
    );
  }

  if (error) {
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
  }

  return (
    <div className="vans-container">
      <h1>Explore our van options</h1>

      <div className="filter-container">
        <ul>
          <li onClick={() => handleSearchParams("type", "simple")}>Simple</li>
          <li onClick={() => handleSearchParams("type", "luxury")}>Luxury</li>
          <li onClick={() => handleSearchParams("type", "rugged")}>Rugged</li>
        </ul>

        <span onClick={() => handleSearchParams("type", null)}>
          Clear filter
        </span>
      </div>

      <div className="vans-list">{newVansData}</div>
    </div>
  );
}

export default Vans;
