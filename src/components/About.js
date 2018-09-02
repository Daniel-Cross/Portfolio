import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import Blog from './Blog';
import Portfolio from './Portfolio';
import '../styles/About.css';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="About">
          <Header />
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/portfolio" component={Portfolio} />
            <div className="content">
              Hi
              <br />
              My name is
              <br />
              <span className="name">Daniel Cross</span>
              <br />
              and I'm a<br />
              Software Engineer
              <br />
              <i className="fas fa-chevron-down" />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default About;
