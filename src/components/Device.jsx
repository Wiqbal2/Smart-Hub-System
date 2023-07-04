// import React, { useState, useEffect } from 'react';
// import { NavDropdown, Form } from 'react-bootstrap';
// import '../styles.css';
// import { useParams } from 'react-router-dom';

// function Device({ devices }) {
//   const { deviceName } = useParams();
//   const [selectedDevice, setSelectedDevice] = useState(null);
//   const [deviceStates, setDeviceStates] = useState({});

//   useEffect(() => {
//     setSelectedDevice(deviceName);
//   }, [deviceName]);

//   useEffect(() => {
//     // Initialize device states when the devices prop changes
//     const newDeviceStates = {};
//     devices.forEach((device) => {
//       newDeviceStates[device] = false; // Set initial state to false (off)
//     });
  
//     setDeviceStates(newDeviceStates);
//   }, [devices]);

//   const handleSwitchChange = () => {
//     setDeviceStates((prevStates) => ({
//       ...prevStates,
//       [selectedDevice]: !prevStates[selectedDevice],
//     }));
//   };

//   const isDeviceOn = deviceStates[selectedDevice];

//   return (
//     <div className="trash title">
//       {/* Render the selected device */}
//       {selectedDevice && (
//         <div>
//           <h2>Selected Device: {deviceName}</h2>
//           {/* Add controls or functionality specific to the selected device */}
//           <div>
//             <Form.Check
//               type="switch"
//               id="deviceSwitch"
//               label="Power"
//               checked={isDeviceOn}
//               onChange={handleSwitchChange}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Device;



// import '../styles.css';
// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

// function Device() {
//   const [isOn, setIsOn] = useState(false);
//   const { deviceName } = useParams();

//   const handleToggle = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div>
//       <h1>Device: {deviceName}</h1>
//       <div className="OnOff"> 
//       <Button variant={isOn ? 'success' : 'danger'} onClick={handleToggle}>
//         {isOn ? 'On' : 'Off'}
//       </Button>
      
//       </div>
      
//     </div>
//   );
// }

// export default Device;

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
      <h1>Device: {deviceName}</h1>
      <div className="OnOff">
        <Button variant={isOn ? 'success' : 'danger'} onClick={handleToggle}>
          {isOn ? 'On' : 'Off'}
        </Button>
      </div>
    </div>
  );
}
//7/3/23
export default Device;
