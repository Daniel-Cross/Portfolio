import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Contact">
        <div className="contact-title">Get in touch</div>
        <form className="contact-form">
          <input className="contact-input" type="text" placeholder="Name" />
          <input
            className="contact-input"
            type="email"
            placeholder="Email Address"
          />
          <textarea
            rows="8"
            cols="50"
            className="contact-input"
            type="text"
            placeholder="Your message"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
