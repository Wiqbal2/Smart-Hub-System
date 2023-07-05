
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Room from './components/Room';
import Device from './components/Device';
import IrrigationSys from './IrrigationSys.js';
import LightSys from './LightSys.js';

function App() {
  const [devices, setDevices] = useState(['Coffee-Maker', 'Robot-Vacuum', 'Fridge']);

  const addDevice = (deviceName) => {
    setDevices([...devices, deviceName]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar devices={devices} addDevice={addDevice} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Room/:id"  element={<Room />} component={(props) => 
          <Room value={props.match.params.id}/> 
          }/>
          <Route path="/Device/:deviceName" element={<Device devices={devices} />} />
          <Route path="/irrigation" element={<IrrigationSys />} />
          <Route path="/lightsys" element={<LightSys />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
