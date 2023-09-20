
import Sidebar from '../components/SideBar';
import './Home.css'
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import VideoMeeting from '../components/VideoMeeting'
import LoginCard from '../components/LoginCard';
 
const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle navigation when clicking on links
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="home">
      <Navbar/>
      <div style={{paddingTop:'80px'}}>
      <Outlet/>
      
      </div>
      {/* <Sidebar/> */}
      {/* <Login/> */}
      
    </div>
  );
};
 
export default Home;