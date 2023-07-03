// import React from'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomeScreen from './components/HomeScreen';
// import Room from './components/Room';
// import Device from './components/Device';


// const devices = ['Coffee-Maker', 'Robot-Vacuum', 'Fridge'];


// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Navbar/>
//         <Routes>
//         <Route path='/' element={<HomeScreen />} />
//         <Route path='/Room' element={<Room />} />
//         <Route path='/Device/:deviceName' element={<Device devices={devices} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Room from './components/Room';
import Device from './components/Device';

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
          <Route path="/Room" element={<Room />} />
          <Route path="/Device/:deviceName" element={<Device devices={devices} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
