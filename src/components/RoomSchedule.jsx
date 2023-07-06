import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // Import the CSS file

const RoomSchedule = ({ onSaveDates }) => {
    //saves the dates fromm datepicker
  const saveOnClick = () => {
    const startDateValue = document.querySelector('.datepicker1').value;
    const endDateValue = document.querySelector('.datepicker2').value;
    onSaveDates(startDateValue, endDateValue);
  };
    return(
        <div>
            <div className="mt-4 text-center">
                <h2 className="start-ro">Start Date & Time:</h2>
                <input
                    type="datetime-local"
                    className="datepicker1"
                    style={{ width: '300px', height: '40px' }}
                />
            </div>
            <div className="mt-5 text-center">
                <h3 className="end-ro">End Date & Time:</h3>
                <input
                    type="datetime-local"
                    className="datepicker2"
                    style={{ width: '300px', height: '40px' }}
                />
            </div>
            <div className="text-center mt-5">
                <button className="save-btnro">SAVE</button>
            </div>
        </div>
    );
}
export default RoomSchedule;