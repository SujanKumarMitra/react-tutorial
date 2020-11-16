import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

export default function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const titleTag = document.querySelector('head title');
        titleTag.textContent = `You clicked ${count} times`;
    }, [count]);

    return (
        <Button variant='contained' onClick={() => setCount(count => count + 1)} color='primary' >Click Me {count}</Button>
    );
}