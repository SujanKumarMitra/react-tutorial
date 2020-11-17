import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function Contact(props) {
    const { id } = useParams();
    const history = useHistory();
    return (
        <>
            <h1>Contact component</h1>
            <h2>Passed props {props.name}</h2>
            <h2>Passed params {id}</h2>
            <button onClick={history.goBack}>Go Back</button>
        </>
    )
}
