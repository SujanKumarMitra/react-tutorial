import React from 'react'
import { useLocation } from 'react-router-dom';

export default function About(props) {
    const location = useLocation();
    return (
        <>
            <h1>About component</h1>
            <h2>Passed props {props.name}</h2>
            <h2>Current location {location.pathname}</h2>
        </>
    )
}
