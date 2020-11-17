import { Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <h1>Sorry, invalid url</h1>
            <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }} >
                <Button variant="contained" color='primary' >Go Back</Button>
            </NavLink>
        </>
    )
}
