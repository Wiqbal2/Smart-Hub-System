import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the CSS file

const LightSys = ({ onSaveDates }) => {
//saves the dates fromm datepicker

  const saveOnClick = () => {
    const startDateValue = document.querySelector('.datepicker1').value;
    const endDateValue = document.querySelector('.datepicker2').value;
    onSaveDates(startDateValue, endDateValue);
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
        <button className="save-btn-li" onClick={() => {saveOnClick()}}>SAVE</button>
      </div>
    </div>
  );
};

export default LightSys;