import React from 'react';
import { Name } from './Parent'
export default function Child() {
    return (
        <>
            <Name.Consumer>
                {(fullName) => {
                    return (
                        <h2>Child consumed = '{fullName}'</h2>
                    );
                }}
            </Name.Consumer>
        </>
    );
}
