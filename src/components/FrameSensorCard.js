// Displays door/window frame sensor status
import React, { useState, useEffect } from 'react';

function FrameSensorCard() {
  const [open, setOpen] = useState(false);
  // Mock update: toggle open/closed randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(prev => !prev);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Frame Sensor</h5>
        <p className="card-text">Frame is {open ? '🚪 Opened' : '🔒 Closed'}</p>
      </div>
    </div>
  );
}

export default FrameSensorCard;


// This component simulates a door/window frame sensor card that updates its status every 7 seconds.
// The status alternates between "Opened" and "Closed" based on a random condition.
// The card is styled using Bootstrap classes for a consistent look and feel.
// The component uses React hooks to manage state and side effects.
// The `useEffect` hook is used to set up an interval that updates the `open` state.
// The `setInterval` function is used to simulate the open/closed events, and `clearInterval` is called to clean up when the component unmounts.
// The card displays the current status of the frame sensor, indicating whether it is opened or closed.
// The card is styled using Bootstrap classes for a consistent look and feel.