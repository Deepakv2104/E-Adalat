import React from "react";
import "../styles/Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-heading">Today's Schedule</h2>
      <div className="work-container">
        <div className="work-item">
          <div className="work-time">09:00 AM</div>
          <div className="work-description">
            Meeting with supllieres from Kuta Bali
          </div>
        </div>
        <div className="work-item">
          <div className="work-time">02:30 PM</div>
          <div className="work-description">Check at Giga factory 1</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
