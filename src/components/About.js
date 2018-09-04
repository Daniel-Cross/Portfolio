import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Blog from './Blog';
import Portfolio from './Portfolio';
import AboutSv from './About.sv';
import Info from './Info';
import InfoSv from './Info.sv';
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
          <Navbar />
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about/sv" component={AboutSv} />
            <Route exact path="/info/" component={Info} />
            <Route exact path="/info/sv" component={InfoSv} />
            <div className="content">
              Hi
              <br />
              my name is
              <br />
              <img
                className="click-logo"
                src={require('/Users/DanielCross/Projects/portfolio/src/images/clickHere.png')}
                alt="click-here"
              />
              <Link className="name-link" to="/info">
                <span className="name">Daniel Cross</span>
              </Link>
              <br />
              and I'm a<br />
              Software Engineer
              <br />
              <hr className="line" />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default About;
