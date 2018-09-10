import React, { Component } from 'react';
import '../src/styles/App.css';
import About from './components/About';
import { Switch, Route } from 'react-router';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
