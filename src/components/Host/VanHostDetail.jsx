import "./Host.css";
import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router";

function VanHostDetail() {
  const [vansHost, setVansHost] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getVans() {
      try {
        const response = await fetch(`/api/host/vans/${params.id}`);
        const data = await response.json();

        setVansHost(data.vans[0]);
      } catch (err) {
        console.log(err);
      }
    }

    getVans();
  }, [params.id]);

  return (
    <div className="vansDetail-container">
      <NavLink className="back-to-vansHost" to=".." relative="path">
        Back to all vans
      </NavLink>

      <div className="vanDetail-container">
        <div>
          <img
            width="160.15px"
            height="157.9px"
            src={vansHost.imageUrl}
            alt={vansHost.name}
          />

          <div>
            <button className={vansHost.type}>{vansHost.type}</button>
            <h1>{vansHost.name}</h1>
            <h2>
              ${vansHost.price}
              <span>/day</span>
            </h2>
          </div>
        </div>

        <div className="vansHost-links">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </div>

        <Outlet context={vansHost} />
      </div>
    </div>
  );
}

export default VanHostDetail;
