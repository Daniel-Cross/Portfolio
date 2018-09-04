import React, { Component } from 'react';
import '../styles/Info.css';
import Education from './Education';
import Current from './Current';
import Languages from './Languages';
import Experience from './Experience';
import Hobbies from './Hobbies';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      showContentEx: false,
      showContentEd: false
    };
  }

  render() {
    return (
      <div className="Info">
        <Current />
        <div className="boxes-row">
          <Languages />
          <Experience />
          <Hobbies />
        </div>
        <Education />
      </div>
    );
  }
}

export default Info;
