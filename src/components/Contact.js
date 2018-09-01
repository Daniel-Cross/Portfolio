import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { contact } = this.props;
    return <div className="Contact" />;
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
