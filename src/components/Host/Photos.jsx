import "./Host.css";
import { useOutletContext } from "react-router";

function Photos() {
  const value = useOutletContext();

  return <img className="photos-img" src={value.imageUrl} alt={value.name} />;
}

export default Photos;
