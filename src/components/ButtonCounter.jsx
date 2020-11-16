import Button from './Button';
import React, { useState } from 'react'

class Counter {
  constructor(count = 0) {
    this.count = count;
  }
}

const incrementAndGet = (counter) => {
  return new Counter(counter.count + 1);
}

export default function ButtonCounter() {
  let [state, setState] = useState(new Counter());

  const incrementCount = () => {
    setState(incrementAndGet(state));
  }

  return (
    <>
      <h1>Clicked {state.count} times</h1>
      <Button onClick={incrementCount} />
    </>
  )
}


