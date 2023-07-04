import React, { useState, props } from 'react';


class Temperature extends React.Component {

   
    constructor(props){
        super(props);
    }

    increase = (temperature) => {
        const p = this.props.temp;
        this.props.onTempChange(p+1);
    }

    decrease = (temperature) => {
        const p = this.props.temp;
        this.props.onTempChange(p-1);
    }

    render() {
        //const [temperatureValue, setTemperatureValue] = useState(70);
        const movado = this.props.temp;
    return (
        <div class='temp-body'>
            <div class='app-container'>
                <div class='temperature-display-container'>
				    <div className='temperature-display'>{movado}°F</div>
                </div>
                <div class='button-div'>
                    <button onClick={() => this.increase(movado)}><b>+</b></button>
                    <button onClick={() => this.decrease(movado)}><b>-</b></button>
                </div>
            </div>
        </div>
    );
}
}

export default Temperature;





