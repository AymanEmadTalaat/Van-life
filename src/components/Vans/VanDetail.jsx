import "./VanDetail.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function VanDetail() {
  const [vanData, setVanData] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getVan() {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const data = await response.json();

        setVanData(data.vans);
      } catch (err) {
        console.log(err);
      }
    }

    getVan();
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to="/vans" className="back-to-vans">
        Back to all vans
      </Link>

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
