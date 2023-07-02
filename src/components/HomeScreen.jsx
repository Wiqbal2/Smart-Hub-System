import React, { useState, useEffect } from 'react';

function HomeScreen() {
    const [dateTime, setDateTime] = useState(new Date());

    // Function to update date and time
    const updateTime = () => {
        setDateTime(new Date());
    };

    // Set interval to update time every second
    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="home-screen">
            <h1 className="test">Home Screen</h1>
            <img 
                src="/temp_pic.jpg" 
                alt="Home System imagery for home screen" 
                className="home-image"
            />
            <div className="dashboard">
                <div className="room-temp">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>Room Name</td>
                            </tr>
                            <tr>
                                <td>70°F</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="date-time">
                    <p>{dateTime.toLocaleDateString()}</p>
                    <p>{dateTime.toLocaleTimeString()}</p>
                </div>
                <div className="active-rooms">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>Active Rooms</td>
                            </tr>
                            <tr>
                                <td>Living Room</td>
                            </tr>
                            <tr>
                                <td>Kitchen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
