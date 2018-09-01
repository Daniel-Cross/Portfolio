import React, { Component } from 'react';
import '../src/styles/App.css';
import About from './components/About';
import Landing from './components/Landing';
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
