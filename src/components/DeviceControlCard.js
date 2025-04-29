// Simulates device toggles for Lights, TV, Speaker
import React, { useState } from 'react';

function DeviceControlCard() {
  const [devices, setDevices] = useState({
    lights: false,
    tv: false,
    speaker: false
  });

  // Toggle handler
  const toggle = (name) => {
    setDevices(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="card p-3">
      <h5>Device Controls</h5>
      {Object.keys(devices).map((name) => (
        <div key={name} className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id={name}
            checked={devices[name]}
            onChange={() => toggle(name)}
          />
          <label className="form-check-label" htmlFor={name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}: {devices[name] ? 'On' : 'Off'}
          </label>
        </div>
      ))}
    </div>
  );
}

export default DeviceControlCard;