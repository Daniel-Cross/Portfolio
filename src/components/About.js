import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="About">
        <Header />
        <Switch>
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Switch>
          <Route exact path="/blog" component={Blog} />
        </Switch>
        <Switch>
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    );
  }
}

export default About;
