import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

export default function App() {

  return (
    <>
      <Switch>
        <Route path="/(about|)" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}