import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the CSS file

const LightSys = () => {
//saves the dates fromm datepicker
  const [savedDates, setSavedDates] = useState([]);

  const handleSaveButtonClick = () => {
    const startDateValue = document.querySelector('.datepicker1').value;
    const endDateValue = document.querySelector('.datepicker2').value;

    //initialize vars from d1 and d2
    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);
    const startTime = startDate.toLocaleTimeString();
    const endTime = endDate.toLocaleTimeString();

    //prints dates to console log
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);

    //making dates object
    const newDate = { startDate: startDateValue, endDate: endDateValue };

    //adds dates to array
    setSavedDates([...savedDates, newDate]);
   };
//actual light system layout
  return (
    <div className="light-body">
      <div className="text-center">
        <h1 className="top-li">🌸Garden System🌸</h1>
        <h4 className="title-li">💡Light System💡</h4>
      </div>
      <div className="mt-4 text-center">
        <h2 className="font-weight-bold-li">Start Date & Time:</h2>
        <input
          type="datetime-local"
          className="datepicker1"
          style={{ width: '300px',height: '40px' }}
        />
      </div>
      <div className="mt-5 text-center">
        <h3 className="font-weight-bold-li">End Date & Time:</h3>
        <input
          type="datetime-local"
          className="datepicker2"
          style={{ width: '300px' ,height: '40px'}}
        />
      </div>
      <div className="text-center mt-5">
        <button className="save-btn-li" onClick={handleSaveButtonClick}>SAVE</button>
      </div>
    </div>
  );
};

export default LightSys;