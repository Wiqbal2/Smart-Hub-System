import React from 'react';
import { Navbar as  Navbar } from 'react-bootstrap';
import '../styles.css';
import Temperature  from './Utilities.js';
import passParam from './paramWrapper';
import RoomSchedule from './RoomSchedule.jsx';

class Room extends React.Component {

  constructor(props){
    super(props);
    this.state = {temp: 75};

    if(localStorage.getItem( this.props.params.id ) == null){
      localStorage.setItem( this.props.params.id, parseInt(this.state.temp,10));
    }
  }

  handleTempChange = (temp) => {
    this.setState({temp:temp});
    localStorage.setItem( this.props.params.id, parseInt(temp,10) );
    console.log(this.props.id);
  }


  render(){
    if(localStorage.getItem( this.props.params.id ) == null){
      localStorage.setItem( this.props.params.id, 75);
    }
   
  return (

    <div>
      <div className='device-status'>  
      <h1 className='device-name'>Room: {this.props.params.id}</h1>  
      </div>
        <Navbar />

        <Temperature 
         temp={parseInt(localStorage.getItem( this.props.roomName ),10)}
         roomName={this.props.params.id}
         onTempChange={this.handleTempChange}
        /> 

        <RoomSchedule />
    </div>
  );
}
}

export default passParam(Room)