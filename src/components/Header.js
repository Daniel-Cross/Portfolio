import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <div className="title">
      <Link className="item" to="/about">
        <img
          className="logo"
          src={require('/Users/DanielCross/Projects/portfolio/src/images/logocolour.png')}
          onMouseOver={e =>
            (e.currentTarget.src = require('/Users/DanielCross/Projects/portfolio/src/images/faviconcolour.png'))
          }
          onMouseOut={e =>
            (e.currentTarget.src = require('/Users/DanielCross/Projects/portfolio/src/images/logocolour.png'))
          }
          alt="logo"
        />
      </Link>
    </div>
    <div className="links">
      <span className="swedish">
        <Link className="translate" to="/about/sv">
          Swedish
        </Link>
      </span>
      <span className="nav-buttons">
        <Link className="item" to="/contact">
          <i className="far fa-envelope" /> Contact
        </Link>
        <Link className="item" to="/blog">
          <i className="fas fa-pencil-alt" /> Blog
        </Link>
        <Link className="item" to="/portfolio">
          <i className="fas fa-book" /> Portfolio
        </Link>
      </span>
      <span className="social">
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
          className="facebook"
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
      </span>
    </div>
  </div>
);

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
