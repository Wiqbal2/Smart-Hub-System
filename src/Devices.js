import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesDev.css'; // Import the CSS file


const Devices = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="select">Selected Device:</h1>
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
  );
};

export default Devices;

