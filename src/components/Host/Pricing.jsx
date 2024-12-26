import "./Host.css";
import { useOutletContext } from "react-router";

function Pricing() {
  const value = useOutletContext();

  return (
    <h2>
      ${value.price} <span>/day</span>
    </h2>
  );
}

export default Pricing;
