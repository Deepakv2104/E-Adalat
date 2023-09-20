import React from 'react';
import logo from '../images/j3.png'; // Replace with the actual path to your logo image
import Sidebar from './SideBar';
import { Outlet, useNavigate ,useLocation} from "react-router-dom";

function Navbar() {
 
    const navigate = useNavigate(); // Initialize the navigate function
    const location = useLocation();
    // Handle navigation when clicking on links
    const handleNavigate = (path) => {
      navigate(path);} 
      const getAuthLinkText = () => {
        if (location.pathname.includes('login/judge-Dashboard')) {
          return 'Logout';
        }
        return 'Login/SignUp';
      }
  return (
    <div style={{position:'sticky'}}> 
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{background:'#112D32',width:'100%',height:'5px'}}>
      {/* <Sidebar/> */}
        <div className="container-fluid"  >
          <div  style={{fontFamily:"Bold",width:"50" ,height:"40" ,display:"flex",marginTop:'10px',cursor:'pointer'}} onClick={() => handleNavigate("/")}>
             <h2 aria-current="page" href="/" style={{color:'white'}}>e-ADAALAT</h2>
            <img src={logo} alt="E-Adalat Logo" className="mr-2" width="50" height="40" />
            </div>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login" style={{color:'white'}} onClick={() => handleNavigate("login")}>{getAuthLinkText()}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{color:'white'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="meet" style={{color:'white'}}>Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" style={{color:'white'}}>Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
