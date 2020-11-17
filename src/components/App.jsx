import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

export default function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}