import React from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="Landing">
    <Link to="/about">
      <img
        className="big-logo"
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
);

export default Landing;
