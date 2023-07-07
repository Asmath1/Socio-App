import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card-container">
      <div className="graph">
        <div className="cardHeading">
          <p>{props.heading}</p>
        </div>
        <br />
        <div className="data-section">
          <div className="card-data">
            <h1>{props.count}</h1>
            <div className="data-badge">
              <img src={props.arrow} alt=""></img>
              <p>{props.compare}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
