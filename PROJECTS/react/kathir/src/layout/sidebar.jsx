import { Link, useLocation } from "react-router-dom";
import { FaUsers, FaUser, FaTrophy, FaSignOutAlt, FaCog, FaThLarge } from 'react-icons/fa';
import './Sidebar.css';
import { MdGroup, MdPerson, MdEvent, MdStar, MdAdminPanelSettings, MdLogout } from 'react-icons/md';

import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  const logout = () => {
    localStorage.setItem("isAuth", "");
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      {/* <ul>
        <Link to="/Dashboard" className="text-decoration-none">
          <li className={`option ${isActive("/Dashboard") ? "active" : ""}`}>
            <FaThLarge style={{ marginRight: '10px',fontSize:'23px', verticalAlign: 'middle' }} />Dashboard
          </li>
        </Link>
      </ul> */}
      <h3>Employee Category</h3>
      <ul>
        <Link to="/Employee" className="text-decoration-none">
          <li className={`option ${isActive("/Employee") ? "active" : ""}`}>
          <FaUsers style={{ marginRight: '10px',fontSize:'23px', verticalAlign: 'middle' }} />Employees
          </li>
        </Link>
      </ul>
      <h3>Customer Category</h3>
      <ul>
        <Link to="/customers" className="text-decoration-none">
          <li className={`option ${isActive("/customers") ? "active" : ""}`}>
          <FaUser style={{ marginRight: '10px',fontSize:'23px', verticalAlign: 'middle' }}  />Customers
          </li>
        </Link>
      </ul>
      <h3>Bank Category</h3>
      <ul>
        <Link to="/bankEvent" className="text-decoration-none">
          <li className={`option ${isActive("/bankEvent") ? "active" : ""}`}>
          <MdEvent  style={{ marginRight: '10px',fontSize:'23px', verticalAlign: 'middle' }}/>Bank Events
          </li>
        </Link>
        <Link to="/bankAwards" className="text-decoration-none">
          <li className={`option ${isActive("/bankAwards") ? "active" : ""}`}>
          <FaTrophy  style={{ marginRight: '10px',fontSize:'23px', verticalAlign: 'middle' }}/> Bank Awards
          </li>
        </Link>
      </ul>
      <h3>Admin Management</h3>
      <ul>
        <Link to="/adminManagement" className="text-decoration-none">
          <li
            className={`option ${isActive("/adminManagement") ? "active" : ""}`}
          >
            <MdAdminPanelSettings  style={{ marginRight: '10px',fontSize:'23px', verticalAlign: 'middle' }}/>Admin Management
          </li>
        </Link>
      </ul>
      <div className="homepage-btn" id="homepage-btn" onClick={logout}>
      <FaSignOutAlt style={{ marginRight: '10px',fontSize:'23px', verticalAlign: 'middle' }} />LOGOUT
      </div>
    </div>
  );
};

export default Sidebar;

