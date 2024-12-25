import "./Home.css";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="home-container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <NavLink to="vans" className="button-link">
        Find your van
      </NavLink>
    </div>
  );
}

export default Home;
