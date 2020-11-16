import { InputLabel, MenuItem, Select } from '@material-ui/core'
import Axios from 'axios';
import React, { useState } from 'react'

const pikachus = [
    {
        id: 1,
        name: 'bulbasaur'
    },
    {
        id: 25,
        name: 'pikachu'
    },
    {
        id: 3,
        name: 'venusaur'
    },
    {
        id: 4,
        name: 'charmander'
    },
    {
        id: 5,
        name: 'charmelon'
    },
];

export default function Pokemon() {

    const getMenuItems = (pikachu, index) => {
        return <MenuItem key={index} value={pikachu.id}>{pikachu.id}</MenuItem>
    };

    const handleSelect = (event) => {
        const { value } = event.target;
        const response = Axios.get(`https://pokeapi.co/api/v2/pokemon-form/${value}`);
        response.then(response => {
            const data = { name: response.data.name, moves: value };
            setMoves(data.moves);
            setPikachuName(data.name);
        });
    };

    const [moves, setMoves] = useState(0);
    const [pikachuName, setPikachuName] = useState('');

    return (
        <>
            <h1>Selected item <span style={{ color: 'red' }}>'{pikachuName}'</span></h1>
            <h1>I have <span style={{ color: 'red' }}>{moves}</span> moves</h1>
            <InputLabel id="demo-simple-select-label">Id</InputLabel>
            <Select value='' onChange={handleSelect}>
                {pikachus.map(getMenuItems)}
            </Select>
        </>
    )
}
