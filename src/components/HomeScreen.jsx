import React, { useState, useEffect, useContext } from 'react';
import { DeviceContext } from './DeviceContext';

function HomeScreen() {
    const [dateTime, setDateTime] = useState(new Date());
    const { deviceStatuses } = useContext(DeviceContext);
    const activeDevices = Object.keys(deviceStatuses).filter(device => deviceStatuses[device]);

    const [weatherData, setWeatherData] = useState(null);

    // Function to update date and time
    const updateTime = () => {
        setDateTime(new Date());
    };

    // Set interval to update time every second
    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval); // Clear interval on component unmount
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
