import "./App/App.css";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="notFound-container">
      <h1>Sorry, the page you were looking for was not found.</h1>

      <Link to="..">
        <button>Return to home</button>
      </Link>
    </div>
  );
}

export default NotFound;
