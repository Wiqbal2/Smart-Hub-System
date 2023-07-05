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
  const [deviceStatuses, setDevicesStatuses] = useState({
    'Coffee-Maker': false,
    'Robot-Vacuum': false,
    'Fridge': false,
  });

  const addDevice = (deviceName) => {
    setDevicesStatuses({ ...deviceStatuses, [deviceName]: false });
  };

  return (
    <DeviceContext.Provider value={{ deviceStatuses, setDevicesStatuses }}>
      <div className="App">
        <Router>
          <Navbar deviceStatuses={deviceStatuses} addDevice={addDevice} />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Room/:id" element={<Room />} />
            <Route path="/Device/:deviceName" element={<Device />} />
            <Route path="/irrigation" element={<IrrigationSys />} />
            <Route path="/lightsys" element={<LightSys />} />
          </Routes>
        </Router>
      </div>
    </DeviceContext.Provider>
  );
}

export default App;
