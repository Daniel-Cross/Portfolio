import React, { Component } from 'react';
import '../styles/Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  render() {
    return (
      <div className="Portfolio">
        <div className="card">
          <img
            className="avatar"
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-05 at 12.56.12.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Surreal Estate</b>
            </h4>
            <p>
              Property search engine similar to Right Move or Zoopla. Built
              using React
            </p>
          </div>
          <div className="card-buttons">
            <a
              href="https://github.com/Daniel-Cross/surreal-estate"
              target="_blank"
            >
              <button className="work-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="avatar"
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-07 at 13.26.04.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Weather App</b>
            </h4>
            <p>
              Dynamic weather app that gives weekly weather reports based on
              api. Built using React
            </p>
          </div>
          <div className="card-buttons">
            <a
              href="https://github.com/Daniel-Cross/react-weather-app"
              target="_blank"
            >
              <button className="work-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="avatar"
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-07 at 13.32.07.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Cruise Ship</b>
            </h4>
            <p>Operational cruise ship with gui. Built using JavaScript</p>
          </div>
          <div className="card-buttons">
            <a
              href="https://github.com/Daniel-Cross/cruise-ships"
              target="_blank"
            >
              <button className="work-button">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
