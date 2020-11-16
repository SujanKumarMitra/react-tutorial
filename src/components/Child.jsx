import React, { useContext } from 'react';
import { Name } from './Parent'
export default function Child() {

    const fullName = useContext(Name);

    return (
        <h2>Child consumed = '{fullName}'</h2>
    );
}
