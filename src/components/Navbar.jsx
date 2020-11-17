import { AppBar, IconButton, Toolbar, Typography, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        Navbar
                    </Typography>
                    <Link to='/about' style={{ color: 'inherit', textDecoration:'none' }} >
                        <MenuItem >About</MenuItem>
                    </Link>
                    <Link to='/contact' style={{ color: 'inherit', textDecoration:'none' }} >
                        <MenuItem >Contact</MenuItem>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}
