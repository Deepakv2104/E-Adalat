
import Sidebar from '../components/SideBar';
import './Home.css'
import React ,{useContext}from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import VideoMeeting from '../components/VideoMeeting'
import LoginCard from '../components/LoginCard';
import JudgeContext from '../JudgeContext';
 
const Home = () => {
  const navigate = useNavigate();
  const { judgeId, setJudgeId } = useContext(JudgeContext);
 // Initialize the navigate function

  // Handle navigation when clicking on links
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="home">
      <Navbar/>
      <div style={{paddingTop:'80px'}}>
      <Outlet setJudgeId={setJudgeId}/>
      
      </div>
      {/* <Sidebar/> */}
      {/* <Login/> */}
      
    </div>
  );
};
 
export default Home;