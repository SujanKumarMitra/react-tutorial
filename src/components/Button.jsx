import React from 'react'

export default function Button(props) {
    return (
        <button type="button" onClick={props.onClick} className="btn btn-primary">Click Me</button>
    );
}
