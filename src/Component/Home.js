import React, { useState } from "react";
import "./Home.css";
import { Navbar } from "./Navbar";
import DatePicker from "./DatePicker";
import icon from "./Assets/d-icon.png";
import GraphCard from "./GraphCard";
import vertical from "./Assets/more-vertical.svg";
import chart from "./Assets/chart1.svg";
import chart2 from "./Assets/chart2.svg";
import arrowup from "./Assets/arrow-up.svg";
import arrowdown from "./Assets/arrow-down.svg";
import Card from "./Card";
import RiskLevelCard from "./RiskLevelCard";
import pieChart1 from "./Assets/_Pie chart.png";
import pieChart2 from "./Assets/_Pie chart (1).png";
import pieChart3 from "./Assets/_Pie chart (2).png";
import pieChart4 from "./Assets/_Pie chart (3).png";
import pieChart5 from "./Assets/Pie chart.png";
import pieChart6 from "./Assets/Pie chart (1).png";
import vector from "./Assets/more-vertical.svg";

function Home() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Navbar />
      <div className="heading">
        <div>
          <h2>Welcome back, Amy</h2>
          <h3>Track, manage and review areas for client case improvement.</h3>
        </div>
        <div className="date-section">
          <DatePicker />
          <div className="export-data">
            {" "}
            <img id="icon" src={icon} alt="" />
            Export data
          </div>
        </div>
      </div>
      <div className="graphcard-section">
        <GraphCard
          heading="Overall Satisfaction"
          image={vertical}
          count="53%"
          arrow={arrowup}
          compare="3% vs last month"
          graphImg={chart2}
        />
        <GraphCard
          heading="Patient Confidence"
          image={vertical}
          count="Average"
          arrow={arrowdown}
          compare="10% vs last month"
          graphImg={chart}
        />
        <GraphCard
          heading="Resource to Management Care"
          image={vertical}
          count="38%"
          arrow={arrowup}
          compare="20% vs last month"
          graphImg={chart2}
        />
      </div>
      <div className="card-section">
        <Card
          heading="Discuss All Medications"
          count="52%"
          arrow={arrowup}
          compare="10%"
        />
        <Card
          heading="Discuss All Medications"
          count="18%"
          arrow={arrowup}
          compare="12%"
        />
        <Card
          heading="Discuss Medication Purpose"
          count="40%"
          arrow={arrowdown}
          compare="2%"
        />
        <Card
          heading="Discuss Side Effects of Medications"
          count="22%"
          arrow={arrowdown}
          compare="2%"
        />
      </div>
      <div className="footer-card">
        <div className="main-heading">
          <p>SDOH Risk Levels</p>
          <img id="menu" src={vector} alt=""></img>
        </div>
        <div className="sdohSection">
          <RiskLevelCard heading="Economic Stability" image={pieChart1} />
          <RiskLevelCard heading="Neighborhood" image={pieChart2} />
          <RiskLevelCard heading="Education" image={pieChart3} />
          <RiskLevelCard heading="Food" image={pieChart4} />
          <RiskLevelCard heading="Community & Social" image={pieChart5} />
          <RiskLevelCard heading="Health Care" image={pieChart6} />
        </div>
        <div className="footer">
          <svg className="circle1" /> <p>Unknown</p>
          <svg className="circle2" /> <p>Low/No Risk</p>
          <svg className="circle3" /> <p>Medium Risk</p>
          <svg className="circle4" /> <p>High Risk</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
