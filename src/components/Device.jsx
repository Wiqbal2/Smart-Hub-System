

import '../styles.css';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const initialDeviceStates = {
  'Coffee-Maker': false,
  'Robot-Vacuum': false,
  Fridge: false,
};

function Device() {
  const [deviceStates, setDeviceStates] = useState(initialDeviceStates);
  const [temperature, setTemperature] = useState(75); // Set default temperature to 75°F
  const [isTempSaved, setIsTempSaved] = useState(false); // Track if temperature is saved
  const [isDeviceSaved, setIsDeviceSaved] = useState(false); // Track if device is saved
  const [systemMessage, setSystemMessage] = useState('');

  const { deviceName } = useParams();

  const handleToggle = () => {
    setDeviceStates((prevStates) => ({
      ...prevStates,
      [deviceName]: !prevStates[deviceName],
    }));

    setIsDeviceSaved(true); // Device is saved
    setIsTempSaved(false); // Reset temp saved status
    setSystemMessage(''); // Clear system message
  };

  const increaseTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature + 1);
    setIsTempSaved(false); // Reset temp saved status
    setSystemMessage(''); // Clear system message
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature - 1);
    setIsTempSaved(false); // Reset temp saved status
    setSystemMessage(''); // Clear system message
  };

  const saveSettings = () => {
    setIsTempSaved(true); // Temperature is saved
    setIsDeviceSaved(false); // Reset device saved status
    setSystemMessage('Settings have been saved'); // Set system message

    // Clear system message after 3 seconds
    setTimeout(() => {
      setSystemMessage('');
    }, 3000);
  };

  const saveDeviceSetting = () => {
    setIsDeviceSaved(true); // Reset device saved status
    setSystemMessage('Settings have been saved'); // Set system message

    // Clear system message after 3 seconds
    setTimeout(() => {
      setSystemMessage('');
    }, 3000);
  };

  const isOn = deviceStates[deviceName];

  // Render temperature component if the device is a fridge
  
  if (deviceName === 'Fridge') {
    return (
      <div className = 'DeviceFridge-page'> 
      <div>
        {/* Device Status */}
        <div className='device-status'>
          <h1 className='device-name'>Device: {deviceName}</h1>
        </div>

        {/* Temperature component */}
        <div className='temp-bodyDevice'>
          <div className='app-container'>
            <div className='temperature-display-container'>
              <div className='temperature-display'>{temperature}°F</div>
            </div>
            <div className='button-div'>
              <button onClick={increaseTemperature}>
                <b>+</b>
              </button>
              <button onClick={decreaseTemperature}>
                <b>-</b>
              </button>
            </div>
          </div>
        </div>

        {/* Save button and other components */}
        <div className='container mt-5'>
          <div className='text-center'>
            <h1 className='select'>Selected Device: {deviceName}</h1>
          </div>
          <div className='mt-4 text-center'>
            <h2 className='font-weight-bold'>Start Date & Time:</h2>
            <input type='datetime-local' className='datepicker1' style={{ width: '250px', height: '40px' }} />
          </div>
          <div className='mt-5 text-center'>
            <h3 className='font-weight-bold'>End Date & Time:</h3>
            <input type='datetime-local' className='datepicker2' style={{ width: '250px', height: '40px' }} />
          </div>
          <div className='text-center mt-5'>
            <button className='btn btn-primary btn-lg' onClick={saveSettings}>
              SAVE
            </button>
            {isTempSaved && <p className='temp-saved-message'>{systemMessage}</p>}
          </div>
        </div>
      </div>
      </div>
    );
    
  }
  

  // Render default device component
  return (
    <div className='device-pageMultiple'>
      {/* Device Status */}
      <div className='device-status'>
        <h1 className='device-name'>Device: {deviceName}</h1>
      </div>

      {/* Default device component */}
      <div className='device-container'>
        <Button variant={isOn ? 'success' : 'danger'} className='device-button' onClick={handleToggle}>
          {isOn ? 'On' : 'Off'}
        </Button>
      </div>

      {/* Save button and other components */}
      <div className='container mt-5'>
        <div className='text-center'>
         
        </div>
        <div className='mt-4 text-center'>
          <h2 className='font-weight-bold'>Start Date & Time:</h2>
          <input type='datetime-local' className='datepicker1' style={{ width: '300px', height: '40px' }} />
        </div>
        <div className='mt-5 text-center'>
          <h3 className='font-weight-bold'>End Date & Time:</h3>
          <input type='datetime-local' className='datepicker2' style={{ width: '300px', height: '40px' }} />
        </div>
        <div className='text-center mt-5'>
          <button className='btn btn-primary btn-lg' onClick={saveDeviceSetting}>
            SAVE
          </button>
          {isDeviceSaved && <p className='device-saved-message'>{systemMessage}</p>}
        </div>
      </div>
    </div>
  );
  
}

export default Device;

