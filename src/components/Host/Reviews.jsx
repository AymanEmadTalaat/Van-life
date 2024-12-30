import "./Host.css";
import GradeIcon from "@mui/icons-material/Grade";
import reviewRatings from "../../assets/reviews-ratings.png";

function Reviews() {
  return (
    <div className="reviews-container">
      <div>
        <h1>Your reviews</h1>

        <i>
          Last <span>30 days</span>
        </i>
      </div>

      <h2>
        5.0{" "}
        <span>
          <GradeIcon className="star" />
          overall rating
        </span>
      </h2>

      <img src={reviewRatings} alt="" />

      <h3>Reviews (2)</h3>

      <div className="stars">
        <GradeIcon className="star" />
        <GradeIcon className="star" />
        <GradeIcon className="star" />
        <GradeIcon className="star" />
        <GradeIcon className="star" />
      </div>

      <h4>
        Elliot <span>December 1, 2022 </span>
      </h4>

      <p>
        The beach bum is such as awesome van! Such as comfortable trip. We had
        it for 2 weeks and there was not a single issue. Super clean when we
        picked it up and the host is very comfortable and understanding. Highly
        recommend!
      </p>

      <div className="hr"></div>

      <div className="stars">
        <GradeIcon className="star" />
        <GradeIcon className="star" />
        <GradeIcon className="star" />
        <GradeIcon className="star" />
        <GradeIcon className="star" />
      </div>

      <h4>
        Sandy
        <span> November 23, 2022 </span>
      </h4>

      <p>
        This is our third time using the Modest Explorer for our travels and we
        love it! No complaints, absolutely perfect!
      </p>

      <div className="hr"></div>
    </div>
  );
}

export default Reviews;
