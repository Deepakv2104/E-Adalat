import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";

import NewCivilCaseCard from "./components/NewCivilCaseCard";
import LoginCard from "./components/LoginCard";
import CaseType from "./components/CaseType";
import NewCriminalCaseCard from "./components/NewCriminialCaseCard";
import CaseList from "./components/CaseList";
import CaseDetailsRoute from "./components/CaseDetials";
import CaseDetails from "./components/CaseDetials";

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
          <Route path="new-cases" element={<CaseType />} />
          <Route path="new-cases/civil-case" element={<NewCivilCaseCard isViewMode={true} />}/>
          <Route path="new-cases/criminal-case" element={<NewCriminalCaseCard />}/>
          <Route path="cases" element={<CaseList />}/>
          <Route path="cases/caseDetails/:documentId" element={<CaseDetails/>} />
          


          

         
        </Route>

       
      </Routes>
    </div>
  );
};

export default App;
