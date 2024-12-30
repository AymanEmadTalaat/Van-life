import "./Host.css";
import incomeRatings from "../../assets/income-ratings.png";

function Income() {
  return (
    <div className="income-container">
      <h1>Income</h1>

      <i>
        Last <span>30 days</span>
      </i>

      <h2>$2,260</h2>

      <img src={incomeRatings} alt="income-ratings" />

      <div>
        <h3>Your transactions (3)</h3>

        <i>
          Last <span>30 days</span>
        </i>
      </div>

      <div className="transaction">
        <h4>$720</h4>

        <span>1/12/22</span>
      </div>

      <div className="transaction">
        <h4>$560</h4>

        <span>10/11/22</span>
      </div>

      <div className="transaction">
        <h4>$980</h4>

        <span>23/11/22</span>
      </div>
    </div>
  );
}

export default Income;
