// Displays ambient light level
import React, { useState, useEffect } from 'react';

function LightSensorCard() {
  const [lux, setLux] = useState(0);
  // Mock update: random lux values
  useEffect(() => {
    const interval = setInterval(() => {
      setLux(Math.floor(Math.random() * 200));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Light Sensor</h5>
        <p className="card-text">Ambient Light: {lux} lux</p>
      </div>
    </div>
  );
}

export default LightSensorCard;