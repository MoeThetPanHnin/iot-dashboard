// Sidebar navigation component with live date & time and settings submenu
import React, { useState } from 'react';
import {
  House, Activity, Person, Gear, BoxArrowRight,
  PlusCircle, DashCircle, PersonAdd, PersonDash, Lock
} from 'react-bootstrap-icons';

function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="sidebar d-flex flex-column p-3 in-vh-10m0  text-black">
      <h4 className="mb-3">SmartHome</h4>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <button className="nav-link d-flex align-items-center btn btn-link text-start text-black  p-0 w-100">
            <House className="me-2" /> Home
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link d-flex align-items-center btn btn-link text-start text-black  p-0 w-100">
            <Activity className="me-2" /> Activity
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link d-flex align-items-center btn btn-link text-start text-black  p-0 w-100">
            <Person className="me-2" /> Profile
          </button>
        </li>
        <li className="nav-item mb-2">
          <button
            onClick={() => setShowSettings(prev => !prev)}
            className="nav-link d-flex align-items-center btn btn-link text-start text-black  p-0 w-100"
          >
            <Gear className="me-2" /> Settings
            {showSettings ? <DashCircle className="ms-auto" /> : <PlusCircle className="ms-auto" />}
          </button>
          {showSettings && (
            <ul className="nav flex-column ms-4 mt-2">
              <li className="nav-item mb-1">
                <button className="nav-link d-flex align-items-center btn btn-link text-start text-black  p-0 w-100">
                  <PersonAdd className="me-2" /> Add Member
                </button>
              </li>
              <li className="nav-item mb-1">
                <button className="nav-link d-flex align-items-center btn btn-link text-start text-black  p-0 w-100">
                  <PersonDash className="me-2" /> Remove Member
                </button>
              </li>
              <li className="nav-item mb-1">
                <button className="nav-link d-flex align-items-center btn btn-link text-start text-black  p-0 w-100">
                  <Lock className="me-2" /> Change Password
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <hr className="text-white" />
      <button className="btn btn-outline-light mt-auto d-flex align-items-center">
        <BoxArrowRight className="me-2" /> Exit
      </button>
    </div>
  );
}

export default Sidebar;
