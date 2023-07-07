import React from "react";
import "./RiskLevelCard.css";

const RiskLevelCard = (props) => {
  return (
    <div className="LevelCard-container">
      <div className="Risk-card">
        <div className="levelCardHeading">
          <h3>{props.heading}</h3>
          <hr className="solid"></hr>
          <img id="menu" src={props.image} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default RiskLevelCard;
