import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to='/about' style={{ color: 'inherit', textDecoration:'none' }} >
                        <MenuItem >About</MenuItem>
                    </NavLink>
                    <NavLink to='/contact' style={{ color: 'inherit', textDecoration:'none' }} >
                        <MenuItem >Contact</MenuItem>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </>
    )
}
