import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="Contact">
        <div className="contact-title">Get in touch</div>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <input
            className="contact-input"
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={this.handleChange}
          />
          <textarea
            rows="8"
            cols="50"
            className="contact-input"
            type="text"
            placeholder="Your message"
            name="message"
            onChange={this.handleChange}
          />
        </form>
        <button className="contact-button">
          <i className="far fa-envelope" />
        </button>
      </div>
    );
  }
}

export default Contact;
