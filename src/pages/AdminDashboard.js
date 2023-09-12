import React from "react";
import { Outlet, useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Navbar from "../components/Navbar";
import NewCaseCard from "../components/NewCivilCaseCard";
import "./AdminDashboard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPieChart,
  faTags,
  faCalendarDays,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle navigation when clicking on links
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar />
      <div className="AdminDashboard">
        <div className="split-screen">
          <div className="sidebar">
            <ul>
              <li>
                <h2 className="fa fa-home">ADMIN</h2>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPieChart}
                  style={{  paddingLeft: "20px" }}
                />
                <span
                  onClick={() => handleNavigate("dashboard")}
                  style={{ paddingLeft: "20px" }}
                >
                  Dashboard
                </span>
              </li>
              <hr />
              <li>
                <FontAwesomeIcon
                  icon={faTags}
                  style={{  paddingLeft: "20px" }}
                />
                <span
                  onClick={() => handleNavigate("new-cases")}
                  style={{ paddingLeft: "20px" }}
                >
                  New Cases
                </span>
              </li>
              <hr />
              <li>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{  paddingLeft: "20px" }}
                />
                <span
                  onClick={() => handleNavigate("cases")}
                  style={{ paddingLeft: "20px" }}
                >
                  Cases
                </span>
              </li>
              <hr />
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{  paddingLeft: "20px" }}
                />
                <span
                  onClick={() => handleNavigate("users")}
                  style={{ paddingLeft: "20px" }}
                >
                  User
                </span>
              </li>
              <hr />
              <li>
                <FontAwesomeIcon
                  icon={faGear}
                  style={{  paddingLeft: "20px" }}
                />
                <span
                  onClick={() => handleNavigate("settings")}
                  style={{ paddingLeft: "20px" }}
                >
                  Settings
                </span>
              </li>
            </ul>
          </div>
          <div className="content">
            <Outlet/>
            {/* Define other routes and components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
