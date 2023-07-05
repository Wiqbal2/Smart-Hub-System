
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Room from './components/Room';
import Device from './components/Device';
import IrrigationSys from './IrrigationSys.js';
import LightSys from './LightSys.js';
import { DeviceContext } from './components/DeviceContext';

function App() {
  const [devices, setDevices] = useState(['Coffee-Maker', 'Robot-Vacuum', 'Fridge']);

  const addDevice = (deviceName) => {
    setDevicesStatuses({ ...deviceStatuses, [deviceName]: false });
  };

  const addHistoryItem = (item) => {
    setHistoryItems([...historyItems, item]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar devices={devices} addDevice={addDevice} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Device/:deviceName" element={<Device devices={devices} />} />
          <Route path="/irrigation" element={<IrrigationSys />} />
          <Route path="/lightsys" element={<LightSys />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

