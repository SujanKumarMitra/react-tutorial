import React, { createContext } from 'react';
import Child from './Child';

export const Name = createContext();

export default function Parent() {
    const fullName = 'sujan kr';
    return (
        <>
            <Name.Provider value={fullName}>
                <h1>Parent provided value = '{fullName}'</h1>
                <Child />
            </Name.Provider>
        </>
    )
}