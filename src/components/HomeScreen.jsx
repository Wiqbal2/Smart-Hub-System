import React, { useState, useEffect, useContext } from 'react';
import { DeviceContext } from './DeviceContext';

function HomeScreen() {
    const [dateTime, setDateTime] = useState(new Date());
    const [rooms, setRooms] = useState([]);
    const [roomTemps, setRoomTemps] = useState({});
    const { deviceStatuses } = useContext(DeviceContext);
    const activeDevices = Object.keys(deviceStatuses).filter(device => deviceStatuses[device]);
    const [weatherData, setWeatherData] = useState(null);

    // Function to update date and time
    const updateTime = () => {
        setDateTime(new Date());
    };

    // Function to update rooms and room temperatures
    // Function to update room names and temperatures
    const updateRoomData = () => {
        const allKeys = Object.keys(localStorage);
        const roomKeys = allKeys.filter(key => key !== "deviceStatuses" && key !== "roomStartDate" && key !== "roomEndDate");

        let newRoomNames = [];
        let newRoomTemps = {};

        roomKeys.forEach(key => {
            newRoomNames.push(key);
            newRoomTemps[key] = localStorage.getItem(key);
        });

        setRooms(newRoomNames);
        setRoomTemps(newRoomTemps);
    };


    // Set interval to update time every second and room data every minute
    useEffect(() => {
        const intervalTime = setInterval(updateTime, 1000);
        const intervalRoomData = setInterval(updateRoomData, 1000 * 60); // Update room data every minute
        return () => {
            clearInterval(intervalTime); // Clear interval on component unmount
            clearInterval(intervalRoomData); // Clear room data interval on component unmount
        };
    }, []);

    // Function to fetch weather data
    useEffect(() => {
        const getWeatherData = async () => {
            const response = await fetch(
                'https://api.open-meteo.com/v1/forecast?latitude=39.29&longitude=-76.61&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch'
            );
            const data = await response.json();
            setWeatherData(data.current_weather.temperature);
        };
        getWeatherData();
    }, []);

    return (
        <div className="home-screen">
            <h1 className="hs-title">Home Screen</h1>
            <img
                src="/image2.jpg"
                alt="Home System imagery for home screen"
                className="home-image"
            />
            <div className="dashboard">
                <div className="room-temp">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <td>Room Name</td>
                                <td>Temperature</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map(room => (
                                <tr key={room}>
                                    <td>{room}</td>
                                    <td>{roomTemps[room]}°F</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="date-time">
                    <p>{dateTime.toLocaleDateString()}</p>
                    <p>{dateTime.toLocaleTimeString()}</p>
                    {weatherData && <p>Current Weather: {weatherData}°F</p>}
                </div>
                <div className="active-devices">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>Active Devices</td>
                            </tr>
                            {activeDevices.map(device => (
                                <tr key={device}>
                                    <td>{device}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
