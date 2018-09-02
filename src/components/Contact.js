import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Contact">
        <div className="input">hello world</div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
