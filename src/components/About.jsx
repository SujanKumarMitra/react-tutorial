import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

export default function About(props) {
    const location = useLocation();
    const history = useHistory();
    return (
        <>
            <h1>About component</h1>
            <h2>Passed props {props.name}</h2>
            <h2>Current location {location.pathname}</h2>
            <button onClick={history.goBack}>Go Back</button>
        </>
    )
}
