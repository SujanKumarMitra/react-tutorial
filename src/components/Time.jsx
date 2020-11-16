import React, { useState } from 'react';

const getCurrentTime = () => new Date().toLocaleTimeString();

export default function Time() {
    const [time, setTime] = useState(getCurrentTime());
    const updateTime = () => {
        setTime(getCurrentTime());
    }
    setInterval(updateTime, 1000);
    return (
        <>
            <h1>{time}</h1>
            <button type="button" onClick={updateTime} className="btn btn-primary">Update</button>
        </>
    );
}
