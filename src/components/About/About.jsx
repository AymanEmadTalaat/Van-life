import "./About.css";
import hero from "../../assets/about-hero.png";
import { NavLink } from "react-router";

function About() {
  return (
    <div className="about-container">
      <img
        width="548.15px"
        height="233.21px"
        src={hero}
        className="hero-image"
      />

      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
        <br />
        <br />
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>

      <div className="explore-container">
        <h2>Your destination is waiting. Your van is ready.</h2>

        <NavLink to="/vans" className="about-link">
          Explore our vans
        </NavLink>
      </div>
    </div>
  );
}

export default About;
