import React, { useState } from 'react';
import { useNavigate ,browserHistory} from 'react-router-dom'; // Import useNavigate
import '../styles/LoginCard.css';
import JudgeLoginForm from './JudgeLoginForm';
import LitigantLoginForm from './LitigantLoginForm';
import AdminLoginForm from './AdminLoginForm';
import LawyerLoginForm from './LawyerLoginForm';

const LoginCard = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState('litigant');
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleLogin = () => {
    // Define the redirection logic for each role
    switch (selectedRole) {
      case 'judge':
        // Redirect to the judge page
        navigate('/judgeDashboard');
        break;
      case 'litigant':
        // Redirect to the litigant page
        navigate('litigant-dashboard');
        break;
      case 'admin':
        // Redirect to the admin page
        navigate('admin-dashboard');

        break;
      case 'lawyer':
        // Redirect to the lawyer page
        navigate('/lawyer-dashboard');
        break;
      default:
        // Handle any other cases or errors
        break;
    }
  };

  const renderForm = () => {
    if (isLoginVisible) {
      return (
        <form>
          {/* Form inputs for username and password */}
          <button type="button" className="btn-login" onClick={handleLogin}>
            Login
          </button>
        </form>
      );
    } else {
      // Render the selected role's login form
      switch (selectedRole) {
        case 'judge':
          return <JudgeLoginForm />;
        case 'litigant':
          return <LitigantLoginForm />;
        case 'admin':
          return <AdminLoginForm />;
        case 'lawyer':
          return <LawyerLoginForm />;
        default:
          return null;
      }
    }
  };

  return (
    <div className="login-card">
      <div className="card-inner">
        <h2>{isLoginVisible ? 'Sign Up' : 'Login'}</h2>
        <div className="form-group" style={{ display: 'flex' }}>
          <label htmlFor="role" style={{ paddingRight: '30px' }}>
            Select Role:{' '}
          </label>
          <select
            id="role"
            name="role"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="judge">Judge</option>
            <option value="litigant">Litigant</option>
            <option value="admin">Admin</option>
            <option value="lawyer">Lawyer</option>
          </select>
        </div>
        {renderForm()}
        <p className="toggle-link">
          {isLoginVisible ? "Don't have an account?" : 'Already a user?'}
          <button onClick={toggleForm}>
            {isLoginVisible ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
