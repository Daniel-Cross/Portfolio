import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = props => {
  return (
    <div className="Header">
      <div className="title">
        <img
          className="logo"
          src={require('/Users/DanielCross/Projects/contact-manager/src/images/logocolour.png')}
          alt="logo"
        />
      </div>
      <div className="links">
        <i className="far fa-envelope" /> contact
        <i className="fas fa-pencil-alt" /> blog
        <i className="fas fa-book" /> portfolio
      </div>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
