# 🏠 IoT Home-Security Dashboard

A one-page React app that lets you **see what’s happening at home in real time and take action right from your browser**.  
Think of it as a smart-home command-centre for my university capstone project.

## ✨ What you can do

- **Live sensor cards** – temperature & humidity, motion, vibration, frame/door, and light readings update in real time. :contentReference[oaicite:0]{index=0}  
- **Device control** – flip relays or switches with one click (e.g. turn lights on/off). :contentReference[oaicite:1]{index=1}  
- **Alert log** – see the latest security events at a glance.  
- **Member panel** – quickly add / remove house members and change the password. :contentReference[oaicite:2]{index=2}  
- **Chat-bot helper** – get friendly tips right inside the dashboard.  
- **Voice commands** – say “Turn on the living-room light” and it just happens.  
- **Responsive layout** – looks good on a laptop, tablet, or wall-mounted tablet.

> Everything lives on a single screen to stay fast and distraction-free.

## 🛠️ Tech stack

| Purpose            | Tech                                                                 |
|--------------------|----------------------------------------------------------------------|
| UI / State         | React 18, React Hooks                                               |
| Styling            | Bootstrap 5 + Bootstrap-Icons                                       |
| Voice interface    | Web Speech API                                                      |
| Data flow (DIY)    | Plug in your MQTT / REST / WebSocket endpoints in each sensor card. |

## 🚀 Quick start


# 1  Clone and install deps

git clone https://github.com/your-username/iot-dashboard.git
cd iot-dashboard
npm install       # or pnpm / yarn

# 2  Fire it up
npm start         # opens http://localhost:3000


## 🔍 Project layout

src/
├─ components/      # Re-usable cards, sidebar, voice command handler, etc.
├─ pages/           # <Dashboard/> assembles all cards into a grid
├─ App.js           # layout: Sidebar + Dashboard
└─ index.js         # React entry

## 📄 Licence

MIT – do whatever you like, just keep the licence file.
