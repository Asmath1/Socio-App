import React from "react";
import "./GraphCard.css";

const GraphCard = (props) => {
  return (
    <div className="Graph-container">
      <div className="graph">
        <div className="Heading">
          <p>{props.heading}</p>
          <img id="menu" src={props.image} alt=""></img>
        </div>
        <br />
        <div className="data">
          <div className="count-data">
            <h1>{props.count}</h1>
            <div className="data-badge">
              <img src={props.arrow} alt=""></img>
              <p>{props.compare}</p>
            </div>
          </div>
          <div className="graph">
            <img src={props.graphImg} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
