import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
export default function ButtonCounter() {

    const [count, setCount] = useState(0);

    const changeCount = (count) => {
        if (count <= -1)
            alert(`can't set negative count`);
        else
            setCount(count);
    };

    return (
        <div>
            Count:: {count} <br />
            <Button color='primary' onClick={() => changeCount(count + 1)}> <AddIcon /> </Button>
            <Button color='primary' onClick={() => changeCount(count - 1)}> <DeleteIcon /></Button>
        </div>
    )
}
