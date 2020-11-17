import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Error from './Error';

export default function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/about" render={() => <About name='sujan' />} />
        <Route exact path="/contact/:id" render={() => <Contact name='kumar' />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}