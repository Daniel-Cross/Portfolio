import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="Navbar">
    <div className="title">
      <Link className="item" to="/">
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
      {/* <span className="swedish">
        <Link className="translate" to="/about/sv">
          Swedish
        </Link>
      </span> */}

      <span className="nav-buttons">
        <Link className="item" to="/info">
          <i className="fas fa-info" /> Info
        </Link>
        {/* <Link className="item" to="/contact"> */}
        <a href={'mailto: dan.s.cross@icloud.com?subject=Hi%20Daniel!'}>
          <i className="far fa-envelope" /> Contact
        </a>
        {/* </Link> */}

        {/* <Link className="item" to="/blog">
          <i className="fas fa-pencil-alt" /> Blog
        </Link> */}

        <Link className="item" to="/portfolio">
          <i className="fas fa-book" /> Portfolio
        </Link>
      </span>
    </div>
  </div>
);

export default Navbar;
