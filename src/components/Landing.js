import React, { Component } from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="Landing">
        <Link to="/about">
          <img
            className="big-logo"
            src={require('/Users/DanielCross/Projects/contact-manager/src/images/logocolour.png')}
            alt="logo"
          />
        </Link>
      </div>
    );
  }
}

export default Landing;
