
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
      <div className="container mt-5">
      <div className="text-center">
        <h1 className="select">Selected Device:{deviceName}</h1>
      </div>
      <div className="mt-4 text-center">
        <h2 className="font-weight-bold">Start Date & Time:</h2>
        <input
          type="datetime-local"
          className="datepicker1"
          style={{ width: '300px',height: '40px' }}
        />
      </div>
      <div className="mt-5 text-center">
        <h3 className="font-weight-bold">End Date & Time:</h3>
        <input
          type="datetime-local"
          className="datepicker2"
          style={{ width: '300px' ,height: '40px'}}
        />
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg">SAVE</button>
      </div>
    </div>
    </div>
    
  );
}
//7/3/23
export default Device;
