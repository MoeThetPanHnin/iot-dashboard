// Main layout: Sidebar + Dashboard
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;