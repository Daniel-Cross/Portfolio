import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Blog from './Blog';
import Projects from './Projects';
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
            <Route exact path="/portfolio" component={Projects} />
            <Route exact path="/about/sv" component={AboutSv} />
            <Route exact path="/info/" component={Info} />
            <Route exact path="/info/sv" component={InfoSv} />
            <div className="content">
              <div className="name">Daniel Cross</div>
              <hr className="line" />
              <div className="software">Software Engineer</div>
              <div className="social">
                <a
                  className="twitter"
                  href="https://twitter.com/DanCrossy"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="facebook"
                  href="https://www.facebook.com/crossy1686"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="github"
                  href="https://github.com/Daniel-Cross"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/daniel-cross/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  className="medium"
                  href="https://medium.com/daniel-cross-how-i-learned-to-stop-worrying-and"
                  target="_blank"
                >
                  <i className="fab fa-medium-m" />
                </a>
              </div>
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default About;
