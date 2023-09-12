import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fahome,
  fachartpie,
  faPieChart,
  faTags,
  faCalendarDays,
  faUser,
  faGear,
  faThumbsUp,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
import Activities from "./Activites";
import Pie from "./Pie";
import Schedule from "./Schedule";

const Dashboard = () => {
  return (
    
    <div className="container">
      
      <div className="main">
        <h1>Dashboard</h1>
        <div className="cards-container">
          <div
            className="card"
            style={{ paddingTop:'10px', background: "#1f4037", /* fallback for old browsers */
            background: "-webkit-linear-gradient(to left, #1f4037, #99f2c8)", /* Chrome 10-25, Safari 5.1-6 */
            background: "linear-gradient(to left, #1f4037, #99f2c8)"  }}
          >
            <FontAwesomeIcon
              icon={faMoneyBill}
              style={{ color: "black", paddingLeft: "200px" }}
            />
            <p>Total Cases</p>
            <h2>33,64,234</h2>
          </div>
          <div
            className="card"
            style={{ background: "#f09819" ,/* fallback for old browsers */
            background: "-webkit-linear-gradient(to left, #f09819, #edde5d)" /* Chrome 10-25, Safari 5.1-6 */,
            background: "linear-gradient(to left, #f09819, #edde5d)" }}
          >
            <FontAwesomeIcon
              icon={faTags}
              style={{ color: "black", paddingLeft: "200px" }}
            />
            <p>Pending Cases</p>
            <h2>14,67,844</h2>
          </div>
          <div
            className="card"
            style={{ background: "#fbd3e9" /* fallback for old browsers */,
            background: "-webkit-linear-gradient(to right, #fbd3e9, #bb377d)", /* Chrome 10-25, Safari 5.1-6 */
            background: "linear-gradient(to right, #fbd3e9, #bb377d)" }}
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ color: "black", paddingLeft: "200px" }}
            />
            <p>Criminal Cases</p>
            <h2>25,84,884</h2>
          </div>
          <div
            className="card"
            style={{ background: "#20002c" ,/* fallback for old browsers */
            background: "-webkit-linear-gradient(to left, #20002c, #cbb4d4)" ,/* Chrome 10-25, Safari 5.1-6 */
            background: "linear-gradient(to left, #20002c, #cbb4d4)"}}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "black", paddingLeft: "200px" }}
            />
            <p>Civil Cases</p>
            <h2>9,73,393</h2>
          </div>
        </div>
        <div>
          <Activities />
        </div>

        <div className="row-container">
          <div className="column">
            <Pie />
          </div>
          <div className="column">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
