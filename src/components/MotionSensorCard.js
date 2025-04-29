// Displays motion sensor status
import React, { useState, useEffect } from 'react';

function MotionSensorCard() {
  const [active, setActive] = useState(false);
  // Mock update: toggle motion status every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Motion Sensor</h5>
        <p className="card-text">Status: {active ? '🟢 Active' : '⚪ Inactive'}</p>
      </div>
    </div>
  );
}

export default MotionSensorCard;