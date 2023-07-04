

import '../styles.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Initial state of devices
const initialDeviceStates = {
  'Coffee-Maker': false,
  'Robot-Vacuum': false,
  Fridge: false,
};

function Device() {
  const [deviceStates, setDeviceStates] = useState(initialDeviceStates);
  const { deviceName } = useParams();

  const handleToggle = () => {
    setDeviceStates((prevStates) => ({
      ...prevStates,
      [deviceName]: !prevStates[deviceName],
    }));
  };

  const isOn = deviceStates[deviceName];

  return (
    <div>
      <div className='device-status'>  
      <h1 className='device-name'>Device: {deviceName}</h1>  
      </div>
      
      <div className="device-container">
        <Button variant={isOn ? 'success' : 'danger'}  className = "device-button"onClick={handleToggle}>
          {isOn ? 'On' : 'Off'}
        </Button>
      </div>
    </div>
  );
}
//7/3/23
export default Device;
