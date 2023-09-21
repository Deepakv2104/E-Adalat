import React ,{useState}from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import JudgeSignupForm from './components/JudgeSignupForm';
import LawyerSignupForm from './components/LawyerSignupForm';
import AdminSignupForm from './components/AdminSignupForm';
import LitigantSignupForm from './components/LitigantSignupForm';
import NewCivilCaseCard from "./components/NewCivilCaseCard";
import LoginCard from "./components/LoginCard";
import CaseType from "./components/CaseType";
import NewCriminalCaseCard from "./components/NewCriminialCaseCard";
import CaseList from "./components/CaseList";
import CaseDetailsRoute from "./components/CaseDetials";
import CaseDetails from "./components/CaseDetials";
import JudgeDashboard from "./pages/JudgeDashboard"
import SignUpCard from "./components/SignUpCard";
import AssignedCases from "./components/AssignedCases";
import OngoingCases from "./components/OngoingCases";
import VideoMeeting from "./components/VideoMeeting";
import JudgeContext from './JudgeContext';

const App = () => {
 
  const [judgeId, setJudgeId] = useState(null);
  return (
    <JudgeContext.Provider value={{ judgeId, setJudgeId }}>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="login" element={<LoginCard setJudgeId={setJudgeId}/>} />
          <Route path="sign-up" element={<SignUpCard />}>
      <Route path="judge-signup-form" element={<JudgeSignupForm />} />
      <Route path="litigant-signup-form" element={<LitigantSignupForm />} />
      <Route path="admin-signup-form" element={<AdminSignupForm />} />
      <Route path="lawyer-signup-form" element={<LawyerSignupForm />} />
    </Route>
          {/* <Route path='meet'   element={<VideoMeeting/>}/> */}
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
        
        <Route path="/login/judge-dashboard" element={<JudgeDashboard />}>
          {/* Nested routes for AdminDashboard */}
          <Route path="" element={<Dashboard />} />
          <Route path="assigned-cases" element={<AssignedCases />} />
          {/* <Route path="new-cases" element={<AssignedCases />} /> */}

          <Route path="ongoing-cases" element={<OngoingCases />}/>
          <Route path="assigned-cases/caseDetails/:documentId" element={<CaseDetails/>} />
          <Route path="ongoing-cases/caseDetails/:documentId" element={<CaseDetails/>} />


          

         
        </Route>

       
      </Routes>
    </div>
    </JudgeContext.Provider>
  );
};

export default App;
