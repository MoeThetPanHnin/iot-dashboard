// Displays a list of notifications/alerts
import React from 'react';

const mockAlerts = [
  { time: '3:45 PM', message: 'Motion detected in Living Room' },
  { time: '3:42 PM', message: 'Frame sensor: Front Door opened' },
  { time: '3:40 PM', message: 'Vibration detected: Window' }
];

function AlertLog() {
  return (
    <div className="card p-3">
      <h5>Alert Log</h5>
      <ul className="list-group list-group-flush">
        {mockAlerts.map((alert, i) => (
          <li key={i} className="list-group-item">
            <strong>{alert.time}</strong> – {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlertLog;

// This component displays a list of alerts with timestamps.
// It uses Bootstrap classes for styling.
// The alerts are hardcoded in the `mockAlerts` array for demonstration purposes.
// The component maps over the alerts and displays each one in a list item.
// The `key` prop is used to uniquely identify each list item.
// The `strong` tag is used to highlight the time of the alert.