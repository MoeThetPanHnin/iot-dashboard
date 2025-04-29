// Compose all cards into grid
import React from 'react';
import MotionSensorCard from '../components/MotionSensorCard';
import VibrationSensorCard from '../components/VibrationSensorCard';
import FrameSensorCard from '../components/FrameSensorCard';
import LightSensorCard from '../components/LightSensorCard';
import DeviceControlCard from '../components/DeviceControlCard';
import TempHumidityCard from '../components/TempHumidityCard';
import AlertLog from '../components/AlertLog';
import MembersList from '../components/MemberList';
import ChatBotPanel from '../components/ChatBotPanel';
import VoiceCommand from '../components/VoiceCommand';
import Clock from '../components/Clock';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row g-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3">WELCOME FROM HOME</h1>
            <Clock />
          </div>
        </div>
        <div className="col-xl-3 col-md-6"><TempHumidityCard /></div>
        <div className="col-xl-3 col-md-6"><MotionSensorCard /></div>
        <div className="col-xl-3 col-md-6"><VibrationSensorCard /></div>
        <div className="col-xl-3 col-md-6"><FrameSensorCard /></div>

        <div className="col-xl-3 col-md-6"><LightSensorCard /></div>
        <div className="col-xl-3 col-md-6"><DeviceControlCard /></div>
        <div className="col-xl-3 col-md-6"><AlertLog /></div>
        <div className="col-xl-3 col-md-6"><MembersList /></div>

        <div className="col-lg-6"><ChatBotPanel /></div>
        <div className="col-lg-6"><VoiceCommand /></div>
      </div>
    </div>
  );
}

export default Dashboard;