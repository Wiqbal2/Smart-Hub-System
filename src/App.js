import React from'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
