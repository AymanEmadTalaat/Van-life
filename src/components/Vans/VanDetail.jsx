import "./VanDetail.css";
import { useEffect, useState } from "react";
import { useParams, NavLink, useLocation } from "react-router";
import getVans from "../api";

function VanDetail() {
  const [vanData, setVanData] = useState([]);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getVan() {
      try {
        const data = await getVans(params.id);

        setVanData(data);
      } catch (err) {
        console.log(err);
      }
    }

    getVan();
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <NavLink
        to={`..?${location.state?.search || ""}`} //Optional chaining || or use ternary operator
        relative="path"
        className="back-to-vans"
      >
        Back to all vans
      </NavLink>

      <img
        width="230px"
        height="230px"
        src={vanData.imageUrl}
        alt={vanData.name}
      />

      <button className={`type-btn ${vanData.type}`}>{vanData.type}</button>

      <h1>{vanData.name}</h1>
      <i>
        ${vanData.price}
        <span> /day</span>
      </i>

      <p>
        The Modest Explorer is a van designed to get you out of the house and
        into nature. This beauty is equipped with solar panels, a composting
        toilet, a water tank and kitchenette. The idea is that you can pack up
        your home and escape for a weekend or even longer!
      </p>

      <button className="rent-btn">Rent this van</button>
    </div>
  );
}

export default VanDetail;
