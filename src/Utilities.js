import React, { useState } from 'react';


function Temperature() {
    const [temperatureValue, setTemperatureValue] = useState(70);
    return (
        <div class='temp-body'>
            <div class='app-container'>
                <div class='temperature-display-container'>
				    <div className='temperature-display'>{temperatureValue}°F</div>
                </div>
                <div class='button-container'>
                    <button onClick={() => setTemperatureValue(temperatureValue + 1)}>+</button>
                    <button onClick={() => setTemperatureValue(temperatureValue - 1)}>-</button>
                </div>
            </div>
        </div>
    );
}
export default Temperature;





