// Enhanced frontend chatbot with voice support
import React, { useState, useEffect, useRef } from 'react';
import { Mic } from 'react-bootstrap-icons';

function ChatBotPanel() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const sensors = {
    motion: 'No motion detected',
    vibration: 'Stable (no vibration)',
    frame: 'Front door closed',
    light: `${Math.floor(Math.random() * 200)} lux`,
    temperature: `${Math.floor(20 + Math.random() * 6)} °C`,
    humidity: `${Math.floor(45 + Math.random() * 20)} %`
  };

  const sendMessage = (msg = input) => {
    if (!msg.trim()) return;
    const userMsg = { from: 'user', text: msg };
    setHistory(prev => [...prev, userMsg]);

    const cmd = msg.toLowerCase().trim();
    let reply;
    if (cmd.includes('help')) {
      reply = 'Commands: help, status, motion, vibration, frame, light, temperature, humidity.';
    } else if (Object.keys(sensors).some(key => cmd.includes(key))) {
      const key = Object.keys(sensors).find(k => cmd.includes(k));
      reply = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${sensors[key]}`;
    } else if (cmd.includes('status')) {
      reply = 'All systems operational 😊';
    } else {
      reply = 'Sorry, I did not understand that. Type "help" or use the mic.';
    }

    const botMsg = { from: 'bot', text: reply };
    setHistory(prev => [...prev, botMsg]);
    setInput('');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') sendMessage();
  };

  // Web Speech API setup
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      sendMessage(speech);
    };

    recognitionRef.current = recognition;
  }, [sendMessage]);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  return (
    <div className="card p-3">
      <h5>Assistant Chat</h5>
      <div className="chat-window mb-2">
        {history.map((msg, i) => (
          <div key={i} className={msg.from === 'user' ? 'text-end text-primary' : 'text-start text-secondary'}>
            <small>{msg.text}</small>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type 'help' or try voice..."
        />
        <button className="btn btn-outline-secondary" onClick={startListening} title="Voice Command">
          <Mic className={listening ? 'text-danger' : ''} />
        </button>
        <button className="btn btn-primary" onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
}

export default ChatBotPanel;

// Other components unchanged (MotionSensorCard, VibrationSensorCard, FrameSensorCard, LightSensorCard, DeviceControlCard, AlertLog, MembersList, VoiceCommand, TempHumidityCard, Dashboard, styles.css)
