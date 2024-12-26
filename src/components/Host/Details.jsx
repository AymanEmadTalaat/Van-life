import "./Host.css";
import { useOutletContext } from "react-router";

function Details() {
  const value = useOutletContext();

  return (
    <>
      <h3>
        Name: <span>{value.name}</span>
      </h3>

      <h3>
        Category: <span>{value.type}</span>
      </h3>

      <p>
        Description: <span>{value.description}</span>
      </p>
      <h3>
        Visibility: <span>Public</span>
      </h3>
    </>
  );
}

export default Details;
