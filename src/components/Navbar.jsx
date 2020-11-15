import React from 'react';

const CSS = {
    textTransform: 'uppercase'
};

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-light navbar-nav bg-light">
            <span style={CSS} className="navbar-brand mb-0 h1">{props.text}</span>
        </nav>
    );
}