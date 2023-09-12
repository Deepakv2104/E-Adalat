import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";

import NewCivilCaseCard from "./components/NewCivilCaseCard";
import LoginCard from "./components/LoginCard";
import CaseType from "./components/CaseType";
import NewCriminalCaseCard from "./components/NewCriminialCaseCard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<LoginCard />} />
        </Route>
        <Route path="/login/admin-dashboard" element={<AdminDashboard />}>
          {/* Nested routes for AdminDashboard */}
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-cases" element={<CaseType />}/>
            <Route path="/login/admin-dashboard/new-cases/civil-case" element={<NewCivilCaseCard/>} />
            <Route path="/login/admin-dashboard/new-cases/criminal-case" element={<NewCriminalCaseCard/>} />
          

          {/* Add more nested routes as needed */}
        </Route>
        {/* Add other routes here */}
      </Routes>
    </div>
  );
};

export default App;
