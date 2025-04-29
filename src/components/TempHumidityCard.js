// Temperature & Humidity card – click to reveal a detailed weather modal
import React, { useState, useEffect } from 'react';
import { ThermometerHalf, DropletHalf, CloudSun } from 'react-bootstrap-icons';
import { Modal, Button } from 'react-bootstrap';

function TempHumidityCard() {
  const [temp, setTemp] = useState(22);
  const [hum, setHum] = useState(60);
  const [show, setShow] = useState(false);

  // mock live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(20 + Math.floor(Math.random() * 6)); // 20‑25°C
      setHum(45 + Math.floor(Math.random() * 20)); // 45‑64%
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // mock extra weather data
  const weatherDetail = {
    condition: 'Partly Cloudy',
    wind: `${5 + Math.floor(Math.random()*10)} km/h`,
    pressure: `${1000 + Math.floor(Math.random()*20)} hPa`,
  };

  return (
    <>
      <div
        role="button"
        className="card temp-card text-center p-4 hover-highlight"
        onClick={() => setShow(true)}
      >
        <h5 className="card-title mb-3 d-flex justify-content-center align-items-center gap-2">
          <CloudSun size={18} /> Environment
        </h5>
        <small className="text-muted">click for details</small>
        <div className="d-flex justify-content-around align-items-center mt-3">
          {/* Temperature Gauge */}
          <div className="gauge-wrapper">
            <svg viewBox="0 0 36 36" className="circular-chart hot">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path
                className="circle"
                strokeDasharray={`${(temp/40)*100}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">{temp}°C</text>
            </svg>
            <ThermometerHalf className="metric-icon" />
          </div>
          {/* Humidity Gauge */}
          <div className="gauge-wrapper">
            <svg viewBox="0 0 36 36" className="circular-chart humid">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path
                className="circle"
                strokeDasharray={`${hum}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">{hum}%</text>
            </svg>
            <DropletHalf className="metric-icon" />
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Weather Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center gap-3 mb-3">
            <CloudSun size={32} className="text-warning" />
            <h4 className="mb-0">{weatherDetail.condition}</h4>
          </div>
          <p className="mb-1"><strong>Temperature:</strong> {temp} °C</p>
          <p className="mb-1"><strong>Humidity:</strong> {hum} %</p>
          <p className="mb-1"><strong>Wind:</strong> {weatherDetail.wind}</p>
          <p className="mb-0"><strong>Pressure:</strong> {weatherDetail.pressure}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TempHumidityCard;
