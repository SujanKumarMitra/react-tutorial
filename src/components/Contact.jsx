import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact(props) {
    const { id } = useParams();
    return (
        <>
            <h1>Contact component</h1>
            <h2>Passed props {props.name}</h2>
            <h2>Passed params {id}</h2>
        </>
    )
}
