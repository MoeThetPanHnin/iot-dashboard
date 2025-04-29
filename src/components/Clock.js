// Displays current date & time (updates every second)
import React, { useState, useEffect } from 'react';

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return (
    <div className="sidebar-clock small fw-semibold">
      {now.toLocaleDateString(undefined, options)}
      {' '}
      {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </div>
  );
}
export default Clock;