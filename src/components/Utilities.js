import React from 'react';
import withRouter from './paramWrapper';


class Temperature extends React.Component {


    constructor(props){
        super(props);
    }


    changeTemp = (temperature) => {
        const temp = parseInt(localStorage.getItem( this.props.params.id ),10);

        if(temperature == 1){
            this.props.onTempChange(parseInt(temp,10)+1);
            localStorage.setItem( this.props.params.id, parseInt(temp,10)+1 );

        }
        else{
            this.props.onTempChange(parseInt(temp,10)-1);
            localStorage.setItem( this.props.params.id, parseInt(temp,10)-1 );
        }
    }

    render() {
        //const [temperatureValue, setTemperatureValue] = useState(70);
        const displayTemp = parseInt(localStorage.getItem( this.props.params.id ),10);
    return (
        <div class='temp-body'>
            <div class='app-container'>
                <div class='temperature-display-container'>
                    <div className='temperature-display'>{displayTemp}°F</div>
                </div>
                <div class='button-div'>
                    <button onClick={() => this.changeTemp(1)}><b>+</b></button>
                    <button onClick={() => this.changeTemp(-1)}><b>-</b></button>
                </div>
            </div>
        </div>
    );
}
}

export default withRouter(Temperature);