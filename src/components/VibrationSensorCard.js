// Displays vibration sensor status
import React, { useState, useEffect } from 'react';

function VibrationSensorCard() {
  const [vibrating, setVibrating] = useState(false);
  // Mock update: random vibration events
  useEffect(() => {
    const interval = setInterval(() => {
      setVibrating(Math.random() > 0.7);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Vibration Sensor</h5>
        <p className="card-text">Status: {vibrating ? '⚠️ Vibrating' : '✅ Stable'}</p>
      </div>
    </div>
  );
}

export default VibrationSensorCard;

// This component simulates a vibration sensor card that updates its status every 4 seconds.
// The status alternates between "Vibrating" and "Stable" based on a random condition.
// The card is styled using Bootstrap classes for a consistent look and feel.
// The component uses React hooks to manage state and side effects.
// The `useEffect` hook is used to set up an interval that updates the `vibrating` state.
// The `setInterval` function is used to simulate the vibration events, and `clearInterval` is called to clean up when the component unmounts.
// The card displays the current status of the vibration sensor, indicating whether it is vibrating or stable.