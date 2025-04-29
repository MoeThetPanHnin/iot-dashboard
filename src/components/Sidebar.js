// Sidebar navigation component with live date & time and settings submenu
import React, { useState } from 'react';
import { House, Activity, Person, Gear, BoxArrowRight, PlusCircle, DashCircle, PersonAdd, PersonDash, Lock, Moon, Sun } from 'react-bootstrap-icons';


function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);
  
  return (
    <div className="sidebar d-flex flex-column p-3">
      <h4 className="mb-2">SmartHome</h4>
      
      <ul className="nav nav-pills flex-column mb-auto mt-4">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center">
            <House className="me-2" /> Home
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center">
            <Activity className="me-2" /> Activity
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center">
            <Person className="me-2" /> Profile
          </a>
        </li>
        <li className="nav-item mb-2">
          <div
            role="button"
            onClick={() => setShowSettings(prev => !prev)}
            className="nav-link d-flex align-items-center justify-content-between"
          >
            <span>
              <Gear className="me-2" /> Settings
            </span>
            {showSettings ? <DashCircle /> : <PlusCircle />}
          </div>
          {showSettings && (
            <ul className="nav flex-column ms-4 mt-2">
              <li className="nav-item mb-1">
                <a href="#" className="nav-link d-flex align-items-center">
                  <PersonAdd className="me-2" /> Add Member
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="#" className="nav-link d-flex align-items-center">
                  <PersonDash className="me-2" /> Remove Member
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="#" className="nav-link d-flex align-items-center">
                  <Lock className="me-2" /> Change Password
                </a>
              </li>
              
              
            </ul>
          )}
        </li>
      </ul>
      <hr />
      <button className="btn btn-outline-light mt-auto d-flex align-items-center">
        <BoxArrowRight className="me-2" /> Exit
      </button>
    </div>
  );
}

export default Sidebar;
