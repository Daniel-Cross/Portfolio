import React, { Component } from 'react';
import '../styles/Portfolio.css';

class Projects extends Component {
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
            src={require('/Users/DanielCross/Projects/portfolio/src/images/5-3-1.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>5-3-1 Workout Tracker</b>
            </h4>
            <p>
              Currently under construction. App to track progress and
              development of your 5-3-1 workout plan. Front end created in
              React.js and back end created using Node.js, Express.js and
              MongoDB.
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
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-05 at 12.56.12.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Surreal Estate</b>
            </h4>
            <p>
              Property search engine similar to Right Move or Zoopla. Created
              using React.js
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
              api. Created using React.js
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
            <p>
              Operational cruise ship with gui. Created using Vanilla JavaScript
            </p>
            <br />
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
        <div className="card">
          <img
            className="avatar"
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-10 at 15.07.00.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Portfolio</b>
            </h4>
            <p>Single Page App Portfolio created using React.js</p>
            <br />
          </div>
          <div className="card-buttons">
            <a href="https://github.com/Daniel-Cross/portfolio" target="_blank">
              <button className="work-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="avatar"
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-24 at 13.31.48.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Contact Manager</b>
            </h4>
            <p>
              Create Read Update Delete contacts database application. Created
              using React and Bootstrap
            </p>
            <br />
          </div>
          <div className="card-buttons">
            <a
              href="https://github.com/Daniel-Cross/contact-manager"
              target="_blank"
            >
              <button className="work-button">GitHub</button>
            </a>
            <a
              href="https://daniel-cross.github.io/contact-manager/#/"
              target="_blank"
            >
              <button className="work-button">Live Demo</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="avatar"
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-19 at 00.16.59.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Song List</b>
            </h4>
            <p>
              Lightweight Vanilla JavaScript application that allows a user to
              add their favourite songs, artists and albums.{' '}
            </p>
          </div>
          <div className="card-buttons">
            <a href="https://github.com/Daniel-Cross/songlist" target="_blank">
              <button className="work-button">GitHub</button>
            </a>
            <a href="https://daniel-cross.github.io/songlist/" target="_blank">
              <button className="work-button">Live Demo</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="avatar"
            src={require('/Users/DanielCross/Projects/portfolio/src/images/Screen Shot 2018-09-26 at 12.29.50.png')}
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Github Search Engine</b>
            </h4>
            <p>
              Search GitHub's database for usernames and return their profiles.
            </p>
          </div>
          <div className="card-buttons">
            <a
              href="https://github.com/Daniel-Cross/github-search"
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

export default Projects;
